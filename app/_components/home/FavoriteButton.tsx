"use client";

import { HeartIcon } from "@/app/_components/icons";
import { useWishlist } from "@/app/_lib/WishlistContext";

interface FavoriteButtonProps {
  listingId: string;
}

export default function FavoriteButton({ listingId }: FavoriteButtonProps) {
  const { favoriteIds, isHydrated, toggleFavorite } = useWishlist();
  const isFavorite = favoriteIds.includes(listingId);

  return (
    <button
      type="button"
      aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
      aria-pressed={isFavorite}
      disabled={!isHydrated}
      onClick={(event) => {
        event.preventDefault();
        toggleFavorite(listingId);
      }}
      className={`transition-transform hover:scale-110 ${isFavorite ? "text-brand" : ""}`}
    >
      <HeartIcon filled={isFavorite} className="h-6 w-6" />
    </button>
  );
}
