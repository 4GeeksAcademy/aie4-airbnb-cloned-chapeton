"use client";

import { useState } from "react";
import type { InspirationCategory } from "@/app/_lib/types";
import LinksGrid from "./LinksGrid";

interface InspirationTabsProps {
  categories: InspirationCategory[];
}

export default function InspirationTabs({ categories }: InspirationTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const active = categories.find((category) => category.id === activeId);

  return (
    <section aria-labelledby="inspiration-title" className="flex flex-col gap-6 py-10">
      <h2 id="inspiration-title" className="text-xl font-semibold md:text-2xl">
        Inspiración para futuras escapadas
      </h2>
      <div role="tablist" className="flex gap-6 overflow-x-auto border-b border-neutral-200 [scrollbar-width:none]">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(category.id)}
              className={`shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors ${
                isActive
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      {active && <LinksGrid links={active.links} />}
    </section>
  );
}
