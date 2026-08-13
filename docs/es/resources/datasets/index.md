# Catálogo de Datasets de InkaFarm

En esta sección encuentras el catálogo completo de los **16 datasets sintéticos de InkaFarm** (cobertura **Perú y Chile**, periodo **junio 2025 – mayo 2026**). Cada archivo está listo para su descarga e integración en **ChatGPT Work**, análisis SQL en **DuckDB/Postgres** o diseño de dashboards interactivos en **Lovable**.

<div class="custom-block tip">
  <p class="custom-block-title">📁 Acceso Directo a la Carpeta en Google Drive</p>
  <p>Puedes descargar cada archivo CSV individualmente o descargar la carpeta completa comprimida en tu equipo:</p>
  <p><a href="https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing" target="_blank" rel="noopener noreferrer">Abrir Carpeta Completa en Google Drive →</a></p>
</div>

---

## 🧭 Estructura y Llaves de Enlace

Los datasets se estructuran en **Tablas Maestras (Dimensiones)** y **Tablas de Hechos (Eventos/Mensuales)**. Se conectan fácilmente entre sí mediante las siguientes llaves principales:

- `tienda_id` — Enlaza Ventas, Operaciones, Supply Chain y Protección con `dim_tiendas.csv`.
- `producto_id` — Enlaza Compras y Productos con `dim_productos.csv`.
- `empleado_id` / `area` — Enlaza indicadores de personal y capacitaciones con `dim_empleados.csv`.
- `mes` / `pais` — Permite realizar consolidados mensuales de P&G, Ventas, E-Commerce e Indicadores por país (Perú y Chile).

---

## 📊 1. Comercial y Ventas

### `comercial_ventas_mensuales.csv`
- **Área / Directivo:** Comercial Medicinas · *Yessyca Linero*
- **Descripción:** Registro mensual de ventas por tienda, categoría de producto y país. Incluye métricas de ingresos, margen bruto, descuentos y fidelización de clientes.
- **Columnas Principales:** `mes`, `tienda_id`, `pais`, `categoria`, `unidades_vendidas`, `ticket_promedio_usd`, `ingreso_usd`, `margen_bruto_usd`, `canal_predominante`, `descuentos_aplicados_usd`, `clientes_fidelizados_pct`.
- **Casos de Uso en ChatGPT Work:** Análisis de participación de mercado por categoría, margen por canal de venta y tasa de penetración del programa de fidelización.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 💰 2. Finanzas y Planificación Financiera

### `finanzas_pyg_mensual.csv`
- **Área / Directivo:** Finanzas / Planificación Financiera · *Guillermo Trigo, Alicia Mosquera, Julio Gasia*
- **Descripción:** Estado de pérdidas y ganancias (P&G) consolidado mensualmente por país.
- **Columnas Principales:** `mes`, `pais`, `ingresos_usd`, `costo_ventas_usd`, `utilidad_bruta_usd`, `opex_usd`, `ebitda_usd`, `margen_ebitda_pct`, `presupuesto_ingresos_usd`, `cumplimiento_ppto_pct`, `gastos_marketing_usd`, `capex_mes_usd`, `utilidad_neta_usd`.
- **Casos de Uso en ChatGPT Work:** Generación de dashboards ejecutivos de P&G, análisis de desviación presupuestaria y evolución del margen EBITDA.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 🏪 3. Operaciones y Gestión de Tiendas

### `operaciones_kpis_tiendas.csv`
- **Área / Directivo:** Operaciones · *Roberto Osorio*
- **Descripción:** Indicadores clave de rendimiento operativo de la red de tiendas en Perú y Chile.
- **Columnas Principales:** `mes`, `tienda_id`, `pais`, `trafico_visitantes`, `transacciones`, `conversion_pct`, `ticket_promedio_usd`, `ventas_usd`, `nps`, `tiempo_espera_fila_min`, `rotacion_inventario_dias`, `eficiencia_caja_pct`, `disponibilidad_sistema_pct`.
- **Casos de Uso en ChatGPT Work:** Ranking de eficiencia de tiendas, matriz de tiempo de espera vs NPS y tasa de conversión por formato de tienda.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 📦 4. Supply Chain, Logística y Compras

