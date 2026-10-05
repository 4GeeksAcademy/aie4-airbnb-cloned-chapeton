import { footerColumns, inspirationCategories } from "@/app/_lib/home-data";
import InspirationTabs from "./InspirationTabs";
import InstitutionalFooter from "./InstitutionalFooter";

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-20">
        <InspirationTabs categories={inspirationCategories} />
        <InstitutionalFooter columns={footerColumns} />
      </div>
    </footer>
  );
}
