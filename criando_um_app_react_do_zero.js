// Passo 1: Instalar uma ferramenta de build (Em resumo, uso Vite.)

// O primeiro passo é instalar uma ferramenta de build como 'vite', 'parcel', ou 'rsbuild'.

// Essas ferramentas de build fornecem funcionalidades para
    // empacotar e
    // executar código fonte,
    // fornecem um servidor de desenvolvimento para desenvolvimento local e
    // um comando de build para fazer deploy da sua aplicação em um servidor de produção.

// Nota: 
    // Se você está começando do zero com 'React Native', precisará usar o 'Metro', o bundler JavaScript para 'React Native'. 'Metro' suporta bundling para plataformas como iOS e Android, mas carece de muitas funcionalidades quando comparado às ferramentas aqui. Recomendamos começar com Vite, Parcel, ou Rsbuild, a menos que seu projeto requeira suporte ao 'React Native'.

//------------------------ conversa com ChatGPT:
// Vite, Parcel, ou RSBuild? Qual prefere? Por quê?

// Depende do objetivo — mas no geral, prefiro Vite. Eis o porquê, bem direto:

// Vite ⚡
// Mais rápido no dev (HMR instantâneo), simples de configurar, usa ES modules nativos e tem ecossistema enorme (React, Vue, Svelte etc.). Ótimo equilíbrio entre performance e DX.

// Parcel 📦
// Zero-config de verdade e bem estável, mas menos flexível e com menos controle fino. Bom pra projetos simples.

// RSBuild 🚀
// Muito rápido (Rust + Rspack), excelente pra projetos grandes/enterprise, mas ainda menos maduro e com ecossistema menor.

// 👉 Resumo:

// Projeto comum / frontend moderno → Vite

// Algo super simples → Parcel

// App grande e complexo → RSBuild

// ---------

// Mas Vite consegue escalar também?

// Sim — Vite escala, sim 👍
// Mas com alguns cuidados.

// Por que escala bem:

// Dev rápido mesmo em projetos grandes (ESM + HMR eficiente)

// Build usa Rollup, que lida bem com bundles complexos

// Ecossistema maduro (plugins, monorepos, frameworks)

// Cuidados ao escalar:

// Código dividido (lazy loading) é essencial

// Em monorepos grandes, precisa cache (pnpm, Turborepo, Nx)

// Build pode ficar mais lento que RSBuild/Webpack em apps gigantes

// Resumo honesto:
// Vite escala muito bem até grande porte.
// Só perde vantagem quando o projeto vira enterprise massivo, onde RSBuild/Rspack pode ganhar.

// ---------

// Quanto é grande porte e quanto é massivo? E Por que o RSBuild ganha aqui?

// Boa pergunta — vamos colocar números e motivos, sem marketing 🙂

// O que é “grande porte” vs “massivo”
// 🟢 Grande porte (Vite lida muito bem)

// 100–500+ componentes

// 50k–200k linhas de JS/TS

// 1–3 apps ou microfrontends

// Times de 5–20 devs

// Build: 30s–2min

// Monorepo pequeno ou médio

// 👉 Aqui o Vite é excelente (DX, HMR, plugins, simplicidade).

// 🔴 Massivo / Enterprise

// 500–2000+ componentes

// 300k–1M+ linhas de JS/TS

// Vários apps no mesmo repo

// 20–100+ devs

// CI pesado, builds frequentes

// Monorepo grande (shared libs, design system, etc.)

// 👉 Aqui o Vite funciona, mas começa a doer.

// Por que RSBuild ganha no massivo?
// ⚙️ 1. Engine em Rust (Rspack)

// Parsing, bundling e tree-shaking muito mais rápidos

// Menos CPU e memória

// Builds grandes ficam 2–5x mais rápidos

// 🔁 2. Incremental builds melhores

// Recompila menos coisas

// Melhor em CI e builds repetidos

// 🧱 3. Arquitetura pensada pra enterprise

// Config mais previsível

// Integra melhor com pipelines grandes

// Mais parecido com Webpack (migração fácil)

// 🧠 4. Menos “mágica”

// Vite abstrai muito → ótimo pra DX, pior pra tuning extremo

// RSBuild expõe mais knobs pra performance pesada

// Regra prática (bem honesta)

// Startup / SaaS / produto comum → Vite

// Scale-up grande → Vite + otimizações

// Big tech / monorepo gigante / CI caro → RSBuild

// ---------

// Troque de Vite quando começar a ver isso com frequência: 👇

// 🚨 Sinais claros de que o projeto virou “massivo”

// Build > 3–5 minutos no CI, mesmo com cache

// HMR demora segundos ou “trava” ao salvar arquivos

// Monorepo com muitos pacotes shared (design system, utils, core)

// 20+ devs reclamando de build local lento

// Precisa de tuning extremo (chunks manuais, hacks de Rollup)

// CI é caro e lento, e build virou gargalo do time

// 👉 Se 2–3 desses já são verdade, Vite está no limite.

// 🧠 Por que não esperar quebrar?

// Porque RSBuild:

// Build 2–5x mais rápido

// Incremental build muito melhor

// Escala melhor com crescimento do repo

// Menos “gambiarras” pra manter performance

// ⚖️ Estratégia comum (boa prática)

// Começa com Vite

// Cresce → otimiza

// Chegou nos sinais acima → migra pra RSBuild

// DX cai um pouco, produtividade do time sobe

//---------------- fim da conversa com ChatGPT.

// Passo 2: Construir Padrões Comuns de Aplicação

// As ferramentas de build listadas acima começam com uma aplicação de página única (SPA) apenas do lado do cliente, mas não incluem soluções adicionais para funcionalidades comuns como roteamento, busca de dados, ou estilização.

// - Roteamento - (Routing)

// Roteamento determina qual conteúdo ou páginas exibir quando um usuário visita uma URL específica.

// Você precisa configurar um roteador para mapear URLs para diferentes partes da sua aplicação.

// Você também precisará lidar com rotas aninhadas, parâmetros de rota e parâmetros de consulta.

// Os roteadores podem ser configurados dentro do seu código, ou definidos com base nas estruturas de pastas e arquivos dos seus componentes.

// Os roteadores são uma parte central das aplicações modernas, e geralmente são integrados com busca de dados (data fetching) (incluindo pré-busca de dados (prefetching) para uma página inteira para carregamento mais rápido), divisão de código (code splitting)(para minimizar tamanhos de bundle do cliente), e abordagens de renderização de página (para decidir como cada página é gerada).

// Sugestões de uso:

    // React Router
    // Tanstack Router

// - Busca de Dados - (Data Fetching)

/*Buscar dados de um servidor ou outra fonte de dados é uma parte fundamental da maioria das aplicações. Fazer isso adequadamente requer lidar com estados de carregamento, estados de erro, e cache dos dados buscados, que pode ser complexo.

Bibliotecas de busca de dados especializadas fazem o trabalho pesado de buscar e cachear os dados para você, permitindo que você se concentre em quais dados sua aplicação precisa e como exibi-los. Essas bibliotecas são tipicamente usadas diretamente nos seus componentes, mas também podem ser integradas em loaders de roteamento para pré-busca mais rápida e melhor performance, e também na renderização do servidor. */

// Note that fetching data directly in components can lead to slower loading times due to network request waterfalls,
// so we recommend prefetching data in 'router loaders' or on the server as much as possible!
// This allows a page’s data to be fetched all at once as the page is being displayed.

// - Divisão de Código - (Code Splitting)
// - Melhorando a Performance da Aplicação -