### `supply_inventario_mensual.csv`
- **Área / Directivo:** Supply Chain · *Michael Guilarte*
- **Descripción:** Estado de stock, quiebres de inventario, niveles de merma y artículos con vencimiento cercano por tienda y categoría.
- **Columnas Principales:** `mes`, `tienda_id`, `categoria`, `stock_unidades`, `dias_inventario`, `quiebre_stock_pct`, `merma_pct`, `valor_inventario_usd`, `stock_seguridad_unidades`, `articulos_vencimiento_cercano_pct`.
- **Casos de Uso:** Alertas tempranas de quiebre de stock, optimización del valor del inventario en riesgo de vencimiento.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `compras_ordenes.csv`
- **Área / Directivo:** Compras · *Marilena Contreras, Michael Guilarte*
- **Descripción:** Registro de órdenes de compra a proveedores nacionales e internacionales.
- **Columnas Principales:** `orden_compra_id`, `mes`, `proveedor_id`, `proveedor`, `origen`, `producto_id`, `categoria`, `cantidad`, `costo_unitario_usd`, `monto_total_usd`, `lead_time_dias`, `entrega_a_tiempo_otif`, `cumple_sla_entrega`, `condicion_pago`, `evaluacion_proveedor_pct`.
- **Casos de Uso:** Evaluación OTIF (On-Time In-Full) por proveedor y análisis de lead times por país de origen.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 👥 5. Recursos Humanos y Capacitación

### `rrhh_indicadores_mensuales.csv`
- **Área / Directivo:** Recursos Humanos · *María A. Nunez, Lysbell Soares*
- **Descripción:** Métricas mensuales de dotación de personal, rotación, clima laboral y ausentismo por área corporativa.
- **Columnas Principales:** `mes`, `area`, `dotacion`, `ingresos_personal`, `egresos_personal`, `rotacion_pct`, `ausentismo_pct`, `clima_laboral_idx`, `horas_capacitacion_promedio`, `accidentes_laborales_qty`.
- **Casos de Uso:** Matriz de clima laboral vs rotación de personal y control de accidentes laborales.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `rrhh_capacitacion.csv`
- **Área / Directivo:** Capacitación (RRHH) · *Sarah Ray*
- **Descripción:** Evaluación de programas de formación técnica y habilidades blandas impartidos a la fuerza laboral.
- **Columnas Principales:** `evento_id`, `mes`, `curso`, `modalidad`, `area_objetivo`, `inscritos`, `completaron`, `tasa_finalizacion_pct`, `satisfaccion_1a5`, `costo_total_usd`, `evaluador_curso`, `modalidad_evaluacion`.
- **Casos de Uso:** Análisis de ROI en capacitación y tasa de finalización por modalidad (Virtual vs Presencial).
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 💻 6. Tecnología y E-Commerce

### `tecnologia_ecommerce_kpis.csv`
- **Área / Directivo:** Tecnología y E-Commerce · *Jose A. Zubillaga*
- **Descripción:** Indicadores de conversión digital, tráfico web/app, tiempos de carga y métricas CAC en canales digitales.
- **Columnas Principales:** `mes`, `canal`, `sesiones`, `pedidos`, `conversion_pct`, `gmv_usd`, `ticket_promedio_usd`, `tasa_cancelacion_pct`, `tiempo_entrega_prom_min`, `tasa_rebote_pct`, `tiempo_carga_app_sec`, `costo_adquisicion_cac_usd`.
- **Casos de Uso:** Comparativa de rendimiento App vs Web, embudo de conversión digital y tiempo promedio de despacho Express.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `tecnologia_proyectos.csv`
- **Área / Directivo:** Tecnología y Transformación Digital · *Jose A. Zubillaga*
- **Descripción:** Seguimiento de la cartera de proyectos de software, infraestructura y analítica.
- **Columnas Principales:** `proyecto_id`, `proyecto`, `estado`, `presupuesto_usd`, `ejecutado_usd`, `avance_pct`, `prioridad`, `alcance`, `lider_proyecto`, `metodologia`, `desvio_dias`.
- **Casos de Uso:** Control de desviación presupuestaria de IT y monitoreo de proyectos críticos en metodología Ágil/Waterfall.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## ⚖️ 7. Legal y Asuntos Jurídicos

