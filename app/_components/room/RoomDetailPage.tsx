import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/app/_components/icons";
import Footer from "@/app/_components/footer/Footer";
import Navbar from "@/app/_components/navbar/Navbar";
import type { Listing } from "@/app/_lib/types";
import { getRoomPhotos, roomAmenities, roomFeatures } from "@/app/_lib/room-data";
import BookingWidget from "./BookingWidget";
import RoomActions from "./RoomActions";

interface RoomDetailPageProps {
  listing: Listing;
}

export default function RoomDetailPage({ listing }: RoomDetailPageProps) {
  const photos = getRoomPhotos(listing);
  const bedrooms = 2;
  const beds = 2;
  const guests = 4;

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-28 pt-6 sm:px-8 md:px-12 md:pb-12 lg:px-20">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold leading-tight sm:text-2xl">{listing.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1 font-medium">
                <StarIcon className="h-3.5 w-3.5" /> {listing.rating.toFixed(2)}
              </span>
              <a className="font-semibold underline" href="#reviews">24 reseñas</a>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Superanfitrión</span>
              <span>·</span>
              <span className="underline">{listing.location}</span>
            </div>
          </div>
          <div className="hidden sm:block"><RoomActions /></div>
        </div>

        <section aria-label="Galería de fotos" className="relative">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto md:hidden">
            {photos.map((photo, index) => (
              <div className="relative aspect-[4/3] min-w-[86vw] snap-center overflow-hidden rounded-xl bg-neutral-100" key={photo.id}>
                <Image alt={photo.altText} className="object-cover" fill priority={index === 0} sizes="86vw" src={photo.url} />
                <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                  {index + 1} / {photos.length}
                </span>
              </div>
            ))}
          </div>
          <div className="hidden h-[420px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl md:grid">
            {photos.map((photo, index) => (
              <div className={`relative overflow-hidden bg-neutral-100 ${index === 0 ? "col-span-2 row-span-2" : ""}`} key={photo.id}>
                <Image alt={photo.altText} className="object-cover transition-transform duration-300 hover:scale-105" fill priority={index === 0} sizes="(min-width: 768px) 25vw, 100vw" src={photo.url} />
              </div>
            ))}
            <button className="absolute bottom-4 right-4 rounded-lg border border-neutral-900 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-100" type="button">
              Mostrar todas las fotos
            </button>
          </div>
        </section>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7 lg:col-span-8">
            <section className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-6">
              <div>
                <h2 className="text-lg font-semibold">Alojamiento entero: apartamento</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  {guests} huéspedes · {bedrooms} habitaciones · {beds} camas · 1 baño
                </p>
              </div>
              <div aria-label="Anfitrión: Marta" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg font-semibold text-rose-800">
                M
              </div>
            </section>

            <section className="space-y-5 border-b border-neutral-200 py-6">
              {roomFeatures.map((feature) => (
                <div className="flex gap-4" key={feature.title}>
                  <span aria-hidden="true" className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">
                    {feature.title.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className="border-b border-neutral-200 py-6">
              <h2 className="text-lg font-semibold">Un espacio para disfrutar de {listing.location}</h2>
              <p className="mt-3 leading-7 text-neutral-700">
                {listing.title} combina una ubicación cómoda con espacios pensados para descansar después de explorar la zona. Disfruta de una estancia tranquila y de todo lo necesario para sentirte como en casa.
              </p>
              <button className="mt-3 font-semibold underline underline-offset-2" type="button">
                Mostrar más
              </button>
            </section>

            <section className="border-b border-neutral-200 py-6">
              <h2 className="text-lg font-semibold">¿Dónde dormirás?</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Dormitorio 1 · cama doble", "Dormitorio 2 · dos camas individuales"].map((room) => (
                  <div className="rounded-xl border border-neutral-300 p-4" key={room}>
                    <span aria-hidden="true" className="text-xl">⌂</span>
                    <p className="mt-3 font-semibold">{room.split(" · ")[0]}</p>
                    <p className="mt-1 text-sm text-neutral-600">{room.split(" · ")[1]}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-b border-neutral-200 py-6">
              <h2 className="text-lg font-semibold">Lo que ofrece este alojamiento</h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {roomAmenities.map((amenity) => (
                  <li className={`flex items-center gap-3 text-sm ${amenity.available ? "" : "text-neutral-400 line-through"}`} key={amenity.id}>
                    <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 font-semibold">
                      {amenity.label.charAt(0)}
                    </span>
                    {amenity.label}
                  </li>
                ))}
              </ul>
              <button className="mt-5 rounded-lg border border-neutral-900 px-4 py-3 text-sm font-semibold hover:bg-neutral-50" type="button">
                Mostrar los 12 servicios
              </button>
            </section>

            <section className="border-b border-neutral-200 py-6" id="reviews">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <StarIcon className="h-4 w-4" /> {listing.rating.toFixed(2)} · 24 reseñas
              </h2>
              <p className="mt-2 text-sm text-neutral-600">Los huéspedes destacan la limpieza, la comodidad y la ubicación.</p>
            </section>

            <section className="py-6">
              <h2 className="text-lg font-semibold">Dónde estarás</h2>
              <p className="mt-1 text-sm text-neutral-600">{listing.location}</p>
              <div className="relative mt-4 flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-[#e8eee8]">
                <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(28deg,transparent_45%,#b8c8b8_46%,#b8c8b8_49%,transparent_50%),linear-gradient(110deg,transparent_38%,#c6d2c2_39%,#c6d2c2_42%,transparent_43%),linear-gradient(168deg,transparent_62%,#b9cbb8_63%,#b9cbb8_66%,transparent_67%)]" />
                <div className="relative rounded-full bg-brand p-3 text-white shadow-lg" aria-label="Ubicación aproximada">
                  <span aria-hidden="true">●</span>
                </div>
                <span className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-2 text-sm font-medium">Ubicación aproximada</span>
              </div>
            </section>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <BookingWidget
              defaultNights={listing.nights}
              pricePerNight={listing.pricePerNight}
              rating={listing.rating}
              reviewsCount={24}
            />
          </div>
        </div>
        <div className="mt-8 sm:hidden"><RoomActions /></div>
        <Link className="sr-only" href="/">Volver al inicio</Link>
      </main>
      <Footer />
    </>
  );
}