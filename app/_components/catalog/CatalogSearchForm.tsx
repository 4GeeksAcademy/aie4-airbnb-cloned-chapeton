"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SearchIcon } from "@/app/_components/icons";

interface CatalogSearchFormProps {
  initialDestination: string;
}

export default function CatalogSearchForm({
  initialDestination,
}: CatalogSearchFormProps) {
  const router = useRouter();
  const [destination, setDestination] = useState(initialDestination);
  const [guests, setGuests] = useState("2 huéspedes");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const slug = destination
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    if (slug) router.push(`/s/${slug}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-sm sm:grid-cols-[1.2fr_1fr_auto]"
    >
      <label className="flex flex-col bg-white px-4 py-3 sm:px-5">
        <span className="text-xs font-semibold">Destino</span>
        <input
          aria-label="Destino"
          className="w-full bg-transparent text-sm outline-none"
          onChange={(event) => setDestination(event.target.value)}
          value={destination}
        />
      </label>
      <label className="flex flex-col bg-white px-4 py-3 sm:px-5">
        <span className="text-xs font-semibold">Viajeros</span>
        <select
          aria-label="Viajeros"
          className="bg-transparent text-sm outline-none"
          onChange={(event) => setGuests(event.target.value)}
          value={guests}
        >
          <option>1 huésped</option>
          <option>2 huéspedes</option>
          <option>3 huéspedes</option>
          <option>4 huéspedes</option>
        </select>
      </label>
      <button
        className="flex min-h-12 items-center justify-center gap-2 bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:min-h-0"
        type="submit"
      >
        <SearchIcon className="h-4 w-4" />
        Buscar
      </button>
    </form>
  );
}