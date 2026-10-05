# ROL
Actúa como un desarrollador frontend sénior con experiencia en React.js y Tailwind CSS. El objetivo es construir una réplica funcional de la interfaz de Airbnb, con una arquitectura clara, código modular y buenas prácticas de experiencia de usuario.

---

# STACK
- **React.js**: Para la funcionalidad, el manejo del estado y la lógica de los componentes.
- **Tailwind CSS**: Como única herramienta para los estilos visuales, los estados interactivos (`hover:`, `focus:`) y las transiciones. No se debe usar CSS plano ni bibliotecas visuales externas.
- **Next.js (App Router)**: Para gestionar las rutas y la navegación del cliente entre vistas, con transiciones fluidas y sin recargas completas del navegador.
- **TypeScript**: Con tipado estricto para las props y las estructuras de datos del proyecto (`.tsx` / `.ts`).

---

# RESTRICCIONES
1. **Mobile-First Estricto**:
   - Toda la interfaz se maqueta y diseña primero para pantallas móviles pequeñas (viewport base de `375px`).
   - A partir de `768px` (`md:` en Tailwind), la interfaz se adapta progresivamente a pantallas de escritorio.
2. **Estructura del Repositorio**:
   - Todo el trabajo debe respetar la estructura actual del proyecto, cuya carpeta raíz es `airbnb-clone/`.
   - Las rutas, páginas y componentes deben ubicarse dentro del directorio `app/` y respetar las convenciones del App Router de Next.js (`layout.tsx`, `page.tsx` y carpetas de rutas).
3. **Principio de Responsabilidad Única (SRP)**:
   - Los componentes deben ser pequeños, estar desacoplados y tener una única responsabilidad. Si uno cumple varias funciones, debe dividirse.
4. **Navegación Client-Side (SPA)**:
   - La navegación entre las tres vistas debe ser fluida y no debe recargar la ventana del navegador.
5. **Orden de Ejecución Obligatorio**:
   - Antes de escribir código de la aplicación, debes crear y completar el archivo `context.md` en la raíz del repositorio.

---

# CONTENIDO

### 1. Documentación preliminar (`context.md`)
- **Perfil del usuario**: Un párrafo breve que describa quién es el usuario y qué busca conseguir o experimentar en esta plataforma.
- **Descripción de las tres vistas**: Detalle de las tres pantallas que se construirán y del contenido específico de cada una.
- **Componentes principales**: Catálogo de los componentes clave de cada vista, tomando como referencia directa la interfaz de Airbnb.com.

### 2. Análisis visual (Vision Prompting)
A partir de la captura de referencia de Airbnb:
- Analiza la interfaz e identifica la jerarquía tipográfica, los colores, las sombras, los rellenos y los espaciados, expresándolos con clases equivalentes de Tailwind CSS.
- Define los componentes atómicos y reutilizables que guiarán la maquetación.

### 3. Implementación de páginas y componentes
Construye las tres vistas requeridas dentro del directorio `app/`:
- **Página principal (Inicio / Explorar)**: Encabezado, barra de búsqueda adaptable, selector de categorías y cuadrícula responsiva de alojamientos.
- **Página de detalle del alojamiento**: Galería fotográfica adaptable, información del anfitrión, lista de servicios y módulo flotante de reserva.
- **Página complementaria (por definir)**: Una vista secundaria, como resultados de búsqueda, listas de deseos o perfil, conectada mediante navegación fluida entre rutas. Su alcance concreto debe definirse antes de implementarla.

#### Especificación técnica de componentes: página de inicio

Esta especificación detalla la descomposición de la vista principal de la réplica de Airbnb, basada en las capturas de referencia y con un enfoque **mobile-first** estricto (viewport base de `375px`, adaptable a pantallas de escritorio a partir de `768px`).

##### 3.1 Visión general de la estructura

La estructura semántica de la página de inicio sigue el estándar HTML5:

- **`<header>` (Sticky)**: Contiene la barra de navegación superior, selector de tipo de servicio y barra de búsqueda interactiva (compacta en móvil, expandida/flotante en desktop).
- **`<main>`**: Área central de contenido con espaciado horizontal uniforme (`px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto`).
   - **Sección 1**: Carrusel o rejilla horizontal de «Destinos para ti».
   - **Sección 2**: Título de sección y cuadrícula de alojamientos populares.
- **`<footer>`**: Enlaces temáticos organizados por pestañas y pie institucional.

##### 3.2 Árbol jerárquico de componentes

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

Las otras dos vistas también deben contar con su propio catálogo de componentes, de acuerdo con el contenido y alcance que se definan para ellas.

---

### Entregables Esperados
1. Especificación técnica y catálogo de componentes derivados de la imagen.
2. Análisis visual de la interfaz de referencia y definición de componentes reutilizables.
3. Código limpio y estructurado para los componentes y las páginas, dentro de la estructura existente del proyecto.