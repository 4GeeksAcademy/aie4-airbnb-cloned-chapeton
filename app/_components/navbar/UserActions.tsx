"use client";

import { useState } from "react";
import Link from "next/link";
import { GlobeIcon, MenuIcon } from "@/app/_components/icons";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Explorar alojamientos", href: "/s/barcelona" },
  { label: "Wishlists", href: "/wishlists" },
];

export default function UserActions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative hidden items-center gap-1 md:flex">
      <Link href="/wishlists" className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100">
        Wishlists
      </Link>
      <button
        type="button"
        aria-label="Idioma y región"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200"
      >
        <GlobeIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Menú principal"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200"
      >
        <MenuIcon className="h-4 w-4" />
      </button>
      {isOpen && (
        <ul className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block px-4 py-3 text-sm transition-colors hover:bg-neutral-100">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
