// Resumo – Largest Contentful Paint (LCP)

// LCP mede o tempo até que o 'maior elemento visível' da página (imagem, bloco de texto ou vídeo) seja renderizado no viewport após a navegação do usuário.

// Importância:

    // LCP é um 'Core Web Vital' que indica a 'percepção de velocidade' do carregamento da página. Um LCP rápido dá ao usuário a sensação de que a página está útil.

// Bom LCP:
    
    // Até 2,5 segundos é considerado bom. Valores acima de 4 s precisam de melhoria.

// Elementos considerados:

    // - `<img>` (incluindo GIFs/PNG animados)
    // - `<video>` (poster ou primeira frame)
    // - Elementos de bloco com texto visível
    // - Elementos com background image carregada via `url()`

// Heurísticas:

    // LCP ignora elementos invisíveis, placeholders ou que ocupam toda a tela como fundo, para refletir o 'conteúdo real' que o usuário vê.

// Diferença para FCP:

    // - FCP mede quando 'qualquer conteúdo' aparece.
    // - LCP foca no 'conteúdo principal' percebido pelo usuário.

// Como melhorar:

    // - Otimizar imagens e vídeos
    // - Reduzir bloqueio de renderização (JS/CSS)
    // - Melhorar tempo de resposta do servidor (TTFB)

// Para saber mais:

    // https://web.dev/articles/lcp
