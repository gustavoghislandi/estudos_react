// Resumo – First Contentful Paint (FCP)

// O First Contentful Paint (FCP) mede o tempo desde o início do carregamento da página
// até o momento em que qualquer conteúdo visível (texto, imagem, SVG ou canvas)
// aparece na tela. Ele indica a primeira resposta visual ao usuário,
// ajudando a percepção de velocidade.

    // Bom FCP: ≤ 1,8s
    // Ruim: > 3,0s

    // Avaliação ideal: 75º percentil, em mobile e desktop.

// O FCP inclui etapas como TTFB, redirects e conexão,

// Como medir:
    // Campo: PageSpeed Insights, Chrome UX Report, Search Console, web-vitals
    // Laboratório: Lighthouse, Chrome DevTools

// Como melhorar:
    // Eliminar recursos que bloqueiam renderização
    // Otimizar CSS e JavaScript
    // Reduzir TTFB e redirects
    // Precarregar recursos críticos
    // Diminuir tamanho e número de requisições

// FCP é diferente de LCP, que mede quando o conteúdo principal termina de carregar.


// Para saber mais, acesse:

    // https://web.dev/articles/fcp