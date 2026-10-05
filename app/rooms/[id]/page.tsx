import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailPage from "@/app/_components/room/RoomDetailPage";
import { popularListings } from "@/app/_lib/home-data";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = popularListings.find((item) => item.id === id);

  return {
    title: listing ? `${listing.title} | Airbnb` : "Alojamiento | Airbnb",
    description: listing ? `Detalles de ${listing.title} en ${listing.location}.` : "Detalles del alojamiento.",
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  const listing = popularListings.find((item) => item.id === id);

  if (!listing) notFound();

  return <RoomDetailPage listing={listing} />;
}