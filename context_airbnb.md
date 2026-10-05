# Rol
Actúa como un desarrollador frontend sénior con experiencia en React.js y Tailwind CSS. El objetivo es construir una réplica funcional de la interfaz de Airbnb, con una arquitectura clara, código modular y buenas prácticas de experiencia de usuario.

---

# Stack
- **React.js**: Para la funcionalidad, el manejo del estado y la lógica de los componentes.
- **Tailwind CSS**: Como única herramienta para los estilos visuales, los estados interactivos (`hover:`, `focus:`) y las transiciones. No se debe usar CSS plano ni bibliotecas visuales externas.
- **Next.js (App Router)**: Para gestionar las rutas y la navegación del cliente entre vistas, con transiciones fluidas y sin recargas completas del navegador.
- **TypeScript**: Con tipado estricto para las props y las estructuras de datos del proyecto (`.tsx` / `.ts`).

---

# Restricciones
1. **Mobile-First Estricto**:
   - Toda la interfaz se maqueta y diseña primero para pantallas móviles pequeñas (viewport base de `375px`).
   - A partir de `768px` (`md:` en Tailwind), la interfaz se adapta progresivamente a pantallas de escritorio.
2. **Estructura del Repositorio**:
   - Todo el trabajo debe respetar la estructura actual del proyecto, cuya carpeta raíz es `airbnb-clone/`.
   - Las rutas, páginas y componentes deben ubicarse dentro del directorio `app/` y respetar las convenciones del App Router de Next.js (`layout.tsx`, `page.tsx` y carpetas de rutas).
3. **Principio de Responsabilidad Única (SRP)**:
   - Los componentes deben ser pequeños, estar desacoplados y tener una única responsabilidad. Si uno cumple varias funciones, debe dividirse.
4. **Navegación Client-Side (SPA)**:
  - La navegación entre las cuatro vistas debe ser fluida y no debe recargar la ventana del navegador.
5. **Orden de Ejecución Obligatorio**:
   - Antes de escribir código de la aplicación, debes crear y completar el archivo `context_airbnb.md` en la raíz del repositorio.

---

# Contenido

## 1. Documentación preliminar (`context.md`)
- **Perfil del usuario**: Un párrafo breve que describa quién es el usuario y qué busca conseguir o experimentar en esta plataforma.
- **Descripción de las cuatro vistas**: Detalle de las pantallas que se construirán y del contenido específico de cada una.
- **Componentes principales**: Catálogo de los componentes clave de cada vista, tomando como referencia directa la interfaz de Airbnb.com.

## 2. Análisis visual (Vision Prompting)
A partir de la captura de referencia de Airbnb:
- Analiza la interfaz e identifica la jerarquía tipográfica, los colores, las sombras, los rellenos y los espaciados, expresándolos con clases equivalentes de Tailwind CSS.
- Define los componentes atómicos y reutilizables que guiarán la maquetación.

## 3. Implementación de páginas y componentes
Construye las cuatro vistas requeridas dentro del directorio `app/`:
- **Página principal (Inicio / Explorar)**: Encabezado, barra de búsqueda adaptable, selector de categorías y cuadrícula responsiva de alojamientos.


### 3.1 Página principal (Inicio / Explorar)

#### 3.1.1 Visión general de la estructura

Esta especificación detalla la descomposición de la vista principal de la réplica de Airbnb, basada en las capturas de referencia y con un enfoque **mobile-first** estricto (viewport base de `375px`, adaptable a pantallas de escritorio a partir de `768px`).

La estructura semántica de la página de inicio sigue el estándar HTML5:

- **`<header>` (Sticky)**: Contiene la barra de navegación superior, selector de tipo de servicio y barra de búsqueda interactiva (compacta en móvil, expandida/flotante en desktop).
- **`<main>`**: Área central de contenido con espaciado horizontal uniforme (`px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto`).
  - **Sección 1**: Carrusel o rejilla horizontal de «Destinos para ti».
  - **Sección 2**: Título de sección y cuadrícula de alojamientos populares.
- **`<footer>`**: Enlaces temáticos organizados por pestañas y pie institucional.

#### 3.1.2 Árbol jerárquico de componentes

