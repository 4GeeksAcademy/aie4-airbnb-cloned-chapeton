import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/_components/footer/Footer";
import Navbar from "@/app/_components/navbar/Navbar";
import ListingGrid from "@/app/_components/home/ListingGrid";
import type { CatalogDestination } from "@/app/_lib/catalog-data";
import { nearbyDestinations, popularAmenities } from "@/app/_lib/catalog-data";
import CatalogSearchForm from "./CatalogSearchForm";

interface CatalogPageProps {
  destination: CatalogDestination;
}

export default function CatalogPage({ destination }: CatalogPageProps) {
  const featuredListings = destination.listings.filter(
    (listing) => listing.isGuestFavorite,
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 py-8 sm:px-8 md:px-12 lg:px-20">
        <section className="grid overflow-hidden rounded-2xl bg-neutral-100 md:min-h-[340px] md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center gap-6 p-6 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold text-brand">Encuentra tu próxima estancia</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                Alojamientos en {destination.name}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
                Explora casas y apartamentos para una escapada a tu ritmo.
              </p>
            </div>
            <CatalogSearchForm initialDestination={destination.name} />
          </div>
          <div className="relative min-h-56 md:min-h-full">
            <Image
              alt={`Destino: ${destination.name}`}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              src={destination.imageUrl}
            />
          </div>
        </section>

        <section aria-labelledby="catalog-listings-title" className="space-y-6">
          <div>
            <p className="text-sm text-neutral-500">Alojamientos disponibles</p>
            <h2 id="catalog-listings-title" className="mt-1 text-2xl font-semibold">
              Estancias en {destination.name}
            </h2>
          </div>
          <ListingGrid listings={destination.listings} />
        </section>

        <section aria-labelledby="amenities-title" className="space-y-5">
          <div>
            <p className="text-sm text-neutral-500">Encuentra lo que necesitas</p>
            <h2 id="amenities-title" className="mt-1 text-2xl font-semibold">
              Comodidades populares en {destination.name}
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {popularAmenities.map((amenity) => (
              <li key={amenity.id}>
                <div className="flex min-h-24 items-center gap-4 border-y border-neutral-200 px-3 py-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold"
                  >
                    {amenity.symbol}
                  </span>
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="featured-title" className="space-y-6">
          <div>
            <p className="text-sm text-neutral-500">Estancias mejor valoradas</p>
            <h2 id="featured-title" className="mt-1 text-2xl font-semibold">
              Recomendación del viajero
            </h2>
          </div>
          <ListingGrid listings={featuredListings} />
        </section>

        <section aria-labelledby="nearby-title" className="border-t border-neutral-200 pt-8">
          <h2 id="nearby-title" className="text-2xl font-semibold">
            Destinos por descubrir
          </h2>
          <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyDestinations.map((place) => (
              <li key={place.slug}>
                <Link className="group block" href={`/s/${place.slug}`}>
                  <span className="font-semibold group-hover:underline">{place.name}</span>
                  <span className="mt-1 block text-sm text-neutral-500">{place.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}