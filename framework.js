// Resumo:

    // USE UM FRAMEWORK
    // preferencialmente um dos recomendados pela comunidade React, como os Next.js, React Router ou Expo.

// This category of tools that integrates build tools, rendering, routing, data fetching, and code splitting are known as “frameworks” — or if you prefer to call React itself a framework, you might call them “metaframeworks”.

// FRAMEWORK é uma categoria de ferramentas que integra ferramentas de build, de renderização, de roteamento, de busca de dados e de separação de código.

// Frameworks impose some opinions about structuring your app in order to provide a much better user experience, in the same way build tools impose some opinions to make tooling easier.

// This is why we started recommending frameworks like

    // Next.js, (framework completo)
    // React Router, and (framework Web)
    // Expo (mobile, com React Native e rotas via React Navigation)

    // VEJA MAIS SOBRE OS 3 MAIS AO FINAL DESTE DOCUMENTO.

// for new projects.

// Frameworks provide the same getting started experience as Create React App, but also provide solutions to problems users need to solve anyway in real production apps.

// ChatGPT abaixo:

// Ele é uma estrutura de software que fornece uma base e regras para desenvolver aplicações, geralmente incluindo várias funcionalidades integradas.

// No contexto de front-end, por exemplo:

// Ferramentas que um framework pode integrar:

    // Build (Webpack, Vite)
    // Renderização (React, Vue, Angular)
    // Roteamento (React Router, Vue Router)
    // Busca de dados / state management (Redux, Vuex)
    // Code splitting / otimização

// Mas o essencial de um framework é:

    // Ele dita a estrutura e o fluxo da aplicação e fornece componentes ou APIs padrão, ao contrário de bibliotecas isoladas, que fazem apenas uma coisa.

// Em resumo:

    // Framework = base¹ + regras² + funcionalidades integradas³
    // Biblioteca = ferramenta isolada que você usa quando quiser

// 💡 Exemplo:

    // React é tecnicamente uma biblioteca, mas Next.js é um framework (porque integra roteamento, SSR, build e otimizações).

// Base¹: Next.js já cria pastas como pages/ e public/, e configura o build e roteamento automaticamente.

// Regras²: No Angular, você precisa usar @Component para definir componentes; se não fizer, não funciona.

// Funcionalidades integradas³: React Router no Next.js ou Angular Router no Angular fornecem roteamento pronto, sem precisar configurar do zero.

//--------------------------------------------------
// QUANDO USAR CADA FRAMEWORK

// 1️⃣ Quando usar React Router

//     Você está fazendo uma aplicação web com React puro.
//     Precisa de controle manual das rotas.
//     Quer lazy loading de páginas sem SSR/SSG.

//     Exemplo: SPA (Single Page Application) simples, sem servidor renderizando páginas.

// 2️⃣ Quando usar Next.js

//     Você está fazendo uma aplicação web completa e quer:
//     Roteamento automático (não precisa configurar nada)
//     Code splitting por página automático
//     SSR (Server-Side Rendering) ou SSG (Static Site Generation) para performance e SEO

//     Ideal para sites grandes, blogs, e-commerces ou apps que precisam de SEO.

// 3️⃣ Quando usar Expo

//     Você está fazendo uma aplicação mobile (iOS ou Android) com React Native.
//     Quer navegação entre telas (pilha, abas, drawer).
//     Quer gerenciamento de builds, assets e APIs nativas de forma simplificada.

//     Exemplo: apps de delivery, redes sociais ou qualquer app que rode nativamente no celular.


// Server rendering is optional 

// A renderização do lado do servidor é opcional. Todos os frameworks recomendados são Client-Side Rendering(CSR) app.

// Na maioria das vezes é melhor usar CSR, mas em alguns casos, como em Termos de Serviço ou documentação, pode ser mais interessante usar Static-Site Generation(SSG) ou Server-Side Rendering (SSR).

// Server-rendering geralmente manda menos JS ao cliente e um HTML completo, o que produz um First Contentful Paint (FCP) mais rápido, por reduzir o Total Blocking Time (TBT).

// [pedi um resumo pro ChatGPT, veja abaixo:]

// Deep Dive: Server Rendering é opcional

    // Frameworks modernos permitem criar apps CSR (Client-Side Rendered), mas nem sempre CSR é a melhor escolha para todas as páginas.
    // Mesmo em apps majoritariamente client-side, páginas como Termos de Uso ou Documentação podem se beneficiar de SSR (Server-Side Rendering) ou SSG (Static-Site Generation).

// Benefícios do Server Rendering

    // - Envia menos JavaScript para o cliente
    // - Entrega HTML completo
    // - Reduz Total Blocking Time (TBT)
    // - Acelera First Contentful Paint (FCP)
    // - Pode reduzir Interaction to Next Paint (INP)

// Trade-offs

    // - Gerar páginas no servidor exige tempo e recursos
    // - Pode aumentar Time to First Byte (TTFB)
    // - Apps de melhor performance escolhem a estratégia por página
    // - Frameworks dão opção, mas não obrigam a usar servidor

// Server Components

    // - Movem roteamento e data fetching para o servidor
    // - Permitem code splitting baseado nos dados, não só na rota
    // - Reduzem JS enviado ao cliente, melhorando a sequência de carregamento
    // - Podem rodar no build (SSG) ou em runtime (SSR)

// Server Rendering não é só SEO

    // - Também melhora performance: menos JS para baixar e parsear
    // - Chrome recomenda considerar SSR/SSG sobre CSR puro para melhor performance


//--------------------------

// Começar um React do zero é semelhante a construir o seu próprio framework 'ad hoc'.

// Escolha não usar um framework se estiver ciente dos problemas de performance que podem ocorrer se sua aplicação ganhar usuários, estando confortável para lidar com esses problemas ou sabendo que nunca precisará dessas funcionalidades que os frameworks oferecem.

