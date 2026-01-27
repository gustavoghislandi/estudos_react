// Resumo – Interaction to Next Paint (INP)
//
// Interaction to Next Paint (INP) é uma métrica estável dos Core Web Vitals
// que mede a responsividade geral da página ao longo de toda a visita do usuário.
// Ela avalia o tempo entre uma interação do usuário
// (clique, toque ou tecla) e o próximo frame pintado pelo navegador.
//
// Um INP baixo indica que a página responde de forma rápida e consistente
// à maioria das interações do usuário.
//
// O que o INP mede:
// A latência das interações do usuário desde o início do input
// até o momento em que o navegador consegue pintar o próximo frame.
// Ele não mede todo o trabalho assíncrono posterior,
// apenas o atraso no feedback visual inicial.
//
// Como o INP é calculado:
// Observa todas as interações durante a vida da página.
// Normalmente, a interação mais lenta define o INP.
// Para páginas com muitas interações, outliers são descartados
// (ignora-se a pior interação a cada 50 interações).
// O valor reportado segue o padrão do 75º percentil no campo.
//
// Tipos de interação considerados:
// Cliques de mouse
// Toques em telas sensíveis ao toque
// Pressionamento de teclas
// Interações como scroll, zoom ou hover não entram no cálculo.
//
// O que compõe a latência de uma interação:
// Atraso de input (tempo até os handlers começarem)
// Execução dos event handlers
// Atraso de apresentação (tempo até o próximo frame ser pintado)
//
// Bom INP:
// Até 200 ms → boa responsividade
// Entre 200 ms e 500 ms → precisa de melhoria
// Acima de 500 ms → responsividade ruim
//
// Diferença entre INP e FID:
// FID media apenas a primeira interação.
// INP avalia todas as interações durante todo o ciclo de vida da página,
// sendo uma métrica mais confiável de responsividade real.
//
// Quando não há INP:
// O usuário não interagiu com a página
// As interações não são do tipo medido
// A página foi acessada por bots
//
// Como medir:
// A melhor forma é no campo, com dados reais de usuários (RUM).
// CrUX e PageSpeed Insights podem fornecer dados agregados.
// Em laboratório, a medição depende das interações simuladas.
// TBT pode ser usado como métrica proxy no lab, mas não substitui o INP.
//
// Boas práticas:
// Priorizar feedback visual rápido
// Evitar tarefas longas na main thread
// Otimizar JavaScript e handlers de eventos
// Melhorar INP resulta em melhor experiência percebida pelo usuário.

// Para saber mais, acesse:

    // https://web.dev/articles/inp