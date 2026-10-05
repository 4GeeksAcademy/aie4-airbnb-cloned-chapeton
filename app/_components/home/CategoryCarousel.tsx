"use client";

import { useRef } from "react";
import type { Destination } from "@/app/_lib/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/_components/icons";
import DestinationCard from "./DestinationCard";

interface CategoryCarouselProps {
  title: string;
  destinations: Destination[];
}

const arrowClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white transition-shadow hover:shadow-md";

export default function CategoryCarousel({ title, destinations }: CategoryCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="destinations-title" className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 id="destinations-title" className="text-xl font-semibold md:text-2xl">
          {title}
        </h2>
        <div className="hidden gap-2 md:flex">
          <button type="button" aria-label="Anterior" onClick={() => scrollBy(-1)} className={arrowClass}>
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Siguiente" onClick={() => scrollBy(1)} className={arrowClass}>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <ul
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] md:mx-0 md:px-0"
      >
        {destinations.map((destination) => (
          <li key={destination.id} className="w-[70%] shrink-0 snap-start sm:w-[40%] md:w-60">
            <DestinationCard destination={destination} />
          </li>
        ))}
      </ul>
    </section>
  );
}
