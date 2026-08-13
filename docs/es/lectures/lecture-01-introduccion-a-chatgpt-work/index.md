# 1. Introducción a ChatGPT Work

Cómo darle a Work un CSV de InkaFarm y recibir de vuelta un dashboard, listo para presentar. La guía es un walkthrough: elige tu dataset → descarga → conecta → escribe el prompt.

---

### Antes de empezar: cómo usar Work en 30 segundos

1. Abre la **app desktop de ChatGPT** y entra al modo **Work** (no el browser).
2. Conecta **una carpeta** — Work solo verá esa, nada más.
3. Escribe un prompt con un **outcome claro**. Puedes usar este prompt de prueba:

```text
Mira mi carpeta de Descargas y dime qué hay ahí. Luego organízala creando subcarpetas por tipo de archivo (imágenes, documentos, otros) y mueve los archivos a donde correspondan.
```

o

```text
Analiza mis eventos de calendario de las últimas 2 semanas. Agrúpalos en categorías (por ejemplo: reuniones internas, trabajo profundo, administrativo, personal, aprendizaje — o las que tenga sentido según lo que veas).
Luego dime:
Cuántas horas dediqué a cada categoría
Qué porcentaje representa cada una de mi tiempo total
Qué llama tu atención o qué cambiarías si fueras mi coach de productividad
```

4. Work muestra un **plan**, espera tu **aprobación**, y trabaja en **background**. Cuando termina, te entrega el archivo y un resumen.

> Si no le das una carpeta dedicada, va a improvisar. Si le das toda tu home, va a leer cosas que no le tocan. **Una carpeta por proyecto, siempre.**

---

### Paso 1 — Elige tu dataset

**Datos sintéticos enriquecidos** cubriendo junio 2025 – mayo 2026, Perú y Chile, en USD.

