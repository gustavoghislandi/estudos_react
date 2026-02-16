//  “Components” are reusable UI elements for your app.
// Under the hood, it still uses the same HTML tags.
// Just like with HTML tags, you can compose, order and nest components to design whole pages.
// As your project grows, you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development.
// You can even jumpstart your project with the thousands of components shared by the React open source community like Chakra UI [https://chakra-ui.com/] and Material UI [https://mui.com/material-ui/].

// Um componente React é uma função JavaScript que permite você adicionar tags HTML. 

// Os componentes do React são funções comuns do JavaScript, mas seus nomes devem começar com letra maiúscula ou não funcionarão! [ Pensei que era só convenção]
// Letra minúscula → o JSX entende como tag HTML nativa

// JSX é escrito como HTML, mas na verdade, é o JavaScript que está por trás! Essa sintaxe é chamada JSX e permite usar tags HTML dentro do JavaScript.

// ------------------------------------

// As instruções de retorno podem ser escritas todas em uma linha, como neste componente:

    return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

// Mas se seu HTML não estiver na mesma linha que a declaração return, você deve colocá-la entre parênteses:

    return (
    <div>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
    );

// Sem parênteses, qualquer código nas linhas após return será ignorado!


// -------------------------

// JSX não retorna “só HTML” — ele retorna elementos React (objetos JS).
// Parece HTML, mas não é HTML puro.

    // return <div>Oi</div>

// Dentro de {} é JavaScript, não HTML.

    // <div>
    // {nome}
    // {2 + 2}
    // {condicao && <span>Mostrar</span>}
    // </div>

// Mas o que for renderizado no final precisa virar algo que o React saiba exibir:

    // string
    // número
    // boolean/null (não renderiza)
    // ou outro elemento JSX

// Resumindo:

    // JSX ≠ HTML puro
    // {} = JavaScript
    // O resultado final precisa ser renderizável pelo React


// ---------------------------------
// Deep dive:

// Sua aplicação React começa em um componente “raiz”. Normalmente, ele é criado automaticamente quando você inicia um novo projeto. Por exemplo, se você usar CodeSandbox ou você usar o framework Next.js, o componente raiz é definido em pages/index.js. Nesses exemplos, você exportou componentes raiz.

// A maioria das aplicações React usa componentes em todos os níveis. Isso significa que você não usará componentes apenas para partes reutilizáveis, como botões, mas também para partes maiores, como barras laterais, listas e até em páginas inteiras! Os componentes são uma maneira prática de organizar o código e o HTML da UI, mesmo que alguns deles sejam usados apenas uma vez.

// Os Frameworks React [Next.js, por exemplo] levam isso um passo adiante. Em vez de usar um arquivo HTML vazio e deixar o React “assumir” o gerenciamento da página com JavaScript, eles também geram o HTML automaticamente a partir de seus componentes React. Isso permite que seu aplicativo mostre algum conteúdo antes que o código JavaScript seja carregado.

// Ainda assim, muitos sites usam o React apenas para adicionar interatividade às páginas HTML existentes. Eles têm muitos componentes raiz em vez de um único para toda a página. Você pode usar o React na medida certa para atender as suas necessidades.

// Resumindo:

    // ### 🔹 React “puro”

        // Renderiza no **cliente (browser)** usando JavaScript.
        // Sem JS → nada aparece.

    // ### 🔹 Next.js

    // Pode renderizar **antes do JS rodar no navegador**.

        // Ele faz:

            // * ✅ **SSR (Server-Side Rendering)** → HTML pronto vem do servidor
            // * ✅ **SSG (Static Site Generation)** → HTML já gerado no build
            // * ✅ **Streaming / Server Components**

        // Ou seja:
        // 👉 O **HTML já chega pronto** ao navegador.
        // 👉 Depois o JavaScript “hidrata” a página para ficar interativa.

        // ⚠️ Mas:
        // Se você precisa de interatividade, o JS ainda é necessário depois.

// Resumo final:

    // * React puro → depende do JS do navegador
    // * Next.js → consegue renderizar HTML antes do JS rodar, mas ainda usa JS para interatividade


// ------------------------
// Resumão:

//     O React permite que você crie componentes, elementos de UI reutilizáveis para sua aplicação.

//     Em uma aplicação React, cada parte da UI é um componente.

//     Os componentes do React são funções comuns do JavaScript, mas com duas diferenças importantes:
//         Seus nomes sempre começam com letra maiúscula.
//         Eles retornam JSX.
