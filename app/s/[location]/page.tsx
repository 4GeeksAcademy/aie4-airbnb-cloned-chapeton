import type { Metadata } from "next";
import CatalogPage from "@/app/_components/catalog/CatalogPage";
import { getCatalogDestination } from "@/app/_lib/catalog-data";

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location } = await params;
  const destination = getCatalogDestination(location);

  return {
    title: `Alojamientos en ${destination.name} | Airbnb`,
    description: `Explora alojamientos y estancias en ${destination.name}.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params;

  return <CatalogPage destination={getCatalogDestination(location)} />;
}