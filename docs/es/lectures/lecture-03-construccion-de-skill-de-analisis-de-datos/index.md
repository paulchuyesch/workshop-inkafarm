# 3. Construcción de skill de análisis de datos

# Template: crea tu skill de análisis de datos

Llena los campos entre `[ ]` con la info de tu área, luego pega el bloque completo en ChatGPT Work. Work creará el archivo `SKILL.md` listo para instalar.

---

## 1. Llena esto antes de pegar

| Campo | Tu respuesta |
| :--- | :--- |
| **Mi área** | ej: Finanzas / Operaciones / RRHH / Comercial... |
| **Datasets que voy a usar** | ej: `finanzas_pyg_mensual.csv` + `dim_tiendas.csv` |
| **Mis 3–5 KPIs más importantes** | ej: EBITDA, cumplimiento vs presupuesto, margen bruto |
| **Cómo analizo normalmente los datos** | ej: reviso el mes cerrado → comparo vs período anterior → identifico las tiendas fuera de meta |
| **A quién le presento los resultados** | ej: CEO, mi equipo, el board |
| **El formato que prefiero** | ej: dashboard HTML / tabla resumen / bullets ejecutivos |

---

## 2. Copia este prompt y pégalo en Work

> **Antes de pegar:** asegúrate de que la carpeta conectada a Work contenga los CSV de tu área y el `DICCIONARIO_DE_DATOS.md`.

```text
/skill-creator Crea un archivo `skill-analisis-[MI_AREA].md` con un skill de ChatGPT
para analizar datos de mi área de trabajo.
Contexto:
- Área: [MI_AREA]
- Datasets disponibles en esta carpeta: [LISTA DE CSVs]
- Usa DICCIONARIO_DE_DATOS.md para entender columnas y relaciones
Mi proceso habitual de análisis:
1. [Qué hago primero al abrir los datos]
2. [Qué comparo o calculo]
3. [Qué banderas o alertas busco]
4. [Cómo presento los resultados]
Mis KPIs prioritarios:
- [KPI 1]
- [KPI 2]
- [KPI 3]
Audiencia típica de mis reportes: [AUDIENCIA]
Formato de salida preferido: [FORMATO]
```

---

## 3. Qué pasa después

1. Work te muestra el `SKILL.md` para revisión → aprueba o pídele ajustes.
2. Una vez aprobado, Work guarda el archivo en tu carpeta conectada.
3. Instálalo: arrastra el archivo a ChatGPT Work o usa el clip 📎 → "Save skill".
4. Pruébalo: escríbele a ChatGPT algo de tu área y verifica que responda usando tu proceso.

> **Tip:** si el skill no se activa cuando esperas, el problema está en la `description`. Dile a Work: *"La descripción no está siendo suficientemente específica sobre cuándo activarse. Reescríbela incluyendo más variaciones de cómo alguien pediría este análisis."*
