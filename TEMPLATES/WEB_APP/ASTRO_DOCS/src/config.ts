export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CtaItem {
  label: string;
  href: string;
}

export interface SectionItem {
  id?: string;
  title: string;
  content?: string;
}

export interface InstallStep {
  label: string;
  command: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Config {
  name: string;
  tagline: string;
  description: string;
  version: string;
  github: string;
  releases: string;
  nav: NavItem[];
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCta: CtaItem;
    secondaryCta?: CtaItem | null;
  };
  sections: SectionItem[];
  install: {
    title: string;
    steps: InstallStep[];
  };
  features: FeatureItem[];
  notify: {
    enabled: boolean;
    endpoint: string;
    title: string;
    description: string;
    checkboxLabel: string;
    emailPlaceholder: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    text: string;
    links: FooterLink[];
  };
}

export const config: Config = {
  name: "{{PROJECT_NAME}}",
  tagline: "{{DESCRIPTION}}",
  description: "{{DESCRIPTION}}",
  version: "0.1.0",
  github: "",
  releases: "",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Changelog", href: "/changelog" },
  ],
  hero: {
    badge: "v0.1.0",
    title: "{{PROJECT_NAME}}",
    subtitle: "{{DESCRIPTION}}",
    primaryCta: { label: "Descargar", href: "#" },
    secondaryCta: null,
  },
  sections: [
    {
      id: "intro",
      title: "Introducción",
      content: "Descripción del proyecto. Editá este texto en src/config.ts.",
    },
  ],
  install: {
    title: "Instalación",
    steps: [
      { label: "Clonar el repo", command: "git clone <url>" },
      { label: "Instalar dependencias", command: "npm install" },
      { label: "Ejecutar", command: "npm run dev" },
    ],
  },
  features: [
    { title: "Feature 1", description: "Descripción de la feature." },
    { title: "Feature 2", description: "Descripción de la feature." },
  ],
  notify: {
    enabled: false,
    endpoint: "",
    title: "Notificaciones",
    description: "Recibí un correo cuando haya novedades.",
    checkboxLabel: "Quiero recibir un correo cuando haya actualizaciones",
    emailPlaceholder: "tu@email.com",
    submitLabel: "Suscribirme",
    successMessage: "¡Listo! Te avisaremos cuando haya novedades.",
    errorMessage: "Hubo un error. Intentá de nuevo.",
  },
  footer: {
    text: "{{PROJECT_NAME}}",
    links: [],
  },
};