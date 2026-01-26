// Comando create-react-app

// Since Create React App currently has no active maintainers, and there are many existing frameworks that solve these problems already, we’ve decided to deprecate Create React App.

// Basicamente, ele resolvia problemas organizacionais no passado, mas agora os frameworks fazem isso e ninguém mais mantém ele, então está deprecado. Não é mais para usar. Use um framework.

// Mais informações aqui:

    // https://pt-br.react.dev/blog/2025/02/14/sunsetting-create-react-app

// ATENÇÃO: Abaixo é a parte que diz a quantidade de coisa que fica mais difícil de resolver sem usar um framework.

// And more…

// These are just a few examples of the limitations of Create React App.

// Once you’ve integrated 

    // routing, 
    // data-fetching, and 
    // code splitting, 

// you now also need to consider

    // pending states, 
    // navigation interruptions, 
    // error messages to the user, and 
    // revalidation of the data. 

// There are entire categories of problems that users need to solve like:

//     Accessibility
//     Asset loading
//     Authentication
//     Caching

//     Error handling
//     Mutating data
//     Navigations
//     Optimistic updates

//     Progressive enhancement
//     Server-side rendering
//     Static site generation
//     Streaming

// All of these work together to create the most optimal loading sequence.

// Solving each of these problems individually in Create React App can be difficult as each problem is interconnected with the others and can require deep expertise in problem areas users may not be familiar with. In order to solve these problems, users end up building their own bespoke solutions on top of Create React App, which was the problem Create React App originally tried to solve.

// Então, ou você usa um framework (com soluções prontas) ou cria suas próprias soluções. Resumidamente, é isso.