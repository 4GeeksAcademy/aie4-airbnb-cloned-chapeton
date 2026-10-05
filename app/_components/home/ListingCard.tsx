import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/app/_lib/types";
import { StarIcon } from "@/app/_components/icons";
import Badge from "./Badge";
import FavoriteButton from "./FavoriteButton";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const total = listing.pricePerNight * listing.nights;

  return (
    <Link href={`/rooms/${listing.id}`} className="group flex flex-col gap-2">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 top-3 flex items-start justify-between">
          {listing.isGuestFavorite ? <Badge label="Recomendación del viajero" /> : <span />}
          <FavoriteButton listingId={listing.id} />
        </div>
      </div>
      <div className="flex items-start justify-between gap-2 text-sm">
        <div className="min-w-0">
          <h3 className="truncate font-semibold">{listing.title}</h3>
          <p className="text-neutral-500">{listing.location}</p>
          <p className="text-neutral-500">{listing.dates}</p>
          <p className="mt-1">
            <span className="font-semibold underline">{total} €</span>{" "}
            <span className="text-neutral-500">por {listing.nights} noches</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1">
          <StarIcon className="h-3 w-3" />
          {listing.rating.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
