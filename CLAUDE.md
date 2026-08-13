# CLAUDE.md

Este archivo proporciona orientación sobre el repositorio del **Workshop InkaFarm**.

## Descripción del Proyecto

Plataforma e-learning construida con VitePress para el **Workshop InkaFarm**. Contiene el material del taller de 10 pasos sobre ChatGPT Work, Skills de Análisis de Datos, Spec-Driven Development, Lovable y Agentes Conversacionales.

## Comandos

```sh
npm install
npm run docs:dev        # Servidor de desarrollo con hot reload (VitePress)
npm run docs:build      # Compilación para producción
npm run docs:preview    # Vista previa del sitio compilado
```

## Estructura del Repositorio

- `docs/` — Sitio de documentación VitePress (en español `docs/es/`)
- `docs/.vitepress/config.mts` — Configuración de navegación y temas
- `docs/es/lectures/` — 10 lecciones del Workshop InkaFarm
- `docs/es/projects/` — Proyectos prácticos del Workshop
- `docs/es/resources/` — Recursos y plantillas del Workshop
