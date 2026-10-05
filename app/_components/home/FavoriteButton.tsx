"use client";

import { useState } from "react";
import { HeartIcon } from "@/app/_components/icons";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
      aria-pressed={isFavorite}
      onClick={(event) => {
        event.preventDefault();
        setIsFavorite((value) => !value);
      }}
      className={`transition-transform hover:scale-110 ${isFavorite ? "text-brand" : ""}`}
    >
      <HeartIcon filled={isFavorite} className="h-6 w-6" />
    </button>
  );
}
