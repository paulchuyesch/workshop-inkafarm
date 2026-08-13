# 9. Creación del Agente

Para poder crear un agente que nos responda información sobre la data, necesitamos dos cosas:

1. Una herramienta para poder consultar información
2. Poder manipular skills y que el agente tenga contexto.

Para esto debemos implementar la v2 y usar este plan:

```text
Prompt: Dashboard analítico InkaFarm + Agente conversacional con skills (v2)

Punto de partida: la v1 ya está implementada con TanStack Start (React 19 + Vite 7, runtime Cloudflare Workers) y Lovable Cloud (Supabase) como backend. La interfaz actual incluye el layout split-view en `/` con dashboard mock a la izquierda (KPI cards, gráfico semanal, tabla top productos, mapa de tiendas por país — todos placeholders visuales) y un panel de chat a la derecha que todavía no está conectado a ningún agente.

La v2 agrega tres piezas sobre esa base: (a) importar los datos del archivo .duckdb original a Postgres, (b) construir el drawer lateral de gestión de skills, y (c) cablear el panel de chat con un agente real que use tools sobre los datos importados. No se toca el dashboard de la izquierda — sigue siendo mock; el usuario consulta los datos reales vía chat.

Layout principal (ruta `/`) — sin cambios visuales
El split-view ya existe. La única adición en esta ruta es:
- Botón "Skills" en el header del panel de chat, que abre el `Sheet` lateral.
- Cablear el `ChatPanel` para que use `useChat` apuntando a `/api/chat` (ahora sí con backend real).

Backend de datos (Postgres directo)
Decisión crítica de arquitectura:
1. Las tablas con la informacion se encontraran en el esquema `inkafarm`.
2. Crear función Postgres `inkafarm.inkafarm_query(sql text) RETURNS jsonb` con:
- `SECURITY DEFINER`, ejecutable sólo por `service_role`
- Valida que la query empiece con `SELECT` o `WITH` (rechaza cualquier DDL/DML)
- Aplica `LIMIT 1000` máximo
- Devuelve filas como JSONB
3. Wrapper público `public.inkafarm_query(sql)` que delega a la del schema `inkafarm` (para poder invocarla con `supabaseAdmin.rpc()`).
4. El agente usa sintaxis Postgres, no DuckDB.

Tabla `skills` (Lovable Cloud)
`id uuid pk`, `name text unique`, `description text`, `frontmatter jsonb`, `body text`, `enabled bool default true`, `created_at`, `updated_at`. Públicamente accesible (app abierta) — GRANTs a `anon` y `authenticated`, RLS con políticas permisivas.

Storage
Bucket `duckdb-files` (privado). Se crea en esta v2 para permitir subir el archivo `.duckdb` original como respaldo / re-importación futura, pero no se consulta en runtime.

Chat (estado y comportamiento)
Una sola conversación, sin persistencia (estado en memoria con `useChat` del AI SDK). Sin threads, sin historial guardado.

Agente (AI SDK + `streamText` + AI Gateway de Lovable)
Server route en `src/routes/api/chat.ts` (handler POST con `toUIMessageStreamResponse`). Modelo por defecto: `google/gemini-3-flash-preview`. `stopWhen: stepCountIs(50)`.
Provider: `@ai-sdk/openai-compatible` apuntando a `https://ai.gateway.lovable.dev/v1` con header `Lovable-API-Key` (secret `LOVABLE_API_KEY`, ya configurado por Lovable Cloud).

System prompt dinámico construido en cada request:
1. Instrucciones base (español, conciso, sólo SELECT/WITH, sintaxis Postgres).
2. Diccionario de datos resumido (archivo `src/lib/data-dictionary-summary.ts`).
3. Frontmatter (no body) de cada skill con `enabled=true`, listado como índice.

Tools del agente:
- `load_skill` — input `{ skill_name }`. Devuelve el `body` completo del skill desde Postgres. El agente lo invoca cuando un frontmatter listado parece relevante.
- `query_sql` — input `{ sql }`. Valida que sea SELECT/WITH (regex que bloquea `INSERT|UPDATE|DELETE|DROP|ATTACH|CREATE|ALTER|TRUNCATE`), llama `supabaseAdmin.rpc('inkafarm_query', { sql })`, devuelve filas + columnas + row count.

Gestión de skills (UI nueva en esta v2)
Drawer (`Sheet` de shadcn) que se abre desde el botón "Skills" en el header del chat. Contiene:
- Card de estado del archivo `.duckdb` en Storage (subido/no, tamaño en MB) + botón "Subir db.duckdb" (input file → FormData → server function → `supabaseAdmin.storage.upload`).
- Lista de skills con `Switch` para `enabled`, botón eliminar.
- Botón "+ Nueva" → textarea para pegar markdown con frontmatter YAML:
---
name: ventas-yoy
description: Cómo calcular YoY correctamente
---
Cuerpo en markdown con las instrucciones detalladas...

