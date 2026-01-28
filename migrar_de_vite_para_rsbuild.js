/*
Migração Vite → RSBuild sem trauma, passo a passo 👇

1️⃣ Entenda o que você usa do Vite

Antes de mexer em toolchain, faça um inventário:

Plugins (React/Vue, SVGR, env, aliases)

Config de build (chunks, assets, CSS)

Variáveis import.meta.env

Monorepo? Quais pacotes são shared

👉 Quanto menos “mágica”, mais fácil a migração.

2️⃣ Crie um POC paralelo (regra de ouro)

Não migre direto.

Crie um app RSBuild lado a lado

Mesmo entrypoint e dependências

Compare:

tempo de build

HMR

output final

Se não ganhar performance real → nem vale migrar.

3️⃣ Setup básico do RSBuild
pnpm add -D @rsbuild/core @rsbuild/plugin-react

// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
});


👉 Já funciona. Zero drama.

4️⃣ Migração mental: Vite → RSBuild
Vite	RSBuild
vite.config.ts	rsbuild.config.ts
Rollup	Rspack
define	source.define
resolve.alias	source.alias
import.meta.env	process.env

⚠️ Normalmente precisa ajustar env vars.

5️⃣ Plugins: troque por equivalentes

React / Vue → plugins oficiais RSBuild

SVG → loader (Rspack)

CSS → PostCSS/CSS Modules já embutidos

👉 Evite portar plugin Vite “custom”; refaça.

6️⃣ Monorepo & performance

Ative cache agressivo

Garanta path aliases bem definidos

Use build incremental no CI

Integre com Nx / Turborepo se existir

7️⃣ Migração gradual (recomendada)

Migre 1 app primeiro

Mantenha Vite nos outros

Compartilhe libs normalmente

Troque o resto aos poucos

8️⃣ Checklist final

Build bate?

Assets iguais?

Sourcemaps ok?

HMR decente?

CI mais rápido?

Se não ganhar muito em build/CI → fique no Vite.

Se quiser, posso:

montar um rsbuild.config.ts equivalente ao teu vite.config.ts

listar armadilhas comuns

comparar before/after realista (tempos, trade-offs)

Qual desses você quer?

Quanto tempo levaria?

Resposta honesta, sem floreio:

⏱️ Tempo típico de migração Vite → RSBuild
🟢 App médio (1 app, sem muita mágica)

1–3 dias

Setup + config básica

Ajuste de env vars

CI

Testes

🟡 App grande

3–7 dias

Muitos aliases

Plugins custom

CSS/SVG específicos

Ajustes finos de performance

🔴 Monorepo massivo

1–3 semanas

Vários apps

Libs shared

CI complexo

Migração gradual

O que mais consome tempo (na prática)

Variáveis de ambiente (import.meta.env)

Plugins Vite não-portáveis

Assets (SVG, fonts, workers)

Ajuste fino de cache no CI

Regra de bolso

Se em 2 dias você não tiver ganho claro de build, pare e volte pro Vite.

*/