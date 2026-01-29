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

/* Note that fetching data directly in components can lead to slower loading times due to network request waterfalls,
so we recommend prefetching data in 'router loaders' or on the server as much as possible!
This allows a page’s data to be fetched all at once as the page is being displayed.*/

/*
Se você está buscando dados da maioria dos backends ou APIs estilo REST, sugerimos usar:

    React Query
    SWR
    RTK Query

Se você está buscando dados de uma API GraphQL, sugerimos usar:

    Apollo
    Relay
 */


// - Divisão de Código - (Code Splitting)

// Divisão de código é o processo de quebrar sua aplicação em bundles menores que podem ser carregados sob demanda.

// O tamanho do código de uma aplicação aumenta com cada nova funcionalidade e dependência adicional. 
// As aplicações podem se tornar lentas para carregar porque todo o código para a aplicação inteira precisa ser enviado antes que possa ser usado.

// Cache,
// redução de funcionalidades/dependências,
// e mover algum código para executar no servidor
// podem ajudar a mitigar o carregamento lento,
// mas são soluções incompletas que podem sacrificar funcionalidade se usadas em excesso.

//--- ChatGPT sobre por que são soluções incompletas:

// São incompletas porque não atacam a causa principal do problema, só aliviam parte dos sintomas:

    // Cache

        // Ajuda depois do primeiro acesso. No primeiro carregamento, o usuário ainda precisa baixar tudo.

    // Reduzir funcionalidades/dependências

        // Melhora o tamanho, mas sacrifica recursos do produto. Não escala bem conforme a app cresce.

    // Mover código para o servidor

        // Diminui o bundle, mas aumenta dependência de rede/latência e não elimina a necessidade de carregar código no cliente.

    // Já a divisão de código (code splitting) resolve a raiz:

        // 👉 o usuário só baixa o código que precisa, quando precisa, evitando enviar a aplicação inteira de uma vez.


//--- fim do ChatGPT sobre por que são soluções incompletas.

// Dividir código por rota, quando integrado com bundling e busca de dados, pode reduzir o tempo de carregamento inicial da sua aplicação e o tempo que leva para o maior conteúdo visível da aplicação renderizar (Largest Contentful Paint).

// Similarly, if you rely on the apps using your framework to split the code, you might encounter situations where loading becomes slower than if no code splitting were happening at all. For example, lazily loading a chart delays sending the code needed to render the chart, splitting the chart code from the rest of the app. Parcel supports code splitting with React.lazy. However, if the chart loads its data after it has been initially rendered you are now waiting twice. This is a waterfall: rather than fetching the data for the chart and sending the code to render it simultaneously, you must wait for each step to complete one after the other. [Mais sobre isso em code_splitting.js, linha 105 em diante]

/*
Para instruções de divisão de código, veja a documentação da sua ferramenta de build:

    Otimizações de build do Vite
    Divisão de código do Parcel
    Divisão de código do Rsbuild

        Links em https://react.dev/learn/build-a-react-app-from-scratch

 */

// - Melhorando a Performance da Aplicação -

/*
Como a ferramenta de build que você seleciona só suporta aplicações de página única (SPAs), você precisará implementar outros padrões de renderização como renderização do lado do servidor (SSR), geração de site estático (SSG), e/ou React Server Components (RSC). Mesmo se você não precisar dessas funcionalidades no início, no futuro pode haver algumas rotas que se beneficiariam de SSR, SSG ou RSC.

    Aplicações de página única (SPA) carregam uma única página HTML e atualizam dinamicamente a página conforme o usuário interage com a aplicação. SPAs são mais fáceis de começar, mas podem ter tempos de carregamento inicial mais lentos. SPAs são a arquitetura padrão para a maioria das ferramentas de build.

    Renderização do lado do servidor com streaming (SSR) renderiza uma página no servidor e envia a página totalmente renderizada para o cliente. SSR pode melhorar a performance, mas pode ser mais complexo de configurar e manter do que uma aplicação de página única. Com a adição de streaming, SSR pode ser muito complexo de configurar e manter. Veja o guia SSR do Vite. [https://vite.dev/guide/ssr]

    Geração de site estático (SSG) gera arquivos HTML estáticos para sua aplicação no momento do build. SSG pode melhorar a performance, mas pode ser mais complexo de configurar e manter do que renderização do lado do servidor. Veja o guia SSG do Vite. [https://vite.dev/guide/ssr.html#pre-rendering-ssg]

    React Server Components (RSC) permite misturar componentes de build-time, apenas do servidor, e interativos em uma única árvore React. RSC pode melhorar a performance, mas atualmente requer expertise profunda para configurar e manter. Veja os exemplos RSC do Parcel. [https://github.com/parcel-bundler/rsc-examples]

Suas estratégias de renderização precisam se integrar com seu roteador para que aplicações construídas com seu framework possam escolher a estratégia de renderização no nível de rota. Isso permitirá diferentes estratégias de renderização sem ter que reescrever toda a sua aplicação. Por exemplo, a página de destino da sua aplicação pode se beneficiar de ser gerada estaticamente (SSG), enquanto uma página com um feed de conteúdo pode ter melhor performance com renderização do lado do servidor.

Usar a estratégia de renderização certa para as rotas certas pode diminuir o tempo que leva para o primeiro byte de conteúdo ser carregado (Time to First Byte), o primeiro pedaço de conteúdo renderizar (First Contentful Paint), e o maior conteúdo visível da aplicação renderizar (Largest Contentful Paint).
E mais…

Estes são apenas alguns exemplos das funcionalidades que uma nova aplicação precisará considerar ao construir do zero. Muitas limitações que você encontrará podem ser difíceis de resolver, já que cada problema está interconectado com os outros e pode requerer expertise profunda em áreas problemáticas com as quais você pode não estar familiarizado.

Se você não quer resolver esses problemas por conta própria, pode começar com um framework que fornece essas funcionalidades prontas para uso.
*/