```text
HomePage (`app/page.tsx`)
├── Navbar
│   ├── Logo
│   ├── ServiceNavTabs (Todo, Alojamientos, Experiencias, Servicios)
│   ├── SearchBar (Mobile vs Desktop)
│   └── UserActions (Hazte anfitrión, Icono idioma, Menu dropdown)
├── CategoryCarousel ("Destinos para ti")
│   └── DestinationCard
├── ListingsSection ("Alojamientos populares en...")
│   └── ListingGrid
│       └── ListingCard
│           ├── Badge ("Recomendación del viajero")
│           ├── FavoriteButton (Heart icon)
│           └── ImageCarousel / Thumbnail
└── Footer
   ├── InspirationTabs (pestañas: Playas, Ciudades, Con historia, etc.)
   │   └── LinksGrid
   └── InstitutionalFooter (Asistencia, Cómo ser anfitrión, Airbnb)
```


Las otras tres vistas también deben contar con su propio catálogo de componentes, de acuerdo con el contenido y alcance que se definan para ellas.

- **Página de detalle del alojamiento**: Galería fotográfica adaptable, información del anfitrión, lista de servicios y módulo flotante de reserva.

### 3.2 Catálogo de alojamientos (resultados / destino)

Esta especificación cubre la vista de **Catálogo y Resultados de Búsqueda** (ejemplo: *Playa de Moliets*), dividida según las capturas de referencia en: Banner Hero interactivo con formulario de reserva, cuadrículas de resultados con badges ("Recomendación del viajero", "Superanfitrión"), carrusel de comodidades y sección inferior de enlaces por categorías. Se aplica arquitectura **mobile-first** estricta (`375px` base, adaptado a escritorio a partir de `768px`).

---

#### 3.2.1 Visión general del layout

- **`<header>` (Sticky)**: Barra de navegación compacta con logo, acceso directo "Pon tu casa en Airbnb" y botón de acción principal ("Empieza a buscar").
- **`<main>`**:
  - **Hero de Destino (`DestinationHero`)**: Contenedor visual de dos columnas en escritorio (tarjeta de búsqueda flotante a la izquierda y fotografía destacada a la derecha). En móvil, se apilan verticalmente.
  - **Listado Principal de Alojamientos (`CatalogGrid`)**: Cuadrícula de tarjetas con detalle textual (ubicación, resumen, puntuación y número de evaluaciones).
  - **Comodidades Populares (`AmenitiesSection`)**: Carrusel/grilla de tarjetas de servicios destacados (Cocina, Wifi, Piscina, etc.).
  - **Alojamientos Destacados / Recomendados (`FeaturedListingsGrid`)**: Segunda sección de alojamientos con chips visuales superpuestos ("Recomendación del viajero" / "Superanfitrión").
  - **Explorador Temático (`DestinationTabsSection`)**: Selector de pestañas para navegación por lugares ("Destinos a un paso de ti", "Otros tipos de alojamientos", etc.).
- **`<footer>`**: Pie de página institucional y copyright.

---

#### 3.2.2 Árbol jerárquico de componentes

```text
CatalogPage (`app/s/[location]/page.tsx` o `app/catalog/page.tsx`)
├── CatalogNavbar
│   ├── Logo
│   ├── HostLink ("Pon tu casa en Airbnb")
│   └── PrimaryCTAButton ("Empieza a buscar")
├── DestinationHero
│   ├── HeroSearchCard
│   │   ├── LocationInput
│   │   ├── DateRangePicker (Llegada / Salida / Selector interactivo)
│   │   └── SearchSubmitButton
│   └── HeroImageBanner
├── CatalogSection (Título + Listado)
│   └── PropertyCard (Layout tipo catálogo con rating y evaluaciones)
├── AmenitiesSection ("Comodidades populares en...")
│   └── AmenityCard (Icono + Nombre de la comodidad)
├── FeaturedSection ("Recomendación del viajero / Superanfitrión")
│   └── PropertyCard (Con badges superiores)
│       └── PropertyBadge
└── DestinationTabsSection ("Destinos por descubrir")
    ├── CategoryTabNav
    └── DestinationLinksGrid
```

### 3.3 Vista 3: Wishlists (lista de deseos)

Vista para consultar los alojamientos guardados como favoritos, conservarlos al navegar entre rutas y retirarlos de la lista. La página se conecta con los controles para guardar de las tarjetas y del detalle del alojamiento.

