"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

interface WishlistContextValue {
  favoriteIds: string[];
  isHydrated: boolean;
  toggleFavorite: (listingId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);
const storageKey = "airbnb-clone:wishlist";
const emptyIds: string[] = [];
const listeners = new Set<() => void>();
let cachedStorageValue: string | null | undefined;
let cachedFavoriteIds = emptyIds;
let inMemoryFavoriteIds = emptyIds;

function readFavoriteIds() {
  if (typeof window === "undefined") return emptyIds;

  try {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue === cachedStorageValue) return cachedFavoriteIds;

    cachedStorageValue = storedValue;
    const parsedValue: unknown = storedValue ? JSON.parse(storedValue) : [];
    cachedFavoriteIds =
      Array.isArray(parsedValue) && parsedValue.every((id) => typeof id === "string")
        ? parsedValue
        : emptyIds;
    inMemoryFavoriteIds = cachedFavoriteIds;
    return cachedFavoriteIds;
  } catch {
    return inMemoryFavoriteIds;
  }
}

function getServerFavoriteIds() {
  return emptyIds;
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function handleStorageChange() {
  cachedStorageValue = undefined;
  notifyListeners();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", handleStorageChange);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function subscribeHydration() {
  return () => {};
}

function getHydrationSnapshot() {
  return true;
}

function getServerHydrationSnapshot() {
  return false;
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const favoriteIds = useSyncExternalStore(subscribe, readFavoriteIds, getServerFavoriteIds);
  const isHydrated = useSyncExternalStore(
    subscribeHydration,
    getHydrationSnapshot,
    getServerHydrationSnapshot,
  );

  function toggleFavorite(listingId: string) {
    const currentIds = readFavoriteIds();
    const nextIds = currentIds.includes(listingId)
      ? currentIds.filter((id) => id !== listingId)
      : [...currentIds, listingId];
    const serializedIds = JSON.stringify(nextIds);

    inMemoryFavoriteIds = nextIds;
    cachedFavoriteIds = nextIds;
    try {
      localStorage.setItem(storageKey, serializedIds);
      cachedStorageValue = serializedIds;
    } catch {
      cachedStorageValue = undefined;
    }
    notifyListeners();
  }

  return (
    <WishlistContext.Provider value={{ favoriteIds, isHydrated, toggleFavorite }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist debe usarse dentro de WishlistProvider");
  return context;
}