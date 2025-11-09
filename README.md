# Livalance Marketing Website

Produktionsreife, zweisprachige (DE/EN) Marketing-Plattform für Livalance auf Basis von Next.js 14 (App Router), Tailwind CSS und MDX-Inhalten. Die Seite deckt Workshops, Coaching, Unternehmensangebote, Artikel und Rezepte ab und erfüllt Performance-, SEO- und Accessibility-Anforderungen.

## Inhaltsverzeichnis
- [Projektstruktur](#projektstruktur)
- [Voraussetzungen](#voraussetzungen)
- [Schnellstart](#schnellstart)
- [Verfügbare Befehle](#verfügbare-befehle)
- [Umgebungsvariablen](#umgebungsvariablen)
- [Internationalisierung](#internationalisierung)
- [Inhalte & CMS-Flow (MDX)](#inhalte--cms-flow-mdx)
- [Komponenten & Layouts](#komponenten--layouts)
- [Tests & Qualität](#tests--qualität)
- [Deployment](#deployment)
- [Analytics & Integrationen](#analytics--integrationen)

## Projektstruktur
```
├── app/                     # Next.js App Router mit de/en-Scopes, API & dynamischen Seiten
│   ├── api/subscribe        # Newsletter-Endpoint (Placeholder)
│   ├── de/…                 # Alle deutschen Seiten & Layouts
│   └── en/…                 # Alle englischen Seiten & Layouts
├── src/components/          # UI-Komponenten, organisiert in:
│   ├── layout/             # Header, Footer, LocaleSwitcher
│   ├── content/            # Hero, ArticleList, Sections
│   ├── ui/                 # CTAButton, PlausibleScript
│   ├── forms/              # NewsletterForm
│   └── booking/            # BookingEmbed
├── content/                 # MDX-Inhalte (Artikel je Locale) + slug-map.json
├── messages/                # next-intl JSON Messages pro Sprache
├── public/                  # Statische Assets (Logos, Platzhalter-Bilder, Sitemap-Ausgabe)
├── src/
│   ├── home/                # HomePage-Komposition
│   ├── pillars/, about/, …  # Feature-spezifische Server-Komponenten
│   ├── config/              # Navigations-Config
│   ├── i18n/                # next-intl routing + request config
│   ├── lib/                 # Content-Lader, Typen, Slug-Mapping, Structured Data
│   ├── generated/           # Build-Artefakte (MDX-Metadaten & Quellen) – auto-generiert
│   └── styles/              # Tailwind Entry (globals.css)
├── scripts/                 # Entwickler-Skripte (z. B. MDX-Generator)
├── tests/                   # Vitest-Spezifikationen (z. B. Slug-Mapping)
├── next.config.mjs          # Next.js Konfiguration inkl. next-intl Plugin
├── next-sitemap.config.js   # Sitemap-Generation (locale-aware)
├── tailwind.config.ts       # Tailwind Theme & Plugins
├── vitest.config.ts         # Test Konfiguration (mit Path-Aliases)
├── package.json
└── .env.example
```

## Voraussetzungen
- Node.js **>= 20.0.0**
- npm (oder pnpm/yarn) für Paketverwaltung
- Optional: Cal.com & E-Mail Marketing Dienst für Produktiv-Integrationen

## Schnellstart
```bash
cp .env.example .env      # Basis-ENV setzen (Plausible Domain & Base URL)
npm install               # Dependencies installieren
npm run dev               # Entwicklungsserver auf http://localhost:3000
```

Für eine Produktions-Build:
```bash
npm run build
npm start
```

## Verfügbare Befehle
| Befehl                  | Zweck |
|-------------------------|-------|
| `npm run dev`           | Startet Next.js Dev-Server (mit Hot Reload & i18n-Routing).
| `npm run build`         | Standard Next.js Build (inkl. MDX-Preprocessing).
| `npm run generate:articles` | Extrahiert MDX-Frontmatter & -Quellen nach `src/generated/`.
| `npm start`             | Startet den optimierten Server (`next start`).
| `npm run lint`          | ESLint (Next + TypeScript + Tailwind).
| `npm run test`          | Vitest (inkl. jsdom & Path-Aliases).
| `npm run test:coverage` | Vitest mit Coverage Report.
| `npm run typecheck`     | Statisches TypeScript-Checking.
| `npm run format`        | Prettier Check.
| `npm run format:write`  | Prettier mit automatischer Formatierung.
| `npm run generate:sitemap` | Generiert lokalisierte Sitemaps & robots.txt via `next-sitemap`.
| `npm run pages:build`   | Build für Cloudflare Pages.
| `npm run preview`       | Lokale Vorschau mit Wrangler.
| `npm run deploy`       | Build und Deploy zu Cloudflare Pages.

## Umgebungsvariablen
| Variable                     | Beschreibung |
|-----------------------------|--------------|
| `NEXT_PUBLIC_BASE_URL`      | Basis-URL (z. B. `https://livalance.com`) für Metadata & JSON-LD.
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain für Plausible Analytics (leer = kein Script).

Die Variablen werden im Browser benötigt, deshalb `NEXT_PUBLIC_` Präfix.

## Internationalisierung
- `next-intl` Plugin + Middleware erzwingen Locale-Präfixe (`/de`, `/en`).
- `messages/de.json` & `messages/en.json` liefern sämtliche UI-Texte, CTAs, FAQ usw.
- Die `LocaleSwitcher` Komponente hält Pfade & Slugs synchron (Artikel via `content/slug-map.json`).
- Navigation-Routen sind in `src/i18n/routing.ts` und `src/config/navigation.ts` hinterlegt.

## Inhalte & CMS-Flow (MDX)
- Artikel leben unter `content/<locale>/<collection>/<slug>.mdx`.
- Frontmatter wird mit Zod validiert (`src/lib/content-types.ts`).
- `scripts/generate-articles.mjs` extrahiert Frontmatter + MDX-Quellen zur Build-Zeit nach `src/generated/articles-data.ts` (keine `fs`-Zugriffe zur Laufzeit auf Edge).
- `src/lib/content.ts` lädt Daten aus `src/generated/…` und kompiliert MDX zur Laufzeit (Edge-kompatibel, ohne Node-APIs) für Listen- & Detailseiten.
- Für sprachübergreifende Slugs bitte `content/slug-map.json` pflegen, damit der Language Switcher korrekt verlinkt.
- Neue Artikel: MDX-Datei mit Frontmatter anlegen, optional Cover unter `public/images/...` ergänzen, Slug in `slug-map.json` pflegen, fertig.

## Komponenten & Layouts
- Globales Layout (`app/layout.tsx`) lädt Fonts (Inter/Manrope via `next/font`), Tailwind, Plausible-Script (optional), Skip-Link für Accessibility und JSON-LD (WebSite + Organization).
- Lokale Layouts (`app/[locale]/layout.tsx`) binden `Header`, `Footer` und `NextIntlClientProvider` je Sprache ein.
- Komponenten sind in logische Unterverzeichnisse organisiert:
  - `layout/`: Header, Footer, LocaleSwitcher
  - `content/`: Hero, ArticleList, Sections (PillarsGrid, WorkshopHighlight, etc.)
  - `ui/`: CTAButton, PlausibleScript
  - `forms/`: NewsletterForm
  - `booking/`: BookingEmbed
- Strukturierte Daten für Artikel via `src/lib/structured-data.ts` (Schema.org Article + Breadcrumbs Ergänzung möglich).
- Error Boundary (`app/error.tsx`) und Loading States (`app/[locale]/loading.tsx`) für bessere UX.

## Tests & Qualität
- Vitest (`tests/slug-map.spec.ts`) demonstriert Slug-Mapping – weitere Tests willkommen (Target: ≥80 % Coverage).
- ESLint + Prettier + Tailwind Plugin stellen Style & Barrierefreiheit sicher.
- `npm run typecheck` garantiert, dass App Router & MDX-konforme Typen bestehen.

## Deployment
- **Cloudflare Pages** mit `@cloudflare/next-on-pages` für vollständige Next.js-Feature-Unterstützung
- Siehe [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) für detaillierte Anleitung
- Build-Einstellungen:
  - **Build command:** `npm run pages:build`
  - **Build output directory:** `.vercel/output/static`
  - **Environment variables:** `NODE_VERSION=20`, `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- Automatisches Deployment bei Push auf `main` Branch
- API Routes verwenden Edge Runtime für Cloudflare-Kompatibilität

## Analytics & Integrationen
- Plausible Analytics (cookieless) wird nur eingebunden, wenn `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` gesetzt ist.
- Cal.com Embed (`BookingEmbed`) berücksichtigt die aktuelle Sprache (`erstgespraech` / `intro-call`).
- Newsletter Endpoint (`app/api/subscribe/route.ts`) ist ein Mock – Hook für Brevo/Mailerlite einbauen, Logging & Double Opt-In beachten.
- `next-sitemap.config.js` generiert sprachspezifische Sitemaps (`/sitemap_de.xml`, `/sitemap_en.xml`) sowie `robots.txt` mit Allow-Regeln.

---

### Nächste Schritte / TODO-Ideen
1. Echte Analytics-/Newsletter-Dienste anbinden (API-Key Secret Storage, Double Opt-In).
2. Mehr Beispiel-Content & Bilder einpflegen, ggf. Contentlayer für Rich Relationships einsetzen.
3. Lighthouse CI & automatisierte Accessibility-Checks (z. B. `@axe-core/playwright`) ergänzen.
4. Deployment-Pipeline (Vercel, Netlify o. Ä.) mit automatischer Sitemap-Generierung und Smoke-Tests aufsetzen.
