# 2. Skills en ChatGPT

### ¿Qué es un skill?

Un skill es un archivo de instrucciones que le dice a ChatGPT cómo comportarse en un contexto específico.

Sin skill, ChatGPT es como un consultor externo muy inteligente: puede ayudarte con casi cualquier cosa, pero no sabe nada de tu empresa.

Con un skill, ese mismo consultor llegó a la reunión habiendo leído todo el manual de marca, los colores corporativos, el tono de comunicación y los estándares de tu área. No tienes que explicarle nada — ya sabe.

**La analogía del empleado nuevo:**

> Cuando contratas a alguien nuevo, le das un onboarding: quiénes somos, cómo trabajamos, qué no hacemos, cómo hablamos con clientes. Un skill es exactamente eso — pero para ChatGPT.

---

### ¿Cómo funciona?

Un skill es un archivo de texto simple llamado `SKILL.md`. Cuando está instalado en ChatGPT Work, ChatGPT lo lee automáticamente antes de responder a cualquier pedido relacionado.

El archivo tiene dos partes clave:

```yaml
--- ← inicio del encabezado
name: nombre-del-skill
description: cuándo activarlo (ChatGPT lee esto para decidir si el skill aplica)
--- ← fin del encabezado
# Instrucciones ← el cuerpo: lo que ChatGPT realmente aprende
```

**Lo importante:** tú no tienes que "activar" el skill en cada conversación. ChatGPT detecta solo cuándo aplica según la `description`. Si le pides algo relacionado con el diseño de InkaFarm, lo usa. Si le pides algo que no tiene nada que ver, lo ignora.

---

### El skill que vamos a usar: Design System de InkaFarm

Este skill le enseña a ChatGPT la identidad visual completa de InkaFarm para que pueda generar reportes, interfaces y documentos que se vean exactamente como la marca.

#### Qué contiene el skill (sección por sección)

##### 1. La descripción (el "cuándo me activo")

```text
description: Construye UI web, reportes ejecutivos, dashboards de datos
que coincidan con la identidad de marca de InkaFarm...
```

Esta línea le dice a ChatGPT en qué momento debe usar este skill. Si le pides "hazme un reporte de ventas con el estilo de InkaFarm", ChatGPT lo detecta aquí y activa todo lo que sigue.

##### 2. El resumen de marca

```text
La marca se percibe como limpia, amable, confiable y orientada a la salud:
mucho espacio en blanco, azul como color líder, esquinas redondeadas,
sombras suaves...
```

Esto le da a ChatGPT el "espíritu" de la marca — no solo los colores, sino el por qué de cada decisión de diseño.

##### 3. Los tokens de color (los valores exactos)

```text
Azul primario: #10A4E0
Navy: #001E62
Teal: #14C5C7
```

Estos son los colores oficiales de InkaFarm según su Manual de Diseño. ChatGPT los aplica directamente en el código que genera — no los adivina ni los inventa.

##### 4. Las reglas de reportes y dashboards

Esta es la sección más relevante para el ejercicio de hoy. Le enseña a ChatGPT:

- Cómo estructurar un reporte ejecutivo (header → KPIs → tabla → hallazgos → footer)
- Cómo colorear una tabla de semáforo (verde = en meta, amarillo = en riesgo, rojo = fuera de meta)
- Cómo hacer tarjetas KPI que muestren métricas destacadas
- Qué colores usar para gráficas

##### 5. Las reglas Sí/No

```text
Sí: lidera con azul + blanco; padding generoso; esquinas redondeadas
No: esquinas cuadradas duras; amarillo en todo; fuente pesada en el cuerpo
```

Reglas de diseño que evitan que ChatGPT tome decisiones malas aunque técnicamente sean válidas.

---

### Cómo instalar el skill en ChatGPT

