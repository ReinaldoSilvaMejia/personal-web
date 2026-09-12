# Content Reference (pre-redesign snapshot)

Extracted from the old design (branch `main`, pre `PER-1-Create-web`) before wiping the UI. Use this as the source of truth for real content when building the new design — the old components/CSS were discarded, this content was not.

Site had 3 sections navigated via a horizontal carousel: **Perfil**, **Trayectoria**, **Proyectos**.

## Perfil (Profile / About)

**Name:** Reinaldo Silva Mejía
**Title:** Ingeniero Informático
**Photo:** `public/img/Profile.png`

**Bio (Spanish):**

> ¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, construir soluciones y **convertir ideas en algo real**. Pero mi forma de crear no termina en el código.
>
> La música, el deporte y los videojuegos ocupan un lugar importante en mi vida, y de cierta forma también me ayudan a desconectar.
>
> También tengo mis pequeñas obsesiones: relojes, buenos whiskys y una mesa bien servida. Una buena carne, un gran vino y una conversación sin prisas.
>
> He creado esta web con el fin de juntar y **compartir mis diferentes facetas**; y por qué no, divertirme durante el proceso.

The old design typed this bio out with a typewriter effect on first load, then showed it statically afterward.

**"Conóceme de forma..." — contact / facet links:**

| Facet | Label | Sub-label | URL | Icon (old asset) |
|---|---|---|---|---|
| Profesional | Profesional | Experiencia y proyectos en LinkedIn | https://www.linkedin.com/in/reinaldosilvamejia/ | `public/img/linkedin-icon.webp` |
| Personal | Personal | Mi día a día y aficiones | https://www.instagram.com/reisilva24/ | `public/img/Instagram_icon.png` |
| Creativa | Creativa | Contenido en video y experimentos | https://www.tiktok.com/@reisilva24 | `public/img/tik-tok-logo.webp` |
| Directa | Directa | Contacto directo vía e-mail | mailto:reinaldosilvamejia@hotmail.com | `public/img/email-icon.png` |

## Trayectoria (Career)

Structured as a company list; selecting a company shows role, sector, client, projects and responsibilities.

### The Next Flow
- **Logo:** `public/img/the_next_flow_sl_logo.jpg`
- **Sector:** Aerolíneas
- **Cliente:** Iberojet / Ávoris
- **Rol:** Team Lead & Senior Software Engineer
- **Proyectos:**
  - Motor de reservas para la unificación y control del sistema de reservas.
  - Unificación de sistemas de registros de vuelo para trazar la información de vuelo.
  - Sistema de notificaciones automatizadas vía WhatsApp para pasajeros.
- **Tareas:**
  - Coordinar y ofrecer soporte técnico a un equipo de desarrolladores.
  - Analizar, planificar y desarrollar aplicaciones para la optimización operativa de la aerolínea.
  - Apoyar a los analistas de los diferentes sistemas en las integraciones técnicas.

### Universidad Europea
- **Logo:** `public/img/universidad_europea_de_madrid_logo.jpg`
- **Sector:** Educativo
- **Cliente:** —
- **Rol:** Profesor de Máster
- **Proyectos:**
  - Impartir el módulo "Introducción al Business Process Management" en el Master Universitario en Dirección de Operaciones y Procesos Estratégicos.
- **Tareas:**
  - Enseñar la metodología BPMN a los alumnos mediante casos prácticos.
  - Explicar la importancia del stack tecnológico en la optimización de procesos.

### Minsait Payments
- **Logo:** `public/img/minsait_logo.jpg`
- **Sector:** Fintech / Banca
- **Cliente:** Banco Santander
- **Rol:** Senior Software Engineer
- **Proyectos:**
  - Sistema de registro y procesador de pagos mediante TPV. (Getnet)
- **Tareas:**
  - Análisis técnico y desarrollo de microservicios transaccionales.
  - Documentación técnica y guías de arquitectura de usuario.
  - Optimización de integraciones con base de datos de alto rendimiento.

### Sembo
- **Logo:** `public/img/sembo_travel_logo.jpg`
- **Sector:** Travel Tech
- **Cliente:** —
- **Rol:** Full Stack Developer
- **Proyectos:**
  - Integración de servicios de terceros mediante TravelGate.
  - Rediseño completo del flujo de pixel tracking de la compañía.
- **Tareas:**
  - Desarrollo de interfaces dinámicas en Vue.js para el motor de reservas.
  - Migración de código legacy a arquitecturas modernas en .NET Core.
  - Diseñar y mejorar los dashboards de Grafana para la monitorización.

### Logitravel
- **Logo:** `public/img/logitravel_logo.jpg`
- **Sector:** Turismo / E-commerce
- **Cliente:** Viajes el Corte Inglés
- **Rol:** Core Software Engineer
- **Proyectos:**
  - Automatización de campañas publicitarias integradas con Google Ads.
  - Desarrollo de juego Wordle personalizado para promocionar destinos en tendencia.
- **Tareas:**
  - Mantenimiento y evolución de sistemas backend en VB .NET.
  - Soporte a los usuarios de las herramientas de la intranet.
  - Monitorización y control de excepciones mediante canales de Hangouts.

### WebBeds
- **Logo:** `public/img/webbeds_logo.jpg`
- **Sector:** B2B Travel Distribution
- **Cliente:** —
- **Rol:** Software Engineer Intern
- **Proyectos:**
  - Implementación de Elasticsearch en búsquedas de disponibilidad.
- **Tareas:**
  - Desarrollo de servicios API REST utilizando .NET Core.
  - Despliegue y configuración de entornos de pruebas con Docker.

## Proyectos (Projects)

Never got real content — the old page was a placeholder stub ("Ketchup (Pantalla 2)"). Content for this section still needs to be defined for the new design.

## Reusable image assets

Kept in `public/img/` (not deleted — these are content, not the old design):

- `Profile.png` — profile photo
- `linkedin-icon.webp`, `Instagram_icon.png`, `tik-tok-logo.webp`, `email-icon.png` — social icons
- `the_next_flow_sl_logo.jpg`, `universidad_europea_de_madrid_logo.jpg`, `minsait_logo.jpg`, `sembo_travel_logo.jpg`, `logitravel_logo.jpg`, `webbeds_logo.jpg` — employer logos
- `Background profile.png`, `Background career.png` — old page background art (design-specific, evaluate whether it fits the new design before reusing)

## What was removed

All app UI code and design-specific styling was deleted from `app/` on this branch as part of the redesign reset: `glass-card.tsx`, `carousel-blur/*`, `pages/career.tsx`, `pages/profile.tsx`, `pages/projects.tsx`, the custom `globals.css` rules (glass-card/glass-pill utilities), and `public/assets/type-writer.css`. Dependencies used only by the old design (`@mui/material`, `@mui/icons-material`, `@emotion/*`, `typewriter-effect`, `framer-motion`) are still listed in `package.json` — remove them once the new design's stack is decided.
