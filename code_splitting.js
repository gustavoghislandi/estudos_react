// Esse é outro problema, ao lado de Routing e Data Fetching que a falta de uma biblioteca específica ou framework traz ao usar React.


// “Code Splitting” é um conceito de desenvolvimento web,
// especialmente em aplicações JavaScript modernas (como React, Vue ou Angular),
// que consiste em dividir o código da aplicação em pedaços menores, chamados chunks,
// que podem ser carregados sob demanda, ao invés de carregar tudo de uma vez.
// Isso melhora o desempenho e a experiência do usuário, porque a página inicial carrega mais rápido.


// Isso significa que o seu código, quando sem 'code splitting', fica num único arquivo grande, o que demora mais pra carregar.

// Exemplo, fica assim:

    // - bundle.js    75kb

// Ao invés de:

    // - core.js      25kb
    // - home.js      25kb
    // - dashboard.js 25kb

// Então, o usuário não vai ficar baixando coisas desnecessárias. Só vai baixar dados a respeito das páginas que for usar. E isso gera um carregamento mais leve e rápido.

// [Traduzido de react.dev] Uma maneira de dividir o código é com 'React.lazy'. 
// No entanto, isso significa que o código não é obtido até que o componente seja renderizado,
// o que pode causar cascatas de rede.
// Uma solução mais ideal é usar um recurso de roteador que busca o código em paralelo enquanto o código está sendo baixado.
// Por exemplo, React Router fornece uma opção 'lazy',
// para especificar que uma rota deve ser dividida em código e otimizada quando é carregada:

import Home from './Home';
import Dashboard from './Dashboard';

// ✅ Routes are downloaded before rendering 
const router = createBrowserRouter([
  {path: '/', lazy: () => import('./Home')},
  {path: '/dashboard', lazy: () => import('Dashboard')}
]);

// Então se eu usar lazy é melhora colocar em TODAS as rotas?

// Ah, essa é uma ótima pergunta, e a resposta não é um “sim automático” — depende do tamanho e do comportamento das suas rotas. Vamos detalhar.

// 1️⃣ Por que nem sempre todas as rotas devem ser lazy

// Rotas pequenas e críticas (como /home ou /login) que você sabe que o usuário sempre vai acessar primeiro:

//     Fazer lazy pode ser desnecessário.
//     Porque o usuário ainda vai baixar o chunk no primeiro acesso, adicionando um pequeno atraso extra.
//     Nestes casos, importar normalmente pode ser mais rápido.
//     Rotas grandes ou raramente acessadas (como /dashboard/admin ou /configurações avançadas):
//     Essas são perfeitas para lazy.
//     Evita que o bundle inicial fique enorme, melhorando o tempo de carregamento inicial.

// 2️⃣ Pontos de atenção com lazy

// Flicker de loading

    // Com lazy, o React Router precisa carregar o chunk antes de renderizar.  
    // Normalmente você usa <Suspense fallback={<Loading />}> para mostrar algo enquanto o chunk baixa.

// Bundles pequenos vs muitos chunks

    // Se você colocar lazy em cada rota minúscula, pode gerar muitos arquivos pequenos.
    // Isso pode aumentar a quantidade de requisições HTTP, o que às vezes piora a performance em redes lentas.
    // A boa prática é agrupar rotas relacionadas que são frequentemente acessadas juntas.

// SEO e pré-renderização

    // Se você estiver usando SSR (Server-Side Rendering), lazy em excesso pode precisar de configuração extra para funcionar bem.

// 3️⃣ Regra prática

//     Import normal: pequenas rotas essenciais, carregadas na inicialização.
//     Lazy: rotas grandes, pesadas ou raramente usadas.
//     Agrupar chunks: rotas que sempre aparecem juntas podem ser carregadas em um chunk único para reduzir requisições.

// 💡 Exemplo:

const router3 = createBrowserRouter([
  { path: '/', element: <Home /> }, // importante, carrega rápido
  { path: '/login', element: <Login /> }, // pequena, sempre acessada
  { path: '/dashboard', lazy: () => import('./Dashboard') }, // grande, rara
  { path: '/admin', lazy: () => import('./Admin') } // grande, rara
]);

// Ou seja, as que sempre serão acessadas, coloque no bundle inicial (main chunk ou initial chunk).

// [Traduzido de react.dev] A divisão de código otimizada é difícil de acertar e é fácil cometer erros que podem fazer com que o usuário baixe mais código do que o necessário. Ele funciona melhor quando integrado ao seu roteador e às soluções de carregamento de dados para maximizar o armazenamento em cache, paralelizar buscas e oferecer suporte a padrões de “importação na interação”.


// Sobre CHUNKS 

// Um 'chunk' é um pedaço de código JavaScript separado que o navegador pode baixar sob demanda, em vez de carregar toda a aplicação de uma vez.

// Em outras palavras: é um “bloco de código” dividido do bundle principal.

// O bundle inicial também é um chunk — geralmente chamado de “main chunk” ou “initial chunk”.
    // Ele contém o código necessário para carregar a aplicação e renderizar a primeira tela.
    // Outros chunks (lazy-loaded) só são baixados quando necessários, mas o inicial sempre carrega junto com a página.

// Então, em termos de Webpack ou React Router, todo código JavaScript é organizado em chunks — só que alguns são carregados imediatamente (initial) e outros sob demanda (lazy).

//--------------------------------------------------

// Um ponto sutil sobre code splitting, especialmente quando usado de forma “preguiçosa” (lazy loading) em frameworks como React. 

// Vou explicar passo a passo:

// 1️⃣ O que acontece com code splitting

    // Quando você faz algo assim:

        const Chart = React.lazy(() => import('./Chart'));

        // Você quebra o bundle: o código do Chart não é enviado junto com o resto da app, só será baixado quando o componente realmente for usado.

        // Isso economiza download inicial, mas cria um efeito de espera extra.

// 2️⃣ O problema do “waterfall”

    // Imagine o fluxo de um gráfico que precisa de dados do servidor:

        // A app carrega e renderiza a página principal.
        // O usuário abre a seção do gráfico.
        // React vê que o Chart é lazy, então primeiro baixa o código do Chart.
        // Depois de baixar o código, ele busca os dados do gráfico.
        // Só então consegue renderizar o gráfico.

    // Ou seja, você espera duas coisas em sequência: primeiro o código, depois os dados. 
    // Isso cria uma latência acumulada (waterfall), e em alguns casos pode ser mais lento que simplesmente ter o Chart no bundle inicial, que já poderia começar a buscar dados imediatamente.

// 3️⃣ Conclusão

    // Code splitting é ótimo para reduzir o tamanho inicial do bundle, mas pode atrasar certas funcionalidades, especialmente componentes que dependem de dados externos.

    // É uma trade-off: você ganha rapidez no carregamento inicial, mas pode introduzir atrasos no uso de algumas partes da app.