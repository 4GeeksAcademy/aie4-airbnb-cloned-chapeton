export type ServiceTab = "todo" | "alojamientos" | "experiencias" | "servicios";

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  dates: string;
  pricePerNight: number;
  nights: number;
  rating: number;
  imageUrl: string;
  isGuestFavorite?: boolean;
}

export interface InspirationLink {
  title: string;
  subtitle: string;
}

export interface InspirationCategory {
  id: string;
  label: string;
  links: InspirationLink[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}
