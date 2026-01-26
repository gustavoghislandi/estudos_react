// Em React, o fato de usar diferentes paths não significa que há mudança de página.

// O que realmente importa é como o navegador carrega a página.

// Em SPA, o React Router:

    // Intercepta a navegação
    // Troca os componentes sem recarregar a página

    // A URL muda, mas:

        // ❌ não há novo request de HTML
        // ❌ não ocorre reload da página

// Em uma MPA, cada rota:

    // Carrega um HTML diferente
    // Faz um reload completo