### `legal_contratos.csv`
- **Área / Directivo:** Legal · *Jose Moreno*
- **Descripción:** Gestión del ciclo de vida de contratos corporativos de arrendamiento, proveedores y servicios.
- **Columnas Principales:** `contrato_id`, `tipo_contrato`, `estado`, `pais`, `fecha_inicio`, `fecha_vencimiento`, `duracion_meses`, `valor_anual_usd`, `nivel_riesgo`, `contraparte_proveedor`, `requiere_garantia_bancaria`.
- **Casos de Uso:** Calendario de vencimientos contractuales y exposición al riesgo por tipo de proveedor.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `legal_casos.csv`
- **Área / Directivo:** Legal · *Jose Moreno*
- **Descripción:** Seguimiento de litigios, procesos regulatorios y contingencias legales.
- **Columnas Principales:** `caso_id`, `tipo_caso`, `pais`, `fecha_apertura`, `estado`, `monto_contingencia_usd`, `prioridad`, `manejo`, `abogado_responsable`, `clausula_penal_usd`.
- **Casos de Uso:** Estimación de reservas financieras legales por país y contingencias por tipo de litigio.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 🛡️ 8. Protección Integral y Riesgos

### `proteccion_incidentes.csv`
- **Área / Directivo:** Protección Integral · *Roger Rangel*
- **Descripción:** Registro de incidentes de seguridad física, robos, fallas de suministro y tiempos de respuesta.
- **Columnas Principales:** `incidente_id`, `mes`, `tienda_id`, `pais`, `tipo_incidente`, `severidad`, `perdida_usd`, `estado`, `con_camara_evidencia`, `monto_recuperado_usd`, `tiempo_respuesta_min`.
- **Casos de Uso:** Matriz de pérdidas por nivel de severidad y tasa de recuperación de activos.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 📢 9. Relaciones Corporativas y Comunicaciones

### `relaciones_corporativas_medios.csv`
- **Área / Directivo:** Relaciones Corporativas · *William Paz*
- **Descripción:** Monitoreo de presencia en medios de comunicación, notas de prensa y gestión de crisis.
- **Columnas Principales:** `comunicacion_id`, `mes`, `canal`, `tema`, `impacto_audiencia`, `sentimiento_nota`, `costo_equivalente_ad_usd`, `pais`, `vocero`, `menciones_redes_qty`, `sla_gestion_crisis_hrs`.
- **Casos de Uso:** Evaluación del sentimiento de marca (Positivo vs Neutro/Negativo) y valor equivalente publicitario (AVE).
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

---

## 📋 10. Tablas Maestras (Dimensiones Base)

### `dim_tiendas.csv`
- **Descripción:** Catálogo maestro de 66 tiendas activas en Perú (Lima Metropolitana, Arequipa, La Libertad, etc.) y Chile (Metropolitana, Valparaíso, Biobío, etc.).
- **Columnas Principales:** `tienda_id`, `nombre_tienda`, `ciudad`, `pais`, `region`, `formato`, `area_m2`, `fecha_apertura`, `tiene_farmacia_24h`, `gerente_tienda`, `canal_delivery_activo`, `cant_cajas_registradoras`.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `dim_productos.csv`
- **Descripción:** Catálogo maestro de 190 productos farmacéuticos, cuidado personal y nutrición.
- **Columnas Principales:** `producto_id`, `nombre_producto`, `categoria`, `subcategoria`, `marca`, `requiere_receta`, `costo_unitario_usd`, `precio_venta_usd`, `margen_pct`, `proveedor_principal`, `requiere_cadena_frio`, `puntuacion_clientes`.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**

### `dim_empleados.csv`
- **Descripción:** Catálogo maestro de 420 colaboradores distribuidos en tiendas y sedes corporativas.
- **Columnas Principales:** `empleado_id`, `nombre`, `area`, `cargo`, `tienda_id`, `pais`, `fecha_ingreso`, `salario_mensual_usd`, `genero`, `estatus`, `email_corporativo`, `nivel_educativo`, `evaluacion_desempeno`.
- 🔗 **[Descargar archivo en Google Drive →](https://drive.google.com/drive/folders/1zpFqNCm4QHmUOSWySrQSxLuXEW-DSaj9?usp=sharing)**
