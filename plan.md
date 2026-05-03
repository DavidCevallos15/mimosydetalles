# 📋 Plan de Proyecto: Sitio Web Híbrido "Mimos y Detalles"

> **Basado en:** `arquitectura.md` — Propuesta de Arquitectura Híbrida: Estrategia Web  
> **Última actualización:** 2026-05-03

Este documento convierte la arquitectura híbrida propuesta en un plan de ejecución accionable, con fases, entregables y criterios de éxito claros.

---

## 🗺️ Contexto y Objetivo

El proyecto consiste en desarrollar un sitio web híbrido con un **"hub" central (Home)** que deriva el tráfico a tres rutas diferenciadas:

| Ruta | Audiencia | Lenguaje | CTA |
|:---|:---|:---|:---|
| **B2B** | Empresas / Corporativos | Estratégico y logístico | Cotización formal |
| **B2C Social** | Eventos sociales | Emocional y visual | WhatsApp directo |
| **B2C Gift Store** | Compra de regalos | Inspiracional y rápido | WhatsApp / Tienda |

La **IA Crítica** es un componente transversal para mejorar la búsqueda y la conversión sin fricción en todas las rutas.

---

## 🚀 Fase 1 — Descubrimiento y Diseño (Semanas 1–2)

### 1.1 Definición de Requisitos
- [ ] Validar el Sitemap completo con los stakeholders
- [ ] Confirmar stack tecnológico (ej. Next.js + Tailwind + Sanity CMS)
- [ ] Definir las métricas de éxito (conversiones WhatsApp, tiempo en página, tasa de rebote)
- [ ] Identificar proveedores de IA para la búsqueda semántica

### 1.2 Arquitectura de Información
- [ ] Definir URLs canónicas de todas las páginas según el Sitemap:
  - `/` → Home (Hub)
  - `/empresas` → Ruta B2B
  - `/eventos-sociales` → Ruta B2C
  - `/gift-store` → Tienda de Regalos
  - `/portafolio`, `/nosotros`, `/blog`, `/contacto`
- [ ] Mapear el flujo de conversión completo: Entrada → Segmentación → Validación → CTA

### 1.3 Diseño UX/UI
- [ ] Wireframes del **Home/Hub** (Hero, Selector de Audiencia, Diferenciadores, Cómo Trabajamos)
- [ ] Wireframes de la **Ruta B2B** (Hero corporativo, Casos de Uso, Capacidad Operativa)
- [ ] Wireframes de las **Rutas B2C** (galerías visuales, carruseles, recorrido emocional)
- [ ] Diseño del **CTA Persistente** de WhatsApp (botón flotante + mensajes precargados)
- [ ] Aprobación de diseños con stakeholders

**Entregable:** Prototipo navegable aprobado en Figma (o herramienta equivalente).

---

## 🏗️ Fase 2 — Desarrollo del Hub y Estructura Base (Semanas 3–4)

### 2.1 Configuración del Entorno
- [ ] Inicializar repositorio Git con rama `main` y `develop`
- [ ] Configurar proyecto base (framework, linting, CI/CD básico)
- [ ] Definir sistema de diseño: tipografías, paleta de colores, espaciados y componentes base

### 2.2 Desarrollo del Home (Hub)
- [ ] **Hero Principal:** Propuesta de valor + CTA WhatsApp prominente
- [ ] **Selector de Audiencia:** Tres rutas visuales claras (Empresa / Evento Social / Regalo)
- [ ] **Bloque de Diferenciadores:** Producción integral, Talento, Rapidez
- [ ] **Cómo Trabajamos:** Brief → Propuesta → Confirmación → Entrega
- [ ] **Navegación Principal** con los 8 ítems del Sitemap + CTA persistente

**Entregable:** Home funcional y responsivo en entorno de staging.

---

## 🛤️ Fase 3 — Desarrollo de las Rutas (Semanas 4–5)

### 3.1 Ruta B2B — Página "Empresas"
- [ ] Hero B2B (énfasis en resultados, KPIs y logística)
- [ ] Casos de Uso: Lanzamientos, Ferias, Activaciones corporativas
- [ ] Capacidad Operativa: Cobertura y logística detallada
- [ ] Logos de clientes / Casos de éxito
- [ ] Formulario de cotización o CTA hacia WhatsApp con mensaje precargado B2B

### 3.2 Ruta B2C — Página "Eventos Sociales"
- [ ] Hero emocional y visual (video o fotografías de alto impacto)
- [ ] Galería de eventos: cumpleaños, bodas, baby showers, etc.
- [ ] Testimonios con fotos y/o videos
- [ ] CTA emocional hacia WhatsApp

### 3.3 Ruta B2C — "Gift Store"
- [ ] Catálogo visual de regalos o paquetes disponibles
- [ ] Filtros por ocasión o presupuesto
- [ ] CTA directo a WhatsApp para cada producto

