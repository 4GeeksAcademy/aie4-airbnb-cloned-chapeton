"use client";

import Link from "next/link";
import ListingGrid from "@/app/_components/home/ListingGrid";
import { useWishlist } from "@/app/_lib/WishlistContext";
import type { Listing } from "@/app/_lib/types";

interface WishlistContentProps {
  listings: Listing[];
}

export default function WishlistContent({ listings }: WishlistContentProps) {
  const { favoriteIds, isHydrated } = useWishlist();
  const savedListings = listings.filter((listing) => favoriteIds.includes(listing.id));

  if (!isHydrated) {
    return (
      <div aria-label="Cargando lista de deseos" className="grid animate-pulse grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="status">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="space-y-3" key={index}>
            <div className="aspect-square rounded-xl bg-neutral-200" />
            <div className="h-4 w-3/4 rounded bg-neutral-200" />
            <div className="h-4 w-1/2 rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    );
  }

  if (savedListings.length === 0) {
    return (
      <section className="max-w-xl border-l-2 border-brand pl-5" aria-labelledby="empty-wishlist-title">
        <h2 className="text-lg font-semibold" id="empty-wishlist-title">Todavía no guardaste alojamientos</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Guarda tus favoritos mientras exploras y los encontrarás aquí.
        </p>
        <Link className="mt-5 inline-flex rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700" href="/">
          Explorar alojamientos
        </Link>
      </section>
    );
  }

  return <ListingGrid listings={savedListings} />;
}