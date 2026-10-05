"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SearchIcon } from "@/app/_components/icons";

const desktopFields = [
  { label: "Dónde", placeholder: "Explora destinos" },
  { label: "Fechas", placeholder: "Añade fechas" },
  { label: "Quién", placeholder: "¿Cuántos?" },
];

export function MobileSearchBar() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/s/barcelona")}
      className="flex w-full items-center justify-center gap-3 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold shadow-md transition-shadow hover:shadow-lg md:hidden"
    >
      <SearchIcon className="h-4 w-4" />
      Empieza a buscar
    </button>
  );
}

export function DesktopSearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const slug = destination
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "barcelona";

    router.push(`/s/${slug}`);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="mx-auto hidden w-full max-w-3xl items-center rounded-full border border-neutral-200 bg-white shadow-md md:flex"
    >
      {desktopFields.map((field, index) => (
        <label
          key={field.label}
          className={`flex flex-1 cursor-pointer flex-col rounded-full px-8 py-3 transition-colors hover:bg-neutral-100 ${
            index > 0 ? "border-l border-neutral-200" : ""
          }`}
        >
          <span className="text-xs font-semibold">{field.label}</span>
          <input
            type="text"
            placeholder={field.placeholder}
            value={index === 0 ? destination : index === 1 ? dates : travelers}
            onChange={(event) => {
              if (index === 0) setDestination(event.target.value);
              if (index === 1) setDates(event.target.value);
              if (index === 2) setTravelers(event.target.value);
            }}
            aria-label={field.label}
            className="bg-transparent text-sm text-neutral-600 placeholder:text-neutral-500 focus:outline-none"
          />
        </label>
      ))}
      <button
        type="submit"
        aria-label="Buscar"
        className="mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
      >
        <SearchIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