### 3.4 Páginas de Soporte
- [ ] **Portafolio** (galería unificada con filtros B2B/B2C)
- [ ] **Nosotros** (historia, equipo, valores de marca)
- [ ] **Blog / Ideas** (artículos con categorías)
- [ ] **Contacto** (formulario + mapa + datos de contacto)

**Entregable:** Todas las rutas funcionales y responsivas en staging.

---

## 🔗 Fase 4 — Integraciones y Lógica (Semana 6)

### 4.1 Máquina de Derivación a WhatsApp
- [ ] CTA flotante visible en el 100% de las páginas
- [ ] Mensajes precargados dinámicos según la página activa:
  - B2B: *"Hola, me interesa una cotización para un evento corporativo..."*
  - B2C: *"Hola, me interesa organizar un evento social..."*
  - Gift Store: *"Hola, me interesa un regalo para..."*
- [ ] Seguimiento de clics en Google Tag Manager

### 4.2 IA Crítica
- [ ] Implementar buscador semántico interno (ej. Algolia, ElasticSearch o equivalente)
- [ ] Entrenamiento del asistente con el catálogo de servicios y FAQ
- [ ] Pruebas de experiencia sin fricción (benchmark con Nielsen Norman Group)

### 4.3 CMS (Gestor de Contenidos)
- [ ] Configurar CMS headless (ej. Sanity, Strapi o Contentful)
- [ ] Crear schemas para: Portafolio, Blog, Testimonios, Servicios
- [ ] Capacitación al equipo de contenidos

**Entregable:** Integraciones funcionando en staging con datos reales de prueba.

---

## 🔍 Fase 5 — Contenido y SEO (Semana 7)

### 5.1 Carga de Contenidos
- [ ] Textos definitivos por página (adaptados al lenguaje B2B vs B2C)
- [ ] Fotografías del portafolio optimizadas (WebP, lazy loading)
- [ ] Videos de testimonios y eventos
- [ ] Logos de clientes corporativos

### 5.2 Optimización SEO On-Page
- [ ] Title tags y meta descriptions únicos por página
- [ ] Jerarquía de headings correcta (un solo H1 por página)
- [ ] Open Graph y Twitter Cards para redes sociales
- [ ] Sitemap XML y robots.txt
- [ ] Implementación de Schema.org (LocalBusiness, Event)

### 5.3 Rendimiento y Core Web Vitals
- [ ] Optimización de imágenes y fuentes (LCP < 2.5s)
- [ ] Reducción de JavaScript no crítico (FID/INP < 100ms)
- [ ] Estabilidad del layout (CLS < 0.1)

**Entregable:** Sitio con contenido real, puntuación Lighthouse ≥ 90 en todas las categorías.

---

## ✅ Fase 6 — QA, Pruebas y Lanzamiento (Semana 8)

### 6.1 Quality Assurance
- [ ] Pruebas funcionales: todos los CTAs de WhatsApp y formularios
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge
- [ ] Cross-device: Móvil (iOS/Android), Tablet, Desktop
- [ ] Pruebas del flujo de conversión completo (las 3 rutas)
- [ ] Pruebas de accesibilidad (WCAG 2.1 AA mínimo)

### 6.2 Lanzamiento
- [ ] Configuración del dominio y SSL
- [ ] Migración del contenido al entorno de producción
- [ ] Configuración final de Google Analytics 4 y Search Console
- [ ] Revisión de redirecciones (si aplica)
- [ ] **Go Live** 🚀

### 6.3 Monitoreo Post-Lanzamiento (Semana 9+)
- [ ] Seguimiento de conversiones WhatsApp los primeros 7 días
- [ ] Corrección de hotfixes prioritarios
- [ ] Revisión de Search Console (indexación, errores de rastreo)
- [ ] Informe de métricas de las primeras 4 semanas

---

## 📐 Resumen de Arquitectura de Rutas

```
Home (Hub)
├── /empresas          → Ruta B2B (Estratégico / Logístico)
├── /eventos-sociales  → Ruta B2C (Emocional / Visual)
├── /gift-store        → Ruta B2C (Inspiracional / Rápido)
├── /portafolio
├── /nosotros
├── /blog
└── /contacto
```

---

## 📅 Cronograma Resumen

| Fase | Descripción | Duración |
|:---|:---|:---|
| Fase 1 | Descubrimiento y Diseño | Semanas 1–2 |
| Fase 2 | Desarrollo del Hub | Semanas 3–4 |
| Fase 3 | Desarrollo de las Rutas | Semanas 4–5 |
| Fase 4 | Integraciones y Lógica | Semana 6 |
| Fase 5 | Contenido y SEO | Semana 7 |
| Fase 6 | QA y Lanzamiento | Semana 8 |
| Post | Monitoreo y Hotfixes | Semana 9+ |

**Duración total estimada:** 8–9 semanas

---

*Plan generado a partir de `arquitectura.md` — Propuesta de Arquitectura Híbrida: Estrategia Web.*
