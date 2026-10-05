"use client";

import { useState, type FormEvent } from "react";

interface BookingWidgetProps {
  pricePerNight: number;
  defaultNights: number;
  rating: number;
  reviewsCount: number;
}

interface ReservationFieldsProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getNightCount(checkIn: string, checkOut: string, fallback: number) {
  if (!checkIn || !checkOut) return fallback;
  const start = new Date(`${checkIn}T00:00:00`).getTime();
  const end = new Date(`${checkOut}T00:00:00`).getTime();
  const nights = Math.round((end - start) / 86_400_000);
  return nights > 0 ? nights : fallback;
}

export default function BookingWidget({
  pricePerNight,
  defaultNights,
  rating,
  reviewsCount,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [status, setStatus] = useState("");
  const nights = getNightCount(checkIn, checkOut, defaultNights);
  const accommodation = pricePerNight * nights;
  const cleaningFee = 35;
  const serviceFee = Math.round(accommodation * 0.12);
  const total = accommodation + cleaningFee + serviceFee;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(`Fechas seleccionadas para ${guests} ${guests === "1" ? "huésped" : "huéspedes"}.`);
    setIsMobileFormOpen(false);
  }

  return (
    <>
      <aside className="sticky top-28 hidden h-fit rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg md:block">
        <div className="mb-5 flex items-end justify-between gap-3">
          <p>
            <span className="text-2xl font-semibold">{formatPrice(pricePerNight)}</span>
            <span className="text-neutral-600"> / noche</span>
          </p>
          <p className="shrink-0 text-sm">
            <span aria-hidden="true">★</span> {rating.toFixed(2)} · {reviewsCount} reseñas
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <ReservationFields
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
            onCheckInChange={setCheckIn}
            onCheckOutChange={setCheckOut}
            onGuestsChange={setGuests}
          />
        </form>
        <PriceBreakdown
          accommodation={accommodation}
          cleaningFee={cleaningFee}
          nights={nights}
          pricePerNight={pricePerNight}
          serviceFee={serviceFee}
          total={total}
        />
        {status && <p className="mt-4 text-sm text-green-700" role="status">{status}</p>}
      </aside>

      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-neutral-200 bg-white px-5 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
        <div>
          <p className="font-semibold">{formatPrice(pricePerNight)} <span className="font-normal">/ noche</span></p>
          <p className="text-xs text-neutral-600">{checkIn && checkOut ? `${checkIn} - ${checkOut}` : "Añade fechas"}</p>
        </div>
        <button
          className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          onClick={() => setIsMobileFormOpen(true)}
          type="button"
        >
          Reservar
        </button>
      </div>

      {isMobileFormOpen && (
        <div className="fixed inset-0 z-[60] flex items-end bg-black/40 md:hidden">
          <section
            aria-labelledby="mobile-booking-title"
            aria-modal="true"
            className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5"
            role="dialog"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold" id="mobile-booking-title">Tu reserva</h2>
              <button
                aria-label="Cerrar reserva"
                className="rounded-full px-3 py-2 hover:bg-neutral-100"
                onClick={() => setIsMobileFormOpen(false)}
                type="button"
              >
                Cerrar
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <ReservationFields
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                onCheckInChange={setCheckIn}
                onCheckOutChange={setCheckOut}
                onGuestsChange={setGuests}
              />
            </form>
            <PriceBreakdown
              accommodation={accommodation}
              cleaningFee={cleaningFee}
              nights={nights}
              pricePerNight={pricePerNight}
              serviceFee={serviceFee}
              total={total}
            />
          </section>
        </div>
      )}
    </>
  );
}

function ReservationFields({
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
}: ReservationFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-400">
        <label className="flex flex-col border-r border-neutral-300 px-3 py-2">
          <span className="text-[10px] font-bold uppercase">Llegada</span>
          <input
            aria-label="Fecha de llegada"
            className="min-w-0 bg-transparent text-sm outline-none"
            onChange={(event) => onCheckInChange(event.target.value)}
            type="date"
            value={checkIn}
          />
        </label>
        <label className="flex flex-col px-3 py-2">
          <span className="text-[10px] font-bold uppercase">Salida</span>
          <input
            aria-label="Fecha de salida"
            className="min-w-0 bg-transparent text-sm outline-none"
            onChange={(event) => onCheckOutChange(event.target.value)}
            type="date"
            value={checkOut}
          />
        </label>
        <label className="col-span-2 flex flex-col border-t border-neutral-300 px-3 py-2">
          <span className="text-[10px] font-bold uppercase">Viajeros</span>
          <select
            aria-label="Número de viajeros"
            className="bg-transparent text-sm outline-none"
            onChange={(event) => onGuestsChange(event.target.value)}
            value={guests}
          >
            {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "huésped" : "huéspedes"}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        className="w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        type="submit"
      >
        Consultar disponibilidad
      </button>
    </>
  );
}

interface PriceBreakdownProps {
  accommodation: number;
  cleaningFee: number;
  nights: number;
  pricePerNight: number;
  serviceFee: number;
  total: number;
}

function PriceBreakdown({
  accommodation,
  cleaningFee,
  nights,
  pricePerNight,
  serviceFee,
  total,
}: PriceBreakdownProps) {
  return (
    <ul className="mt-5 space-y-3 text-sm">
      <li className="flex justify-between">
        <span className="underline">{formatPrice(pricePerNight)} x {nights} noches</span>
        <span>{formatPrice(accommodation)}</span>
      </li>
      <li className="flex justify-between">
        <span className="underline">Tarifa de limpieza</span>
        <span>{formatPrice(cleaningFee)}</span>
      </li>
      <li className="flex justify-between">
        <span className="underline">Tarifa por servicio</span>
        <span>{formatPrice(serviceFee)}</span>
      </li>
      <li className="flex justify-between border-t border-neutral-200 pt-4 font-semibold">
        <span>Total antes de impuestos</span>
        <span>{formatPrice(total)}</span>
      </li>
    </ul>
  );
}