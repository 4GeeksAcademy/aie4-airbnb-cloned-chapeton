import Navbar from "@/app/_components/navbar/Navbar";
import CategoryCarousel from "@/app/_components/home/CategoryCarousel";
import ListingsSection from "@/app/_components/home/ListingsSection";
import Footer from "@/app/_components/footer/Footer";
import { destinations, popularListings } from "@/app/_lib/home-data";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 py-8 sm:px-8 md:px-12 lg:px-20">
        <CategoryCarousel title="Destinos para ti" destinations={destinations} />
        <ListingsSection title="Alojamientos populares en Barcelona" listings={popularListings} />
      </main>
      <Footer />
    </>
  );
}
