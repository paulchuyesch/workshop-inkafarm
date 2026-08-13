# 8. Creación de la interfaz en Lovable

### Tour de Lovable (5 min)

**Mostrar en pantalla:**

1. Barra de chat izquierda — donde se escribe el prompt
2. Preview derecha — donde aparece la interfaz en tiempo real
3. Botón "Deploy" — genera un link público instantáneamente
4. Versiones — Lovable guarda cada versión, puedes volver atrás

**Regla de oro:** Lovable funciona mejor con prompts específicos. "Hazme un dashboard bonito" da resultados genéricos. "Un dashboard con header azul, 4 KPI cards en la fila de arriba, un gráfico de línea debajo y una tabla al final" da exactamente lo que quieres.

---

### Prompt para construir el dashboard

Cada participante adapta este prompt con sus métricas y pega el JSON de datos que generó con ChatGPT:

```text
Crea un dashboard ejecutivo para InkaFarm con estas características:
Diseño general:
- Colores de la marca InkaFarm: azul primario #10A4E0, navy #001E62, fondo #F8F8F8
- Tipografía limpia y profesional
- Header con el nombre del área y la fecha del reporte
Estructura de la pantalla (de arriba hacia abajo):
1. Header azul con título: "Dashboard de [tu área] — Mayo 2026"
2. Fila de KPI cards (4 cards): [métrica 1], [métrica 2], [métrica 3], [métrica 4]
- Cada card muestra: valor actual, delta vs. mes anterior con flecha (↑ verde / ↓ rojo), y etiqueta
3. Gráfico de línea: evolución mensual de [métrica principal] — Perú vs. Chile
4. Tabla: [desglose por tienda / área / categoría] con columnas [col 1], [col 2], [col 3]
- Colorear con semáforo: verde si cumple meta, amarillo si está cerca, rojo si no llega
Datos:
Usa este JSON como fuente de datos:
[pegar el JSON generado con ChatGPT]
Restricciones:
- Un solo archivo HTML autocontenido si es posible
- Que se vea bien en pantalla full HD
```

---

### Cómo iterar (10 min de trabajo individual)

Después del primer resultado, refinar con frases cortas:

- *"Cambia el color del header a navy #001E62"*
- *"El gráfico de línea necesita una leyenda"*
- *"Agranda los números de las KPI cards"*
- *"La tabla se ve apretada, agrega más espacio entre filas"*
- *"Agrega un filtro de país arriba a la derecha"*

Lovable mantiene el contexto — no hay que repetir todo desde cero.
