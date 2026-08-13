# 7. Generación del Spec

# Desarrollo guiado por especificaciones

## 1. Qué es y para qué sirve

El **desarrollo guiado por especificaciones** (Spec-Driven Development) parte de una idea simple: antes de construir algo, escribes un documento claro que explica **qué quieres** y **por qué lo quieres**. Ese documento se vuelve la fuente de verdad de todo el proyecto.

Tradicionalmente, los equipos arrancan a construir y la documentación llega después, si es que llega. Aquí es al revés: primero el documento, después la construcción.

¿Por qué se volvió tan importante ahora? Por la IA. Cuando le pides a una IA "agrégame compartir fotos a mi app", la IA tiene que adivinar muchas cosas: ¿qué tamaño?, ¿qué permisos?, ¿guardadas dónde?, ¿con qué calidad? Los modelos son muy buenos completando patrones, pero malísimos leyendo la mente. El documento de especificación elimina esa adivinanza: le da al sistema —y a las personas— una descripción precisa de lo que se debe construir.

**Para qué sirve en la práctica:**

- **Cuando empiezas algo nuevo desde cero**: un poco de trabajo al inicio asegura que se construya lo que realmente quieres, no una versión genérica de lo que parece obvio.
- **Cuando agregas algo a un producto que ya existe**: te obliga a pensar cómo encaja lo nuevo con lo que ya hay funcionando.
- **Cuando necesitas cambiar de rumbo**: actualizas el documento, y todo lo demás se reajusta a partir de ahí.

El flujo típico tiene cuatro pasos, con una persona revisando entre cada uno: **principios del proyecto → especificación → plan → tareas → construcción**. La especificación se enfoca en el **qué** y el **por qué**. El **cómo** viene después, en el plan.

---

### Paso 1 — Buscar referentes (5 min)

Antes de abrir Lovable, definir qué quieren ver. Buscar 1-2 imágenes de referencia de dashboards que les gusten. Pueden buscar en:

