// Resumo – Time to Interactive (TTI) (Lembre de deixar visualmente claro que os componentes ainda não estão interativos)
//
// Time to Interactive (TTI) é uma métrica de laboratório
// usada para medir a responsividade durante o carregamento da página.
// Ela identifica casos em que a página parece interativa,
// mas ainda não consegue responder rapidamente às ações do usuário.
//
// O TTI mostrou-se muito sensível a tarefas longas e requisições de rede fora do padrão,
// gerando alta variabilidade. Por isso, foi removido do Lighthouse a partir da versão 10.
// Métricas mais modernas como LCP, TBT e INP são geralmente melhores substitutas.
//
// O que o TTI mede:
    // O tempo desde o início do carregamento da página
    // até o momento em que ela consegue responder de forma confiável às interações do usuário.
//
// Como o TTI é calculado:
    // Parte do First Contentful Paint (FCP)
    // Procura uma janela silenciosa de pelo menos 5 segundos,
    // sem tarefas longas e com no máximo duas requisições GET em andamento
    // O TTI é o final da última tarefa longa antes dessa janela silenciosa
    // (ou o próprio FCP, se não houver tarefas longas).
    //
// Problema comum:
    // A página pode parecer pronta (conteúdo visível),
    // mas não estar realmente interativa devido à main thread bloqueada
    // ou ao JavaScript ainda não carregado.
    // Isso gera frustração e pode levar o usuário a abandonar o site.

// Boa prática:
    // Minimizar a diferença entre FCP e TTI
    // e indicar visualmente quando elementos ainda não estão interativos.

// 'AND IN CASES WHERE A NOTICEABLE DIFFERENCE DOES EXIST, MAKE IT CLEAR THROUGH VISUAL INDICATORS THAT THE COMPONENTS ON YOUR PAGE ARE NOT YET INTERACTIVE.'

// Como medir:
    // Métrica indicada para laboratório.
    // Ferramentas: Lighthouse e WebPageTest.
    // No campo, recomenda-se medir INP em vez de TTI.

// Bom TTI:
    // Menor que 5 segundos em hardware móvel médio.

// Como melhorar:
    // Minificar JavaScript
    // Precarregar recursos críticos
    // Reduzir impacto de código de terceiros
    // Diminuir tempo de execução de JavaScript
    // Minimizar trabalho da main thread
    // Reduzir número e tamanho de requisições

// Para saber mais, acesse:

    // https://web.dev/articles/tti
