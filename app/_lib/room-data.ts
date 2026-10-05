import type { Listing } from "./types";

export interface RoomPhoto {
  id: string;
  url: string;
  altText: string;
}

export interface RoomAmenity {
  id: string;
  label: string;
  available: boolean;
}

const additionalPhotoUrls = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
];

export function getRoomPhotos(listing: Listing): RoomPhoto[] {
  return [listing.imageUrl, ...additionalPhotoUrls].map((url, index) => ({
    id: `${listing.id}-${index}`,
    url,
    altText: `${listing.title}, fotografía ${index + 1}`,
  }));
}

export const roomAmenities: RoomAmenity[] = [
  { id: "wifi", label: "Wifi", available: true },
  { id: "kitchen", label: "Cocina", available: true },
  { id: "workspace", label: "Zona para trabajar", available: true },
  { id: "washer", label: "Lavadora", available: true },
  { id: "air-conditioning", label: "Aire acondicionado", available: true },
  { id: "parking", label: "Aparcamiento gratuito", available: false },
];

export const roomFeatures = [
  {
    title: "Llegada autónoma",
    description: "Accede al alojamiento con facilidad a tu llegada.",
  },
  {
    title: "Cancelación flexible",
    description: "Consulta las condiciones antes de confirmar tu estancia.",
  },
  {
    title: "Zona de trabajo",
    description: "Un espacio cómodo para trabajar durante tu viaje.",
  },
];