### 3.4 Vista 4: Detalle del alojamiento / habitación (`app/rooms/[id]/page.tsx`)

Esta especificación detalla la descomposición técnica y funcional de la vista individual de un alojamiento basada en la URL de referencia (`/rooms/1318132770792927673`), implementada con enfoque **mobile-first** estricto (`375px` base, adaptado a escritorio a partir de `768px`) (refs. 13, 20).

---

#### 3.4.1 Visión general del layout

- **`<header>` (Sticky)**: Barra de navegación compacta con logo, buscador reducido y menú de usuario/compartir.
- **`<main>`**: Área central de contenido estructurada según el viewport:
  - **Móvil (`< 768px`)**: Carrusel deslizante de fotos a sangre (`full-width`), seguido del bloque de información en una sola columna y barra inferior de reserva fija en la parte inferior (*sticky bottom*).
  - **Escritorio (`>= 768px`)**:
    - **Cabecera de Título**: Título principal del alojamiento, calificación, reseñas, condición de Superanfitrión y botones de acción (*Compartir* y *Guardar*).
    - **Galería Fotográfica (`ListingPhotoGrid`)**: Mosaico asimétrico de 5 fotografías (1 foto principal grande a la izquierda y rejilla de 4 fotos secundarias a la derecha) con botón flotante "Mostrar todas las fotos".
    - **Cuerpo a Dos Columnas (`grid grid-cols-1 md:grid-cols-12 gap-12`)**:
      - **Columna Izquierda (`md:col-span-7 lg:col-span-8`)**: Información del anfitrión, características destacadas de la estancia, descripción completa, distribución de camas, lista de servicios e información de la zona.
      - **Columna Derecha (`md:col-span-5 lg:col-span-4`)**: Widget flotante de reserva (*sticky top-28*) con selector de fechas, huéspedes, desglose de tarifas y botón de confirmación (refs. 17, 18).
    - **`<footer>`**: Pie de página institucional y enlaces de ayuda (refs. 17, 18).

---

#### 3.4.2 Árbol jerárquico de componentes

```text
RoomDetailPage (`app/rooms/[id]/page.tsx`)
├── RoomHeader (Título, calificación, badges, botones Guardar/Compartir)
├── RoomGallery
│   ├── MobilePhotoSlider (Móvil)
│   └── DesktopPhotoGrid (Desktop: 5 fotos en layout 1 + 4)
│       └── ShowAllPhotosButton
├── RoomContentLayout (Contenedor 2 columnas en desktop)
│   ├── RoomMainInfo (Columna izquierda)
│   │   ├── HostSummary (Tipo de propiedad, anfitrión, capacidad, habitaciones)
│   │   ├── KeyFeaturesList (Icono + título + descripción corta de ventajas)
│   │   ├── RoomDescription (Texto colapsable con botón "Mostrar más")
│   │   ├── SleepingArrangements (Tarjetas con tipo de cama por estancia)
│   │   ├── AmenitiesPreviewList (Iconos de servicios con modal/botón ver todos)
│   │   └── LocationMapPreview (Mapa estático/interactivo de la zona)
│   └── RoomReservationAside (Columna derecha)
│       └── BookingWidget (Card fija con cálculo de tarifa, fechas y botón de reserva)
│           ├── PricingSummary
│           ├── DateAndGuestsPicker
│           ├── ReserveButton
│           └── PriceBreakdownList
└── MobileStickyReserveBar (Barra fija inferior visible solo en < 768px)
```

#### 3.4.3 Especificación detallada de componentes

##### 3.4.3.1 RoomHeader (Molécula)

**Propósito:** Muestra el nombre comercial de la estancia, rating promedio, contador de evaluaciones y accesos rápidos para compartir o agregar a favoritos.

**Layout:** Ocupa el ancho completo antes de la galería fotográfica (`w-full pb-4 hidden md:block`).

**Props:**
```ts
interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  isSuperhost?: boolean;
  locationSummary: string;
  isFavorite?: boolean;
  onShare: () => void;
  onToggleFavorite: () => void;
}
```

##### 3.4.3.2 RoomGallery (Organismo)

**Propósito:** Desplegar el set fotográfico del inmueble de forma adaptable.

