# Guía de Plantillas del Workshop

En esta sección encuentras las plantillas copy-paste oficiales del **Workshop InkaFarm**.

---

## 1. Plantilla de Prompt para Dashboard Ejecutivo en ChatGPT Work

Usa esta plantilla en ChatGPT Work para generar dashboards ejecutivos HTML a partir de los datasets de InkaFarm:

```text
Crea un dashboard ejecutivo de [TEMA] en `dashboard-v1.html` a partir de
`[DATASET].csv`. Usa `DICCIONARIO_DE_DATOS.md` para entender las columnas.
Métricas en el dashboard, en este orden de importancia:
1. [Métrica principal — Ej: número grande + delta vs período anterior]
2. [Métrica #2 - Ej: Top N de algo — bar chart]
3. [Métrica #3 - Ej: Distribución por dimensión X — donut o stacked bar]
4. [Métrica #4 - Ej: Evolución temporal — line/area chart]
5. [Métrica #5 - Ej: Comparativa o detalle adicional]
Restricciones:
- Un solo archivo HTML autocontenido (CSS y JS inline)
- Gráficos en SVG inline — sin librerías externas, sin CDN
- Que se vea bien en pantalla 1920×1080
Al terminar:
- Crea `what-changed.md` con cómo agregaste los datos, qué hiciste con valores faltantes y supuestos que tomaste.
- Avísame antes de instalar cualquier dependencia.
```

---

## 2. Plantilla de Especificación v1 (Spec-Driven Development)

Copia este esqueleto Markdown para definir las especificaciones de tu producto antes de construir en Lovable:

```markdown
# Especificación v1: [Nombre del producto]

## 1. Contexto y problema
¿Para qué área de la organización es este panel? ¿Qué decisión permite tomar?

## 2. A quién va dirigido
¿Quién usará este panel y con qué frecuencia?

## 3. Decisiones de contenido
- Tarjetas KPI superiores (3 a 5 números clave)
- Gráfico principal central (pregunta que responde y tipo de gráfico)
- Secciones inferiores (listas, rankings o comparaciones por país/categoría)
- Chat lateral (temas sobre los que responde)

## 4. Anatomía de la interfaz
Layout split-view: Panel visual a la izquierda + Chat a la derecha.

## 5. Camino principal del usuario
Flujo de interacción desde el primer ingreso.

## 6. Lo que NO vamos a hacer en la v1
Definición estricta de alcance fuera de la v1.

## 7. Criterios de aceptación
Lista de verificación concreta de que la v1 está lista.
```

---

## 3. Plantilla de Plan de Adopción de IA (30 Días)

```text
Escríbeme un plan de adopción de IA de 30 días para mi equipo.
Mi área: [área]
Mi equipo: [cuántas personas]
Primer caso de uso: [descripción específica de la tarea]
¿Cuánto tiempo toma hoy?: [horas/semana]
¿Cuál sería el objetivo?: [qué esperan lograr]
Mi champion: [nombre o perfil de la persona]
¿Por qué esa persona?: [por qué tiene credibilidad]
Fecha de kickoff: [cuándo lo presentan al equipo]
Fecha de check-in: [30 días después]
Mi métrica de éxito: [cómo van a saber si funcionó]

Arma el plan con estas secciones:
1. Qué le digo al equipo el lunes (2-3 oraciones)
2. Qué hace el champion las primeras 2 semanas
3. Qué revisan en el check-in del día 30
4. Cómo lo expanden si funciona
```
