// Resumo – Total Blocking Time (TBT)
//
// Total Blocking Time (TBT) mede o tempo total, após o First Contentful Paint (FCP),
// em que a main thread ficou bloqueada por tarefas longas,
// impedindo a resposta a interações do usuário.
//
// Uma tarefa longa é qualquer tarefa que dure mais de 50 ms.
// O tempo de bloqueio de cada tarefa é apenas o que excede esses 50 ms.
// O TBT total é a soma desses tempos de bloqueio no período medido
// (geralmente até o Time to Interactive – TTI, em ferramentas de laboratório).
//
// Um TBT alto indica que a página parece lenta ou não responsiva.
// Um TBT baixo costuma se correlacionar com um bom INP
// (Interaction to Next Paint), mas não o substitui.
//
// Relação com INP:
// TBT é um bom indicador de problemas de responsividade em laboratório,
// mas pode não refletir exatamente a experiência real do usuário.
// INP deve ser medido no campo.
//
// Relação com TTI:
// TBT quantifica melhor a severidade do bloqueio do que o TTI,
// pois não é tão sensível a casos extremos.
//
// Como medir:
// TBT deve ser medido em laboratório.
// Ferramentas principais: Lighthouse e WebPageTest.
//
// Bom TBT:
// Menor que 200 ms em hardware móvel médio.
//
// Como melhorar:
// Reduzir e otimizar scripts bloqueantes
// Otimizar tarefas longas
// Reduzir JavaScript e código de terceiros
// Minimizar trabalho da main thread
// Diminuir número e tamanho de requisições
//
// Em geral, recomenda-se otimizar INP,
// usando TBT como métrica proxy em ambiente de laboratório.

// Para saber mais, acesse:

    // https://web.dev/articles/tbt