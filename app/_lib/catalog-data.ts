import { destinations, popularListings } from "./home-data";
import type { Destination, Listing } from "./types";

const destinationDetails: Record<string, Pick<Destination, "name" | "imageUrl">> = {
  barcelona: { name: "Barcelona", imageUrl: destinations[0].imageUrl },
  paris: { name: "París", imageUrl: destinations[1].imageUrl },
  lisboa: { name: "Lisboa", imageUrl: destinations[2].imageUrl },
  roma: { name: "Roma", imageUrl: destinations[3].imageUrl },
  madrid: { name: "Madrid", imageUrl: destinations[4].imageUrl },
  londres: { name: "Londres", imageUrl: destinations[5].imageUrl },
  "playa-de-moliets": {
    name: "Playa de Moliets",
    imageUrl:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85",
  },
};

export interface CatalogDestination {
  slug: string;
  name: string;
  imageUrl: string;
  listings: Listing[];
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCatalogDestination(slug: string): CatalogDestination {
  const destination = destinationDetails[slug] ?? {
    name: titleFromSlug(slug),
    imageUrl: destinations[0].imageUrl,
  };

  return {
    slug,
    ...destination,
    listings: popularListings.map((listing, index) => ({
      ...listing,
      location: `${destination.name}, ${index % 2 === 0 ? "España" : "Francia"}`,
    })),
  };
}

export const popularAmenities = [
  { id: "kitchen", label: "Cocina", symbol: "K" },
  { id: "wifi", label: "Wifi", symbol: "W" },
  { id: "pool", label: "Piscina", symbol: "P" },
  { id: "parking", label: "Aparcamiento gratuito", symbol: "A" },
];

export const nearbyDestinations = [
  { name: "Sitges", slug: "sitges", detail: "A 40 min en coche" },
  { name: "Cadaqués", slug: "cadaques", detail: "Pueblos costeros" },
  { name: "Valencia", slug: "valencia", detail: "Escapadas urbanas" },
  { name: "Tarifa", slug: "tarifa", detail: "Alojamientos junto al mar" },
];