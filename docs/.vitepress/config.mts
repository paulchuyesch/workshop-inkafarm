/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsBase = "/workshop-inkafarm/";
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="%2300C88C"><g transform="translate(4,4)"><rect x="14" y="0" width="12" height="32" rx="6"/><rect x="4" y="10" width="32" height="12" rx="6"/></g></svg>';
const socialLinks = [] as const;

const esLectureItems = [
  { text: "Bienvenido", link: "/es/" },
  { text: "1. Introducción a ChatGPT Work", link: "/es/lectures/lecture-01-introduccion-a-chatgpt-work/" },
  { text: "2. Skills en ChatGPT", link: "/es/lectures/lecture-02-skills-en-chatgpt/" },
  { text: "3. Construcción de skill de análisis de datos", link: "/es/lectures/lecture-03-construccion-de-skill-de-analisis-de-datos/" },
  { text: "4. Probando tu skill", link: "/es/lectures/lecture-04-probando-tu-skill/" },
  { text: "5. Crea tu primera tarea automática", link: "/es/lectures/lecture-05-crea-tu-primera-tarea-automatica/" },
  { text: "6. Coding Agents", link: "/es/lectures/lecture-06-coding-agents/" },
  { text: "7. Generación del Spec", link: "/es/lectures/lecture-07-generacion-del-spec/" },
  { text: "8. Creación de la interfaz en Lovable", link: "/es/lectures/lecture-08-creacion-de-la-interfaz-en-lovable/" },
  { text: "9. Creación del Agente", link: "/es/lectures/lecture-09-creacion-del-agente/" },
  { text: "10. Plan de adopción", link: "/es/lectures/lecture-10-plan-de-adopcion/" }
];

const esProjectItems = [
  { text: "Bienvenido", link: "/es/projects/" }
];

const esResourceItems = [
  { text: "Resumen de Recursos", link: "/es/resources/" },
  { text: "Catálogo de Datasets", link: "/es/resources/datasets/" },
  { text: "Plantillas y Prompts", link: "/es/resources/templates/" }
];

const esSkillItems = [
  { text: "Resumen de Skills", link: "/es/skills/" },
];

const esSourceItems = { lectures: esLectureItems, projects: esProjectItems, resources: esResourceItems, skills: esSkillItems };

const relinkItems = (items: Array<{ text: string; link: string }>, locale: string) =>
  items.map((item) => ({
    ...item,
    link: item.link.replace(/^\/es\//, `/${locale}/`),
  }));

const createLocaleTheme = (
  locale: string,
  sourceItems: {
    lectures: Array<{ text: string; link: string }>;
    projects: Array<{ text: string; link: string }>;
    resources: Array<{ text: string; link: string }>;
    skills: Array<{ text: string; link: string }>;
  },
  labels: {
    lectures: string;
    projects: string;
    resources: string;
    skills: string;
    resourceLibrary: string;
    outline?: string;
    prev?: string;
    next?: string;
    lastUpdated?: string;
    returnToTop?: string;
    sidebarMenu?: string;
    darkModeSwitch?: string;
    lightModeSwitchTitle?: string;
    darkModeSwitchTitle?: string;
  },
) => {
  const lectures = relinkItems(sourceItems.lectures, locale);
  const projects = relinkItems(sourceItems.projects, locale);
  const resources = relinkItems(sourceItems.resources, locale);
  const skills = relinkItems(sourceItems.skills, locale);

  return {
    nav: [
      { text: labels.lectures, link: lectures[1].link, activeMatch: `^/${locale}/(lectures/.*)?$` },
      { text: labels.projects, link: projects[0].link, activeMatch: `^/${locale}/projects/` },
      { text: labels.resources, link: `/${locale}/resources/`, activeMatch: `^/${locale}/resources/` },
      { text: labels.skills, link: `/${locale}/skills/`, activeMatch: `^/${locale}/skills/` }
    ],
    sidebar: {
      [`/${locale}/projects/`]: [{ text: labels.projects, items: projects }],
      [`/${locale}/resources/`]: [{ text: labels.resourceLibrary, items: resources }],
      [`/${locale}/skills/`]: [{ text: labels.skills, items: skills }],
      [`/${locale}/`]: [{ text: labels.lectures, items: lectures }]
    },
    outline: {
      level: [2, 3],
      ...(labels.outline ? { label: labels.outline } : {})
    },
    docFooter: {
      prev: labels.prev || "Anterior",
      next: labels.next || "Siguiente"
    },
    lastUpdated: {
      text: labels.lastUpdated || "Última actualización",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    returnToTopLabel: labels.returnToTop || "Volver arriba",
    sidebarMenuLabel: labels.sidebarMenu || "Menú",
    darkModeSwitchLabel: labels.darkModeSwitch || "Tema",
    lightModeSwitchTitle: labels.lightModeSwitchTitle || "Cambiar a tema claro",
    darkModeSwitchTitle: labels.darkModeSwitchTitle || "Cambiar a tema oscuro",
    socialLinks
  };
};

const esThemeConfig = createLocaleTheme("es", esSourceItems, {
  lectures: "Lecciones",
  projects: "Proyectos",
  resources: "Biblioteca",
  skills: "Skills",
  resourceLibrary: "Biblioteca de recursos",
  outline: "En esta página",
  prev: "Anterior",
  next: "Siguiente",
  lastUpdated: "Última actualización",
  returnToTop: "Volver arriba",
  sidebarMenu: "Menú",
  darkModeSwitch: "Tema",
  lightModeSwitchTitle: "Cambiar a tema claro",
  darkModeSwitchTitle: "Cambiar a tema oscuro",
});

export default withMermaid(
  defineConfig({
    base: docsBase,
    title: "Workshop InkaFarm",
    description:
      "Taller práctico sobre ChatGPT Work, Skills de Análisis de Datos, Spec-Driven Development, Lovable y Agentes Conversacionales.",
    cleanUrls: true,
    srcExclude: ["temp/**"],
    ignoreDeadLinks: true,
    lastUpdated: true,
    lang: "es-ES",
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: brandLogo }]],
    themeConfig: esThemeConfig,
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
    },
    mermaid: {
      theme: "base",
      themeVariables: {
        primaryColor: '#F4F3EE',
        primaryBorderColor: '#D1D1D1',
        primaryTextColor: '#1A1A1A',
        lineColor: '#B3B3B3',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px'
      },
      flowchart: {
        nodeSpacing: 40,
        rankSpacing: 56,
        padding: 12
      },
    },
    locales: {
      root: {
        label: "Español",
        lang: "es-ES",
        themeConfig: esThemeConfig,
      },
      es: {
        label: "Español",
        lang: "es-ES",
        link: "/es/",
        themeConfig: esThemeConfig,
      }
    },
  }),
);
