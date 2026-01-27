// Time to First Byte (TTFB)
//
// TTFB (Time to First Byte) é uma métrica fundamental que mede o tempo
// entre o início da navegação até o momento em que o primeiro byte da
// resposta começa a chegar ao navegador.
// Ela reflete principalmente a latência de rede e a capacidade de
// resposta do servidor.
//
// TTFB acontece antes de qualquer outra métrica relevante de carregamento,
// como FCP ou LCP, especialmente em requisições de navegação (HTML).
// Se o servidor demora a responder, todas as outras métricas são atrasadas.

// ------------------------------------------------------------
// O que o TTFB mede
//
// O TTFB inclui a soma das seguintes fases da requisição:
//
// - Tempo de redirecionamento
// - Inicialização do Service Worker (se existir)
// - Busca no cache HTTP
// - Resolução de DNS
// - Conexão TCP e negociação TLS
// - Envio da requisição
// - Tempo até o primeiro byte da resposta chegar
//
// Reduzir latência de rede e tempo de processamento no backend
// reduz diretamente o TTFB.

// ------------------------------------------------------------
// Descrição das imagens do artigo
//
// Imagem 1:
// Uma linha do tempo detalhada de uma requisição de rede,
// mostrando várias fases em sequência: Redirect, Service Worker,
// DNS, TCP, Request, Response, Processing e Load.
// A imagem destaca que o TTFB corresponde ao intervalo entre
// o início da navegação (startTime) e o momento em que a resposta
// começa (responseStart).
//
// Imagem 2:
// Um diagrama simplificado das fases da requisição,
// reforçando visualmente que o TTFB mede apenas o tempo
// até o primeiro byte chegar, e não o download completo,
// parsing ou renderização da página.

// ------------------------------------------------------------
// TTFB e Early Hints (HTTP 103)
//
// O HTTP 103 Early Hints permite que o servidor envie dados
// antecipados (como headers ou hints de preload) antes da
// resposta final (ex: HTTP 200).
//
// Esses dados antecipados contam como "primeiros bytes",
// o que torna a definição de TTFB mais complexa.
// Por isso, ferramentas diferentes podem medir o TTFB
// de maneiras levemente diferentes.
//
// O ponto mais importante não é comparar números absolutos
// entre tecnologias, mas entender como a ferramenta mede
// o TTFB e como a arquitetura do site influencia esse valor.

// ------------------------------------------------------------
// O que é um bom TTFB
//
// Valores de referência:
//
// - Bom: até 0.8 segundos
// - Precisa melhorar: entre 0.8 e 1.8 segundos
// - Ruim: acima de 1.8 segundos
//
// O TTFB não é um Core Web Vital, mas impacta diretamente
// métricas centradas no usuário, como FCP e LCP.
//
// Sites client-rendered (SPAs) se beneficiam muito de um
// TTFB baixo, pois o JavaScript só pode começar a trabalhar
// depois que o HTML inicial chega.
//
// Já sites server-rendered podem tolerar um TTFB um pouco
// maior se entregarem conteúdo significativo rapidamente.

// ------------------------------------------------------------
// Como medir TTFB
//
// Pode ser medido tanto no laboratório quanto no campo.
//
// Ferramentas de campo:
// - Chrome User Experience Report (CrUX)
// - web-vitals JavaScript library
//
// Ferramentas de laboratório:
// - Chrome DevTools (Network)
// - WebPageTest

// ------------------------------------------------------------
// Medindo TTFB em JavaScript (Navigation Timing API)

new PerformanceObserver((entryList) => {
  const [pageNav] = entryList.getEntriesByType('navigation');
  console.log(`TTFB: ${pageNav.responseStart}`);
}).observe({
  type: 'navigation',
  buffered: true
});

// ------------------------------------------------------------
// Medindo TTFB com a biblioteca web-vitals

import { onTTFB } from 'web-vitals';

onTTFB(console.log);

// ------------------------------------------------------------
// Medindo TTFB de recursos (Resource Timing API)
//
// Útil para identificar latência em recursos externos
// (ex: APIs, imagens, scripts de terceiros).

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (entry.responseStart > 0) {
      console.log(`TTFB: ${entry.responseStart}`, entry.name);
    }
  }
}).observe({
  type: 'resource',
  buffered: true
});

// ------------------------------------------------------------
// Observações finais
//
// TTFB mede o quão rápido o servidor começa a responder,
// não o quão rápido a página fica utilizável.
// Ele deve ser analisado em conjunto com FCP, LCP e INP.
//
// Um TTFB baixo é especialmente importante para experiências
// client-side, enquanto sites server-side podem equilibrar
// um TTFB maior com menos trabalho no cliente.

// Para saber mais, acesse:

    // https://web.dev/articles/ttfb

// E para saber como otimizar, acesse:

    // https://web.dev/articles/optimize-ttfb

