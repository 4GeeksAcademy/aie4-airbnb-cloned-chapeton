import type { InspirationLink } from "@/app/_lib/types";

interface LinksGridProps {
  links: InspirationLink[];
}

export default function LinksGrid({ links }: LinksGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:grid-cols-6">
      {links.map((link) => (
        <li key={link.title}>
          <a href="#" className="block text-sm hover:underline">
            <span className="block font-semibold">{link.title}</span>
            <span className="block text-neutral-500">{link.subtitle}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
