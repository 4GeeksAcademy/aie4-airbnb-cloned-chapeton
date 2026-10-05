# Contexto del proyecto

## Perfil del usuario

Personas que quieren descubrir alojamientos para viajes, comparar opciones por destino y guardar sus favoritas antes de decidir dónde hospedarse.

## Vistas

1. **Inicio (`/`)**: búsqueda, destinos recomendados y cuadrícula de alojamientos.
2. **Catálogo (`/s/[location]`)**: alojamientos de un destino, comodidades y lugares relacionados.
3. **Wishlists (`/wishlists`)**: alojamientos guardados desde las tarjetas o el detalle.
4. **Detalle (`/rooms/[id]`)**: galería, información de estancia, servicios y widget de reserva.

## Componentes principales

- **Compartidos**: `Navbar`, `SearchBar` y `Footer`.
- **Inicio y catálogo**: `CategoryCarousel`, `DestinationCard`, `ListingGrid` y `ListingCard`.
- **Wishlists**: `WishlistContent` y `FavoriteButton`.
- **Detalle**: `RoomActions`, galería fotográfica y `BookingWidget`.

## Criterios visuales

La interfaz parte de móvil y adapta sus rejillas y navegación con breakpoints de Tailwind. Mantiene una presentación clara, con imágenes protagonistas, tonos neutros, acentos de marca y componentes reutilizables. La especificación ampliada se encuentra en [context_airbnb.md](context_airbnb.md).