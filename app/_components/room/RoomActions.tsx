"use client";

import { useState } from "react";
import { HeartIcon, ShareIcon } from "@/app/_components/icons";
import { useWishlist } from "@/app/_lib/WishlistContext";

export default function RoomActions({ listingId }: { listingId: string }) {
  const { favoriteIds, isHydrated, toggleFavorite } = useWishlist();
  const isFavorite = favoriteIds.includes(listingId);
  const [shareLabel, setShareLabel] = useState("Compartir");

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareLabel("Enlace copiado");
    } catch {
      setShareLabel("Copia el enlace desde el navegador");
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        aria-label={shareLabel}
        className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold underline-offset-2 hover:bg-neutral-100 hover:underline"
        onClick={handleShare}
        type="button"
      >
        <ShareIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{shareLabel}</span>
      </button>
      <button
        aria-label={isFavorite ? "Quitar de favoritos" : "Guardar alojamiento"}
        aria-pressed={isFavorite}
        disabled={!isHydrated}
        className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold underline-offset-2 hover:bg-neutral-100 hover:underline"
        onClick={() => toggleFavorite(listingId)}
        type="button"
      >
        <HeartIcon className="h-4 w-4" filled={isFavorite} />
        <span className="hidden sm:inline">Guardar</span>
      </button>
    </div>
  );
}