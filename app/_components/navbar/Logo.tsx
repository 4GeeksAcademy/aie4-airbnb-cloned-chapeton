import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Airbnb, inicio" className="flex items-center gap-1 text-brand">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M16 1c2 0 3.5 1.1 5 3.9l7.6 15.4c.6 1.3.9 2.3.9 3.3 0 3.6-2.6 6.4-6 6.4-2.3 0-4.4-1.3-7.5-4.6-3.1 3.3-5.2 4.6-7.5 4.6-3.4 0-6-2.8-6-6.4 0-1 .3-2 .9-3.3L11 4.9C12.5 2.1 14 1 16 1Zm0 18.3c-1.6 2-2.6 3.8-2.6 5 0 .5.2.9.5 1.3.7.6 1.3.9 2.1.9.8 0 1.5-.3 2.1-.9.4-.4.5-.8.5-1.3 0-1.2-1-3-2.6-5Zm0-15.3c-.9 0-1.6.6-2.4 2.2L6.1 21.5c-.4.9-.6 1.5-.6 2.1 0 2 1.4 3.4 3.1 3.4 1.5 0 3-1 5.5-3.6-1.9-2.4-3-4.7-3-6.4 0-2.6 1.9-4.5 4.9-4.5s4.9 1.9 4.9 4.5c0 1.7-1.1 4-3 6.4 2.5 2.6 4 3.6 5.5 3.6 1.7 0 3.1-1.4 3.1-3.4 0-.6-.2-1.2-.6-2.1L18.4 6.2C17.6 4.6 16.9 4 16 4Zm0 11.6c-1.2 0-1.9.6-1.9 1.6 0 .9.6 2.3 1.9 4 1.3-1.7 1.9-3.1 1.9-4 0-1-.7-1.6-1.9-1.6Z" />
      </svg>
      <span className="hidden text-xl font-bold tracking-tight lg:inline">airbnb</span>
    </Link>
  );
}