Parser separa frontmatter (YAML) y body.
Todas las operaciones via `createServerFn`: `listSkills`, `createSkill`, `toggleSkill`, `deleteSkill`, `uploadDuckdbFile`, `getDuckdbStatus`.

UI del chat — usar AI Elements
`bun x ai-elements@latest add conversation message prompt-input shimmer tool`
Componentes obligatorios:
- `Conversation` + `ConversationContent` + `ConversationScrollButton`
- `Message` + `MessageContent` + `MessageResponse` (assistant sin fondo; user con `primary`/`primary-foreground`)
- `Tool` + `ToolHeader` + `ToolContent` + `ToolInput` + `ToolOutput` — `defaultOpen={false}` siempre
- `PromptInput` + `PromptInputTextarea` + `PromptInputFooter` (con `justify-end`) + `PromptInputSubmit`
- `Shimmer` con texto "Pensando..." durante `status === "submitted"`

Detalles importantes ya aprendidos:
- `useChat` se inicializa con `new DefaultChatTransport({ api: "/api/chat" })` envuelto en `useRef`.
- Handler de submit: `(_message: unknown, event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); sendMessage({ text }); }` — la firma del callback es `(PromptInputMessage, FormEvent)`, no sólo FormEvent.
- Renderizar `m.parts` y discriminar `part.type === "text"` vs `part.type.startsWith("tool-")`.
- Mantener focus en textarea tras envío y al cambiar `status`.

Stack técnico explícito
- NO usar Supabase Edge Functions. Toda lógica server-side va en `createServerFn` o server routes de TanStack (`createFileRoute('/api/...')`).
- `src/integrations/supabase/client.ts`, `client.server.ts`, `auth-middleware.ts`, `auth-attacher.ts`, `types.ts` están auto-generados — nunca editarlos.
- Dashboard sigue con `recharts` y datos mock; no se toca en esta v2.
- Tokens semánticos en `src/styles.css` con `oklch()` ya están definidos desde la v1.

Estructura de archivos
Lo que YA existe de la v1 (no tocar salvo donde se indique):
src/
  routes/
    __root.tsx # ya existe
    index.tsx # ya existe — agregar botón Skills + cablear chat
  components/
    dashboard/Dashboard.tsx # ya existe, mock — NO TOCAR
    chat/ChatPanel.tsx # ya existe el shell visual — agregar useChat + AI Elements
  styles.css # ya existe con tokens oklch

Lo que se agrega en esta v2:
src/
  routes/
    api/chat.ts # streamText + tools (nuevo)
  components/
    chat/ChatPanel.tsx # reescribir para usar useChat + AI Elements
    skills/SkillsDrawer.tsx # nuevo
    ai-elements/... # instalados via CLI
  lib/
    ai-gateway.server.ts # createOpenAICompatible (nuevo)
    skills.functions.ts # CRUD + upload duckdb + status (nuevo)
    duckdb.server.ts # runSql (RPC a Postgres) + validateSelectOnly + constantes bucket (nuevo)
    frontmatter.ts # parser YAML simple (nuevo)
    data-dictionary-summary.ts # texto del diccionario para el system prompt (nuevo)
    data-dictionary.md # versión larga de referencia (nuevo)
  supabase/
    migrations/ # schema inkafarm + tabla skills + función inkafarm_query + datos CSV (nuevo)

Orden de implementación sugerido
1. Migración Postgres: crear schema `inkafarm`, tablas, función `inkafarm_query` y wrapper público. Importar CSVs. Verificar con un SELECT manual desde el SQL editor de Supabase.
2. Tabla `skills` + bucket `duckdb-files` con GRANTs y políticas.
3. `lib/duckdb.server.ts` con `runSql` validado + `lib/frontmatter.ts` + `lib/data-dictionary-summary.ts`.
4. `lib/skills.functions.ts` con todas las server functions.
5. `routes/api/chat.ts` con system prompt dinámico y las dos tools.
6. Reescritura del `ChatPanel.tsx` existente para usar `useChat` + AI Elements.
7. `SkillsDrawer.tsx` + botón "Skills" en el header del chat dentro de `index.tsx`.

Fuera de alcance de la v2
- Autenticación / login.
- Persistencia del chat o threads múltiples.
- Editor visual de frontmatter (se pega markdown crudo).
- Conectar el dashboard de la izquierda a datos reales (sigue siendo mock; los datos reales se acceden vía chat).
- Versión móvil del split-view.
```
