"use client";

import { useState } from "react";
import type { ServiceTab } from "@/app/_lib/types";

const tabs: { id: ServiceTab; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "alojamientos", label: "Alojamientos" },
  { id: "experiencias", label: "Experiencias" },
  { id: "servicios", label: "Servicios" },
];

export default function ServiceNavTabs() {
  const [active, setActive] = useState<ServiceTab>("todo");

  return (
    <nav aria-label="Tipo de servicio" className="flex justify-center gap-6 md:gap-8">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            aria-pressed={isActive}
            className={`border-b-2 pb-2 text-sm font-medium transition-colors md:text-base ${
              isActive
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