**Layout:**
- **Móvil:** Carrusel deslizante de relación de aspecto 4:3 o 16:9 con indicador numérico de página flotante (`relative w-full aspect-[4/3] overflow-x-auto snap-x flex md:hidden`).
- **Escritorio:** Grilla de 5 imágenes con bordes redondeados (`hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-2 h-[420px] rounded-2xl overflow-hidden relative`) (refs. 17, 18, 22).

**Props:**
```ts
interface PhotoItem {
  id: string;
  url: string;
  altText: string;
}

interface RoomGalleryProps {
  photos: PhotoItem[];
  onOpenFullGallery?: () => void;
}
```

##### 3.4.3.3 HostSummary (Molécula)

**Propósito:** Presenta la tipología del alquiler (ej. "Alojamiento entero: piso en..."), el nombre y foto de perfil del anfitrión, y la ficha técnica básica (huéspedes, dormitorios, camas y baños).

**Layout:** Cabecera del bloque de detalles con separador inferior (`flex justify-between items-center py-6 border-b border-gray-200`).

**Props:**
```ts
interface HostSummaryProps {
  propertyType: string;
  hostName: string;
  hostAvatarUrl: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}
```

##### 3.4.3.4 KeyFeaturesList (Molécula)

**Propósito:** Resalta aspectos clave garantizados (ej. "Llegada autónoma con caja de seguridad", "Cancelación flexible", "Zona de trabajo adecuada") (ref. 18).

**Layout:** Lista vertical con iconos alineados a la izquierda (`flex flex-col gap-4 py-6 border-b border-gray-200`).

**Props:**
```ts
interface KeyFeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface KeyFeaturesListProps {
  features: KeyFeatureItem[];
}
```

##### 3.4.3.5 BookingWidget (Organismo)

**Propósito:** Tarjeta interactiva para calcular el importe final según fechas de check-in, check-out y número de huéspedes, permitiendo accionar la reserva.

**Layout:**
- **Móvil:** Oculto en el cuerpo principal; se proyecta simplificado en `MobileStickyReserveBar`.
- **Escritorio:** Caja flotante fija al scroll (`sticky top-28 w-full p-6 bg-white border border-gray-200 rounded-2xl shadow-xl`).

**Props:**
```ts
interface PriceBreakdown {
  basePrice: number;
  nights: number;
  cleaningFee: number;
  serviceFee: number;
  taxes: number;
  total: number;
}

interface BookingWidgetProps {
  pricePerNight: number;
  currencySymbol?: string;
  rating: number;
  reviewsCount: number;
  checkInDate?: string;
  checkOutDate?: string;
  guestsCount: number;
  breakdown?: PriceBreakdown;
  onDateChange: (checkIn: string, checkOut: string) => void;
  onGuestsChange: (guests: number) => void;
  onSubmitReservation: () => void;
}
```

##### 3.4.3.6 AmenitiesPreviewList (Molécula)

**Propósito:** Matriz visual de los servicios incluidos (Wifi, Cocina, Aire acondicionado, Lavadora, etc.) con botón para ver el listado íntegro (refs. 18, 22).

**Layout:** Cuadrícula de 2 columnas en móvil y tablet (`grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-gray-200`) (refs. 18, 22).

**Props:**
```ts
interface AmenityDetailItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  available: boolean;
}

interface AmenitiesPreviewListProps {
  amenities: AmenityDetailItem[];
  totalCount: number;
  onShowAllAmenitiesModal: () => void;
}
```

##### 3.4.3.7 MobileStickyReserveBar (Molécula)

**Propósito:** Barra de conversión inferior para viewports móviles que fija el precio por noche y el botón de reserva mientras se navega por el contenido (refs. 17, 18).

**Layout:** Fijo en el fondo de la pantalla (`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between md:hidden`) (refs. 17, 18).

**Props:**
```ts
interface MobileStickyReserveBarProps {
  pricePerNight: number;
  currencySymbol?: string;
  dateRangeText?: string;
  onStartBooking: () => void;
}
```
---

## Entregables esperados
1. Especificación técnica y catálogo de componentes derivados de la imagen.
2. Análisis visual de la interfaz de referencia y definición de componentes reutilizables.
3. Código limpio y estructurado para los componentes y las páginas, dentro de la estructura existente del proyecto.