📁 **Descarga la carpeta completa aquí:** [Google Drive → InkaFarm Data](https://drive.google.com/drive/folders/1NuKhOcnYxhBvUFc40yOvqutquvBFOuCW?usp=share_link)

Elige el dataset que corresponda a tu área — o cruza varios.

| Dataset | Área | Qué encontrarás (Campos enriquecidos) |
| :--- | :--- | :--- |
| `comercial_ventas_mensuales.csv` | Comercial | Ventas por tienda × categoría · ingresos · unidades · ticket promedio · margen · canal predominante · descuentos · % clientes fidelizados |
| `finanzas_pyg_mensual.csv` | Finanzas | P&G mensual por país · ingresos vs presupuesto · EBITDA · utilidad neta · gastos de marketing · CAPEX mensual |
| `operaciones_kpis_tiendas.csv` | Operaciones | Tráfico · transacciones · conversión · NPS · tiempo en fila · rotación de inventario · eficiencia de caja · disponibilidad de sistemas |
| `supply_inventario_mensual.csv` | Supply Chain | Stock · días de inventario · quiebre de stock · merma por tienda × categoría · stock de seguridad · % artículos vencimiento cercano |
| `compras_ordenes.csv` | Compras | Órdenes · proveedores · lead time · OTIF · cumplimiento SLA · condición de pago · evaluación de proveedor |
| `rrhh_indicadores_mensuales.csv` | RRHH | Dotación · rotación · ausentismo · clima laboral · horas promedio de capacitación · accidentes laborales |
| `rrhh_capacitacion.csv` | Capacitación | Cursos · inscritos · finalización · satisfacción · costo · evaluador del curso · modalidad de evaluación |
| `dim_empleados.csv` | RRHH / Personal | 420 empleados · tienda · salario · email corporativo · nivel educativo · evaluación de desempeño |
| `legal_contratos.csv` | Legal | Contratos · vigencia · valor anual · nivel de riesgo · contraparte / proveedor · garantía bancaria |
| `legal_casos.csv` | Legal | Casos abiertos · monto de contingencia · prioridad · abogado responsable · cláusula penal |
| `proteccion_incidentes.csv` | Protección | Incidentes por tienda · tipo · severidad · pérdida · cámaras · monto recuperado · tiempo de respuesta |
| `tecnologia_proyectos.csv` | Tecnología | Proyectos · presupuesto · ejecutado · avance % · prioridad · líder de proyecto · metodología (Scrum/Kanban) · desvío en días |
| `tecnologia_ecommerce_kpis.csv` | E-commerce | Sesiones · conversión · GMV · tiempo de entrega · tasa de rebote · tiempo de carga app · costo de adquisición (CAC) |
| `relaciones_corporativas_medios.csv` | Relaciones | Comunicaciones · canal · sentimiento · alcance · inversión · impacto medido · vocero oficial |
| `dim_tiendas.csv` · `dim_productos.csv` | Maestros | 66 tiendas (con gerente, delivery activo, cajas) · 190 productos (con marca, cadena de frío, rating clientes) |

> **Cruce típico:** todos los datasets mensuales unen por `mes` + `tienda_id` + `categoria`. Si quieres ver ventas vs inventario vs incidentes en una sola vista, descarga los tres y pídele a Work que los una.

Cuando dudes qué dataset elegir, abre `DICCIONARIO_DE_DATOS.md` en la misma carpeta — ahí están todas las columnas y ejemplos de análisis cruzados.

---

### Paso 2 — Descarga y conecta

1. Entra al Drive y **descarga la carpeta completa** (o solo los CSV de tu área) a una carpeta dedicada en tu equipo — por ejemplo `~/inkafarm-dashboard/`. Incluye el `DICCIONARIO_DE_DATOS.md`.
2. En la app desktop de ChatGPT → Work → **Conectar carpeta** → apunta a esa.
3. Verifica que Work solo vea esa carpeta. Si pide más permisos, di que no.

---

### Paso 3 — Escribe el prompt

Un prompt sólido para Work tiene **5 ingredientes**. Si te falta alguno, va a tener que adivinar.

1. **Outcome** — qué archivo final entregar. No "haz un análisis", sino "entrega `dashboard.html`".
2. **Input** — qué dataset(s) usar. Apunta al CSV y al diccionario.
3. **Contenido** — qué gráficos o métricas, **ordenados por importancia**.
4. **Restricciones** — un solo archivo, sin dependencias externas, formato del medio.
5. **Verificación** — `what-changed.md` con decisiones y supuestos.

---

### Plantilla copy-paste

Estructura genérica — rellena lo que esté entre `[ ]`:

```text
Crea un dashboard de [TEMA] en `dashboard-v1.html` a partir de
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
- Crea `what-changed.md` con cómo agregaste los datos,
qué hiciste con valores faltantes y supuestos que tomaste.
- Avísame antes de instalar cualquier dependencia.
```

**Ejemplo lleno — vista ejecutiva enriquecida para el CEO:**

```text
Crea un dashboard ejecutivo en `dashboard-ceo.html` a partir de
`finanzas_pyg_mensual.csv`, `comercial_ventas_mensuales.csv` y
`operaciones_kpis_tiendas.csv`. Únelos por `mes` y `pais`. Usa
`DICCIONARIO_DE_DATOS.md` para entender columnas.
Métricas en el dashboard, en este orden de importancia:
1. Ingresos y Utilidad Neta del último mes vs. presupuesto — número grande + delta %
2. EBITDA y CAPEX por país (Perú vs Chile) — bar chart con margen EBITDA %
3. Top 5 categorías por ingreso y % clientes fidelizados — bar chart horizontal
4. NPS, conversión promedio y eficiencia de caja por país — dual line chart 12 meses
5. Evolución mensual de ingresos vs. presupuesto y gastos de marketing — area chart
Restricciones:
- Un solo HTML autocontenido, SVG inline, sin CDN
- Para pantalla 1920×1080
Al terminar:
- Crea `what-changed.md` con criterios de agregación,
manejo de valores faltantes y supuestos sobre la Utilidad Neta y presupuesto.
- Avísame antes de instalar cualquier dependencia.
```

---

### Cómo iterar sin reescribir todo

Work mantiene el contexto del prompt original. No tienes que repetir las restricciones. Refina con frases cortas:

- *"El bar chart de tiendas se ve apretado, separa más las barras."*
- *"Cambia el orden — pon la Utilidad Neta y el ticket promedio arriba a la derecha."*
- *"Falta mostrar el delta vs. el mes anterior en cada KPI."*

Si después de 3-4 iteraciones sigue sin convencerte, **vuelve al prompt original** y precisa el ingrediente que falló.

---

### Checklist antes de enviar

```text
□ Elegí los datasets de docs/inkafarm_data/ que voy a usar
□ Los descargué + el DICCIONARIO_DE_DATOS.md a una carpeta dedicada
□ Conecté esa carpeta (y solo esa) a Work
□ Nombré el archivo de salida (.html)
□ Enumeré 3-6 métricas en orden de importancia
□ Pedí change-log con supuestos
□ Pedí confirmación antes de instalar dependencias
```

Si tachas los 7, tu prompt está listo. Si no, vuelve al ingrediente que falta antes de enviar.