- Google: `executive dashboard [su área] example`
- [https://dribbble.com](https://dribbble.com/) → buscar "dashboard"
- Screenshots de herramientas que ya usan (Power BI, Looker, etc.)

**Lo que buscan:** la estructura, no los datos. ¿KPIs arriba? ¿Gráfico de línea de tendencia? ¿Tabla de detalle abajo?

---

### Paso 2 — Definir qué va en su dashboard (5 min)

Responder estas 3 preguntas antes de escribir el primer prompt:

1. **¿Cuáles son las 3–5 métricas más importantes de tu área?**
   - Ejemplos: ventas del mes, NPS, rotación, incidentes, cobertura de inventario
2. **¿Cómo quieres ver la tendencia?** (línea de tiempo, comparación vs. meta, top/bottom performers)
3. **¿Qué desglose necesitas?** (por país, por tienda, por área, por categoría)

---

### Paso 3 — Generar datos dummy (10 min)

Escribirle esto a ChatGPT para generar los datos de ejemplo que van a usar en Lovable:

```text
Necesito datos de ejemplo para construir un dashboard ejecutivo de [tu área]
para InkaFarm. Genera un JSON con datos realistas pero inventados.
Período: enero–mayo 2026
Países: Perú y Chile
Incluye estos indicadores:
- [métrica 1] por mes y por país
- [métrica 2] por mes y por país
- [métrica 3] con comparación vs. meta
El JSON debe estar listo para pegarlo en una aplicación web.
```

Guardar el JSON que les devuelva ChatGPT — lo van a pegar directamente en Lovable.

---

## 2. Plantilla de especificación para la v1

Esta plantilla está pensada para llegar a una interfaz como la de tu referencia: un panel de visualización a la izquierda con tarjetas de números clave, un gráfico principal y un par de tablas abajo, más un chat a la derecha. La estructura ya está decidida. Lo que tú defines es **qué va dentro de cada zona**.

```markdown
# Especificación v1: [Nombre del producto]
## 1. Contexto y problema
¿Para qué área de tu organización es este panel?
(ej: compras, ventas, finanzas, operaciones, recursos humanos)
¿Qué decisión o pregunta debería poder responder alguien al abrirlo?
Una o dos frases. Si no puedes nombrar la pregunta, todavía no
estás listo para construir.

## 2. A quién va dirigido
¿Quién va a usar esto?
(ej: director del área, equipo operativo, comité ejecutivo)
¿Qué tan seguido lo va a abrir?
(ej: todos los días, una vez por semana, antes de cada reunión)

## 3. Decisiones que tú tomas para la v1
Antes de seguir, responde estas preguntas. Son las que definen
el contenido del panel.

**Sobre las tarjetas de números clave (arriba):**
- ¿Cuántas tarjetas? (recomendado: 3 a 5)
- ¿Qué muestra cada una? (ej: ventas de la semana, días de inventario,
porcentaje de algo)
- ¿Cada tarjeta muestra una comparación contra algo? (ej: vs. semana
anterior, vs. año pasado, vs. meta)

**Sobre el gráfico principal (centro):**
- ¿Qué pregunta responde este gráfico?
- ¿Qué tipo de gráfico tiene más sentido? (barras por semana, línea
en el tiempo, comparación entre categorías)
- ¿Es un solo gráfico grande o el usuario puede cambiar la vista?

**Sobre las dos secciones de abajo:**
- ¿Qué muestra la de la izquierda? (ej: ranking de productos,
ranking de proveedores, top de algo)
- ¿Qué muestra la de la derecha? (ej: comparación por país, por región,
por categoría)

**Sobre el chat (derecha):**
- ¿Sobre qué temas puede preguntar el usuario?
(solo sobre lo que ve en pantalla, o sobre todos los datos del área)
- ¿Qué tipo de respuestas debe dar?
(números directos, gráficos nuevos, explicaciones, recomendaciones)
- ¿Qué pregunta de ejemplo aparece para invitar al usuario a empezar?

## 4. Anatomía de la interfaz (esto está fijo)
La pantalla se divide en dos partes:

**Lado izquierdo (la mayor parte de la pantalla): el panel de visualización**
- Arriba: una fila de tarjetas con números clave. Cada tarjeta muestra
un título corto, el número grande, y una nota pequeña de comparación.
- Centro: un gráfico grande con su propio título.
- Abajo: dos bloques lado a lado. Cada uno muestra una lista, ranking
o comparación.

**Lado derecho (una franja angosta): el chat**
- Arriba: nombre del asistente y una línea corta describiendo qué hace.
- Centro: una pregunta de ejemplo para invitar al usuario.
- Abajo: una caja donde el usuario escribe su pregunta.

## 5. Camino principal del usuario
Cuenta como historia qué pasa cuando alguien abre el producto por
primera vez:
1. Entra y ve...
2. Lo primero que llama su atención es...
3. Decide preguntarle algo al chat sobre...
4. El chat responde y la persona...

## 6. Lo que NO vamos a hacer en la v1
Esto es importante para no desbordar el alcance. Marca lo que
queda fuera por ahora:
- ¿Filtros para cambiar el periodo o la región?
- ¿Posibilidad de exportar o descargar?
- ¿Múltiples usuarios o permisos diferentes?
- ¿Que el chat ejecute acciones (no solo responder)?
- ¿Conexión a datos reales en vivo, o usamos datos de muestra?
- ¿Versión móvil?

## 7. Cómo sabremos que la v1 está lista
Lista corta y verificable. Cada punto debe poder comprobarse mirando
el producto:
- Al abrir la página aparecen las tarjetas, el gráfico y las dos
secciones de abajo, todas con datos visibles.
- El chat acepta una pregunta y devuelve una respuesta.
- [Agrega tus propios criterios concretos]

## 8. Restricciones y decisiones ya tomadas
- ¿Hay una identidad visual (colores, tipografía) que se debe respetar?
- ¿Hay un sistema o herramienta que ya está decidida y no se discute?
- ¿Hay datos que ya existen y de dónde vienen?

## 9. Lo que damos por cierto
Suposiciones que estamos haciendo. Si alguna resulta falsa, hay que
revisar la especificación.
- Ejemplo: "Asumimos que los datos del área ya existen en algún lado
y se pueden conectar".
- Ejemplo: "Asumimos que el chat puede responder en menos de 10 segundos".

## 10. Preguntas abiertas
Cosas que todavía no sabemos resolver.
[PENDIENTE: ...]
```

---

## 3. Indicación para construir la especificación con una IA

Esta indicación está adaptada al caso de la v1: el modelo sabe que la estructura general ya está fijada y que su trabajo es ayudarte a tomar las decisiones de contenido.

```text
Vas a ser mi co-autor para escribir la especificación de un producto
nuevo. Es la versión 1 (v1) y la estructura visual ya está decidida:
del lado izquierdo de la pantalla hay un panel de visualización con
graficos que debo decidir que mostrar. Del lado derecho hay un
chat donde el usuario puede preguntar sobre temas relacionados a la data.
Lo que NO está decidido es el contenido: qué números aparecen en las
tarjetas, qué muestra el gráfico, sobre qué tema es todo. Eso lo vamos a definir juntos.

REGLAS DE TRABAJO
1. La especificación describe QUÉ se va a mostrar y POR QUÉ, nunca
CÓMO se construye técnicamente. No menciones herramientas,
librerías ni soluciones técnicas, salvo que yo lo establezca como
restricción fija.
2. Antes de escribir nada, hazme preguntas. Empieza por las preguntas
más importantes: para qué área es el producto, quién lo usa, qué
decisión debe ayudar a tomar. Después baja al detalle de cada zona
de la pantalla.
3. Hazme las preguntas en grupos pequeños (no más de 4 a la vez)
para que pueda responder con calma.
4. Si yo respondo algo vago o contradictorio, dímelo sin diplomacia
y vuelve a preguntar.
5. Marca claramente lo que quede sin resolver: [PENDIENTE: ...].
6. Los criterios de "esto está listo" tienen que ser cosas que se
puedan verificar mirando el producto. Nada de "intuitivo" o
"rápido" sin una forma concreta de comprobarlo.
7. Empuja siempre a la simplicidad. Si yo trato de meter algo que
no es esencial para la v1, sugiéreme moverlo a "lo que NO vamos
a hacer".

Restricciones que deben quedar en el spec:
1. El chat aun no tiene funcionalidad, solamente necesitamos el UI.
2. La estructura del UI.

ESTRUCTURA DEL DOCUMENTO (en este orden):
1. Contexto y problema
2. A quién va dirigido
3. Decisiones de contenido (tarjetas, gráfico, secciones de abajo, chat)
4. Anatomía de la interfaz (esto ya está fijo, solo se redacta)
5. Camino principal del usuario
6. Lo que NO vamos a hacer en la v1
7. Cómo sabremos que la v1 está lista
8. Restricciones y decisiones ya tomadas
9. Lo que damos por cierto
10. Preguntas abiertas

Arranca haciéndome preguntas para poder crear el archivo markdown de spec.
```
