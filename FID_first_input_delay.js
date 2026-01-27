// Resumo – First Input Delay (FID) (obsoleto - use Interaction to Next Paint (INP))
//
// First Input Delay (FID) mede o tempo entre a primeira interação do usuário
// (clique, toque ou tecla) e o momento em que o navegador consegue começar
// a processar os event handlers dessa interação.
//
// Aviso importante:
// FID não é mais um Core Web Vital.
// Ele foi substituído pelo Interaction to Next Paint (INP),
// e seu suporte foi encerrado em 9 de setembro de 2024.
// Hoje, o foco deve ser INP.
//
// O que o FID mede:
// Apenas o atraso inicial da interação (input delay).
// Ele não mede o tempo de execução dos handlers
// nem o tempo até a atualização visual da interface.
//
// Por que o atraso acontece:
// Geralmente porque a main thread está ocupada,
// normalmente executando JavaScript pesado durante o carregamento.
// Enquanto isso, o navegador não consegue responder ao input.
//
// Relação com FCP e TTI:
// FIDs altos costumam ocorrer entre o FCP e o TTI,
// quando a página já mostra conteúdo,
// mas ainda não está realmente interativa.
//
// O que conta como primeira interação:
// Cliques
// Toques
// Pressionamento de teclas
// Scroll e zoom não entram no cálculo.
//
// Mesmo sem event listener:
// FID ainda é medido,
// pois muitos elementos nativos (inputs, selects, links)
// precisam que a main thread esteja livre para responder.
//
// Bom FID:
// Até 100 ms no 75º percentil (campo).
//
// Observação:
// Apesar disso, o texto menciona valores inconsistentes antigos,
// reforçando que FID não deve mais ser usado como referência.
//
// Como medir:
// FID só pode ser medido no campo, com usuários reais.
// Ferramentas: Chrome UX Report, PageSpeed Insights,
// Search Console e web-vitals.
//
// No laboratório:
// FID não pode ser medido.
// Total Blocking Time (TBT) é usado como métrica proxy,
// pois se correlaciona bem com FID.
//
// Por que só o primeiro input:
// Ele representa a primeira impressão de responsividade,
// que é crítica para a percepção de qualidade do site.
//
// Situações sem FID:
// Usuário não interagiu
// Interações não elegíveis
// Usuários interagiram em momentos diferentes da carga
//
// Análise de dados:
// É importante olhar a distribuição dos valores,
// especialmente percentis altos (95º–99º),
// para identificar experiências ruins.
//
// Conclusão:
// FID foi importante para medir a primeira impressão de interatividade,
// mas hoje deve ser considerado obsoleto,
// com INP sendo a métrica recomendada.

// Para saber mais, acesse:

    // https://web.dev/articles/fid