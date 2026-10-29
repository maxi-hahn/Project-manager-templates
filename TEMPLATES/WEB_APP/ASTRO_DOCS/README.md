# Astro Docs Template

Template de documentación con **Astro** + **Tailwind CSS**. Dark mode, minimalista, sin backend.

Pensado para servir como base de cualquier sitio de documentación: landing, changelog, formulario de notificaciones opcional.

## Requisitos

- Node.js 18+
- npm (o pnpm/yarn)

## Uso rápido

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:4321`.

Para build de producción:

```bash
npm run build
npm run preview
```

## Configuración

Toda la personalización se hace desde **`src/config.ts`**. Ahí definís:

| Campo | Descripción |
|-------|-------------|
| `name` | Nombre del proyecto |
| `tagline` / `description` | Frase corta y descripción larga |
| `version` | Versión actual |
| `github` | URL del repo |
| `releases` | URL de releases (botón de descarga) |
| `notifyEndpoint` | URL del Apps Script (dejar `""` si no se usa) |
| `nav` | Links del navbar |
| `hero` | Título, subtítulo, badge y botones |
| `sections` | Secciones de contenido genéricas |
| `install` | Pasos de instalación (label + comando) |
| `features` | Cards de features |
| `notify` | Config del formulario de notificaciones |
| `footer` | Texto y links del footer |

### Desactivar notificaciones

En `src/config.ts`:

```ts
notify: {
  enabled: false,
  ...
}
```

### Agregar secciones

```ts
sections: [
  { id: "intro", title: "Introducción", content: "..." },
  { id: "uso", title: "Uso", content: "..." },
]
```

### Cambiar colores

En `tailwind.config.mjs`:

```js
colors: {
  bg: "#0a0a0a",
  card: "#141414",
  border: "#262626",
  accent: "#7c3aed",
}
```

## Notificaciones (opcional)

Permite capturar emails en un Google Sheet vía Google Apps Script, sin backend propio.

### 1. Crear el Sheet

Columnas: `email` | `timestamp`.

### 2. Apps Script

Extensiones → Apps Script. Pegá:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.email, new Date()]);
  return ContentService.createTextOutput("OK");
}
```

### 3. Deploy

Deploy → New deployment → **Web app**:
- Execute as: **Me**
- Who has access: **Anyone**

Copiá la URL y pegala en `notifyEndpoint` dentro de `src/config.ts`.

### 4. (Opcional) Enviar mails

Desde el mismo Apps Script, con `MailApp.sendEmail(...)` en un trigger manual o programado.

## Deploy

### Vercel

- Framework: Astro (autodetectado).
- Build: `npm run build`.
- Output: `dist`.

### GitHub Pages

En `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://usuario.github.io",
  base: "/nombre-del-repo",
  integrations: [tailwind()],
});
```

## Estructura

```
astro-docs-template/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   ├── CodeBlock.astro
│   │   ├── NotifyForm.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── changelog.astro
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── template.json
└── README.md
```

## Stack

- Astro 4
- Tailwind CSS 3
- Google Apps Script (notificaciones opcionales)

## Licencia

MIT