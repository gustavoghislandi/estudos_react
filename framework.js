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