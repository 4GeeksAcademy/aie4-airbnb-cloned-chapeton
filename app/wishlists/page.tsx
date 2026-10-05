import type { Metadata } from "next";
import WishlistContent from "@/app/_components/wishlist/WishlistContent";
import Footer from "@/app/_components/footer/Footer";
import Navbar from "@/app/_components/navbar/Navbar";
import { popularListings } from "@/app/_lib/home-data";

export const metadata: Metadata = {
  title: "Wishlists | Airbnb",
  description: "Tus alojamientos favoritos guardados.",
};

export default function WishlistsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-8 sm:px-8 md:px-12 lg:px-20">
        <header>
          <p className="text-sm font-semibold text-brand">Tus favoritos</p>
          <h1 className="mt-1 text-3xl font-semibold">Wishlists</h1>
        </header>
        <WishlistContent listings={popularListings} />
      </main>
      <Footer />
    </>
  );
}