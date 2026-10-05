import type { FooterColumn } from "@/app/_lib/types";

interface InstitutionalFooterProps {
  columns: FooterColumn[];
}

export default function InstitutionalFooter({ columns }: InstitutionalFooterProps) {
  return (
    <div className="flex flex-col gap-8 border-t border-neutral-200 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3 border-b border-neutral-200 pb-8 md:border-none md:pb-0">
            <h3 className="text-sm font-semibold">{column.title}</h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-neutral-600 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="border-t border-neutral-200 pt-6 text-sm text-neutral-600">
        © {new Date().getFullYear()} Airbnb, Inc. · Privacidad · Términos · Mapa del sitio
      </p>
    </div>
  );
}
