import type { Listing } from "@/app/_lib/types";
import ListingGrid from "./ListingGrid";

interface ListingsSectionProps {
  title: string;
  listings: Listing[];
}

export default function ListingsSection({ title, listings }: ListingsSectionProps) {
  return (
    <section aria-labelledby="listings-title" className="flex flex-col gap-6">
      <h2 id="listings-title" className="text-xl font-semibold md:text-2xl">
        {title}
      </h2>
      <ListingGrid listings={listings} />
    </section>
  );
}
