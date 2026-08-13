# Skills en ChatGPT

En esta sección aprenderás sobre los **Skills** de ChatGPT y cómo utilizarlos para adaptar la IA a los estándares de tu empresa y de tu área.

## ¿Qué es un skill?

Un skill es un archivo de instrucciones (`SKILL.md`) que le enseña a ChatGPT cómo comportarse en un contexto específico. Funciona como un manual de onboarding para que ChatGPT conozca la identidad de marca, formatos de reporte, reglas de negocio y metodologías de trabajo de tu equipo.

---

## Skills del Workshop InkaFarm

### 1. Design System InkaFarm (`inkafarm-design-system`)

Skill que enseña a ChatGPT la identidad visual completa de InkaFarm:
- **Tokens de color oficiales**: Azul primario (`#10A4E0`), Navy (`#001E62`), Teal (`#14C5C7`).
- **Estructura de reportes ejecutivos**: Header azul, tarjetas KPI, tablas con colores de semáforo (verde/amarillo/rojo) y footer institucional.
- **Reglas visuales**: Espacios amplios, esquinas redondeadas y tipografía profesional.

### 2. Skill de Análisis de Datos por Área (`skill-analisis-[AREA]`)

Skill personalizado construido en el Paso 3 del Workshop:
- **Lectura de Datasets**: Conexión con los CSVs sintéticos de InkaFarm y `DICCIONARIO_DE_DATOS.md`.
- **Análisis de KPIs**: Monitoreo de EBITDA, ventas, rotación, inventario, NPS y cumplimiento vs. presupuesto.
- **Formato de Salida**: Generación automática de dashboards HTML autocontenidos y tablas ejecutivas.

---

## Estructura de un archivo `SKILL.md`

Todo skill consta de un encabezado YAML y un cuerpo en Markdown:

```yaml
---
name: nombre-del-skill
description: cuándo debe activarse automáticamente este skill
---
# Instrucciones del Skill
Aquí van las reglas, colores, plantillas y lógica de análisis...
```