📁 **[Google Drive → InkaFarm Skill](https://drive.google.com/drive/folders/1NuKhOcnYxhBvUFc40yOvqutquvBFOuCW?usp=share_link)** — el archivo `inkafarm-design-system.zip` está en la misma carpeta que los datasets.

**Paso 1 — Descarga el archivo .zip**  
Descarga `inkafarm-design-system.zip` a tu computadora.

**Paso 2 — Adjúntalo en ChatGPT**  
En ChatGPT Work, arrastra el archivo .zip y dile en el chat: `Crea este skill`

**Paso 3 — Guárdalo**  
Haz clic en **"Save skill"**. Listo — quedó instalado.

**Paso 4 — Úsalo**  
Para activarlo en cualquier momento, escribe `/inkafarm-design-system` al inicio de tu mensaje. ChatGPT carga el skill y aplica toda la identidad visual de la marca automáticamente.

> 💡 También puedes simplemente pedirle algo "con el estilo de InkaFarm" y ChatGPT lo detecta solo. El `/` es el atajo cuando quieres asegurarte de que lo use.

---

### El ejercicio: crear un reporte con el skill

Vamos a pedirle a ChatGPT que genere un reporte ejecutivo de tu área, con datos inventados pero realistas, con el diseño visual de InkaFarm.

---

#### Prompts para intentar

**Prompt de partida — el más simple:**

```text
Crea un reporte ejecutivo de ventas para InkaFarm Perú,
mes de abril 2026, con el diseño de la marca.
Incluye 3 KPIs principales y una tabla por región.
```

**Prompt más detailed — para tu área:**

```text
Necesito un reporte ejecutivo de [tu área] para InkaFarm.
Período: abril 2026.
Métricas principales: [escribe 2-3 métricas que importan en tu área]
Desglose por: [regiones / tiendas / categorías / lo que aplique]
Usa el design system de InkaFarm — quiero que se vea profesional
y listo para presentar.
```

**Ejemplos según área:**

| Área | Ejemplo de prompt |
| :--- | :--- |
| Finanzas | Reporte de resultados Q1 por país (Perú, Chile, Argentina). KPIs: margen bruto, EBITDA, cumplimiento de presupuesto. |
| Supply Chain | Reporte de inventario crítico. KPIs: cobertura de días, % de SKUs en riesgo, pedidos en tránsito. |
| Comercial | Dashboard de ventas por canal. KPIs: ventas totales, ticket promedio, crecimiento vs año anterior. |
| RRHH | Reporte de gestión de talento. KPIs: headcount, rotación, NPS del empleado. |
| Protección | Reporte de incidentes por región. KPIs: incidentes totales, tiempo de respuesta promedio, reincidencia. |

---

#### Qué esperar

ChatGPT va a generar un archivo HTML autocontenido. Cuando lo abras en el browser vas a ver:

- Un **header** azul de InkaFarm con el nombre del reporte
- **Tarjetas KPI** con los números principales
- Una **tabla** con colores de semáforo (verde / amarillo / rojo según cumplimiento)
- Una sección de **hallazgos** con borde amarillo
- Un **footer** navy con "InkaFarm"

Todo esto porque el skill le enseñó a ChatGPT exactamente cómo se ve la marca y cómo estructurar un reporte ejecutivo.

---

#### Último paso: envíalo por correo

Cuando tengas el reporte listo, escríbele esto a ChatGPT:

```text
Convierte el reporte que acabas de generar a PDF y envíaselo
a paulchuyesch@gmail.com con el asunto "Reporte [tu área] — Workshop InkaFarm".
```

ChatGPT convierte el HTML a PDF y lo manda directo. Sin descargar, sin adjuntar manualmente.

---

#### Si quieres ir más lejos

Después de ver el primer resultado, puedes pedir ajustes en lenguaje natural:

- *"Cambia los datos de Perú — que el margen bruto aparezca en rojo porque está debajo del 80%"*
- *"Agrega una sección de recomendaciones debajo de la tabla"*
- *"Quiero que el reporte muestre los datos comparados con el mes anterior"*
- *"Haz que la primera KPI card sea más grande porque es la más importante"*

ChatGPT mantiene el estilo de InkaFarm en cada ajuste porque el skill sigue activo.

---

### La pregunta que queremos que te quedes

> **¿Qué conocimiento de tu área le darías a un skill para que ChatGPT sea realmente útil en tu trabajo diario?**

No los colores — eso ya lo tiene. Sino: ¿qué sabe alguien que lleva años en tu área que un recién llegado no sabe? ¿Qué alarmas te importan? ¿Qué benchmarks usas? ¿Cómo estructuras un análisis?

Eso es lo que va en un skill de tu área. Y eso es exactamente lo que van a construir en el siguiente ejercicio.

*Workshop InkaFarm*
