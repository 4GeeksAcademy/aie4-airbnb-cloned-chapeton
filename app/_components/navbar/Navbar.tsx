import Logo from "./Logo";
import { DesktopSearchBar, MobileSearchBar } from "./SearchBar";
import ServiceNavTabs from "./ServiceNavTabs";
import UserActions from "./UserActions";
import Link from "next/link";
import { HeartIcon } from "@/app/_components/icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-4 pt-4 sm:px-8 md:px-12 md:pb-6 lg:px-20">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:block md:flex-1">
            <Logo />
          </div>
          <div className="flex w-full items-center gap-2 md:hidden">
            <div className="min-w-0 flex-1">
              <MobileSearchBar />
            </div>
            <Link
              aria-label="Abrir Wishlists"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200"
              href="/wishlists"
            >
              <HeartIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ServiceNavTabs />
          </div>
          <div className="hidden justify-end md:flex md:flex-1">
            <UserActions />
          </div>
        </div>
        <div className="md:hidden">
          <ServiceNavTabs />
        </div>
        <DesktopSearchBar />
      </div>
    </header>
  );
}
