# Arquitectura Avanzada para Agentes de IA

Esta sección describe la estructura recomendada para repositorios orientados a desarrollo con agentes de IA.

---

## Estructura Recomendada

```text
AGENTS.md
ARCHITECTURE.md
docs/
├── design-docs/
├── exec-plans/
├── product-specs/
├── references/
├── DESIGN.md
├── FRONTEND.md
├── PRODUCT_SENSE.md
└── SECURITY.md
```

## Principios de Diseño

- **Punto de entrada conciso**: `AGENTS.md` funciona como enrutador hacia la documentación detallada.
- **Repositorio como fuente de verdad**: Todo el contexto, decisiones y especificaciones viven en archivos del repositorio.
- **Criterios de calidad explícitos**: Reglas de diseño, seguridad y pruebas verificables.
