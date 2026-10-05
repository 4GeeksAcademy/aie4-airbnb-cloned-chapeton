import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/app/_lib/types";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/s/${destination.id}`} className="group flex flex-col gap-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(min-width: 768px) 240px, 70vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="text-sm">
        <h3 className="font-semibold">{destination.name}</h3>
        <p className="text-neutral-500">{destination.subtitle}</p>
      </div>
    </Link>
  );
}
