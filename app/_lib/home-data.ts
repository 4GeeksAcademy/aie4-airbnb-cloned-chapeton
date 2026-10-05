import type {
  Destination,
  FooterColumn,
  InspirationCategory,
  Listing,
} from "./types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const destinations: Destination[] = [
  { id: "barcelona", name: "Barcelona", subtitle: "A 1 h en avión", imageUrl: unsplash("photo-1583422409516-2895a77efded") },
  { id: "paris", name: "París", subtitle: "A 2 h en avión", imageUrl: unsplash("photo-1502602898657-3e91760cbb34") },
  { id: "lisboa", name: "Lisboa", subtitle: "A 1 h en avión", imageUrl: unsplash("photo-1585208798174-6cedd86e019a") },
  { id: "roma", name: "Roma", subtitle: "A 2 h en avión", imageUrl: unsplash("photo-1552832230-c0197dd311b5") },
  { id: "madrid", name: "Madrid", subtitle: "A 3 h en coche", imageUrl: unsplash("photo-1539037116277-4db20889f2d4") },
  { id: "londres", name: "Londres", subtitle: "A 2 h en avión", imageUrl: unsplash("photo-1513635269975-59663e0ac1ad") },
];

export const popularListings: Listing[] = [
  { id: "1318132770792927673", title: "Apartamento en Barcelona", location: "Barcelona, España", dates: "12–17 oct", pricePerNight: 98, nights: 5, rating: 4.92, imageUrl: unsplash("photo-1502672260266-1c1ef2d93688"), isGuestFavorite: true },
  { id: "2", title: "Loft en El Born", location: "Barcelona, España", dates: "3–8 nov", pricePerNight: 120, nights: 5, rating: 4.85, imageUrl: unsplash("photo-1522708323590-d24dbb6b0267") },
  { id: "3", title: "Piso en Gràcia", location: "Barcelona, España", dates: "20–25 oct", pricePerNight: 76, nights: 5, rating: 4.78, imageUrl: unsplash("photo-1493809842364-78817add7ffb"), isGuestFavorite: true },
  { id: "4", title: "Estudio cerca de la playa", location: "Barceloneta, España", dates: "1–6 dic", pricePerNight: 89, nights: 5, rating: 4.9, imageUrl: unsplash("photo-1560448204-e02f11c3d0e2") },
  { id: "5", title: "Casa con piscina", location: "Sitges, España", dates: "7–12 nov", pricePerNight: 210, nights: 5, rating: 4.96, imageUrl: unsplash("photo-1512917774080-9991f1c4c750"), isGuestFavorite: true },
  { id: "6", title: "Villa en la costa", location: "Castelldefels, España", dates: "14–19 nov", pricePerNight: 180, nights: 5, rating: 4.81, imageUrl: unsplash("photo-1564013799919-ab600027ffc6") },
  { id: "7", title: "Casa moderna", location: "Badalona, España", dates: "28 oct–2 nov", pricePerNight: 145, nights: 5, rating: 4.88, imageUrl: unsplash("photo-1580587771525-78b9dba3b914") },
  { id: "8", title: "Habitación luminosa", location: "Eixample, España", dates: "9–14 dic", pricePerNight: 54, nights: 5, rating: 4.72, imageUrl: unsplash("photo-1505691938895-1758d7feb511") },
];

export const inspirationCategories: InspirationCategory[] = [
  {
    id: "playas",
    label: "Playas",
    links: [
      { title: "Playa de Moliets", subtitle: "Alquileres en la playa" },
      { title: "Sitges", subtitle: "Casas con piscina" },
      { title: "Tarifa", subtitle: "Apartamentos" },
      { title: "Nerja", subtitle: "Alquileres vacacionales" },
      { title: "Cadaqués", subtitle: "Casas" },
      { title: "Biarritz", subtitle: "Alquileres en la playa" },
    ],
  },
  {
    id: "ciudades",
    label: "Ciudades",
    links: [
      { title: "Valencia", subtitle: "Pisos" },
      { title: "Sevilla", subtitle: "Apartamentos" },
      { title: "Oporto", subtitle: "Lofts" },
      { title: "Bilbao", subtitle: "Alquileres vacacionales" },
      { title: "Florencia", subtitle: "Casas" },
      { title: "Ámsterdam", subtitle: "Apartamentos" },
    ],
  },
  {
    id: "historia",
    label: "Con historia",
    links: [
      { title: "Toledo", subtitle: "Casas" },
      { title: "Granada", subtitle: "Cármenes" },
      { title: "Salamanca", subtitle: "Pisos" },
      { title: "Segovia", subtitle: "Alquileres vacacionales" },
      { title: "Córdoba", subtitle: "Casas con patio" },
      { title: "Cáceres", subtitle: "Apartamentos" },
    ],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Asistencia",
    links: ["Centro de ayuda", "AirCover", "Antidiscriminación", "Apoyo a personas con discapacidad", "Opciones de cancelación"],
  },
  {
    title: "Cómo ser anfitrión",
    links: ["Pon tu casa en Airbnb", "AirCover para anfitriones", "Recursos para anfitriones", "Foro de la comunidad", "Hospedaje responsable"],
  },
  {
    title: "Airbnb",
    links: ["Sala de prensa", "Nuevas funciones", "Empleo", "Inversores", "Tarjetas regalo"],
  },
];
