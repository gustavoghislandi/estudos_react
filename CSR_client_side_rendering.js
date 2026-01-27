/* 
Mas depois do primeiro load o CSR não fica bom?

Exatamente! 😄 Depois do primeiro carregamento, o CSR (Client-Side Rendering) pode ficar muito eficiente, mas com alguns detalhes importantes:

1️⃣ Primeiro load é o custo mais caro

    O navegador precisa baixar e executar todo o JavaScript necessário para renderizar a página.
    Isso deixa o FCP mais lento e bloqueia a main thread, aumentando o INP inicial.
    Usuários em redes lentas ou dispositivos fracos sentem isso mais.

2️⃣ Depois do primeiro load (navegação interna / SPA)

    O CSR realmente brilha, porque apenas novos dados são buscados e as mudanças no DOM são feitas via JavaScript.
    Métricas como FCP inicial não importam mais, e a experiência se torna instantânea para o usuário.
    É aí que técnicas como App Shell, cache de dados e code splitting fazem diferença: você carrega só o que é necessário.

3️⃣ Trade-offs e quando usar CSR puro

    Funciona bem para aplicações interativas, dashboards internos, SaaS, ferramentas tipo Figma/Notion.
    SEO e primeiros carregamentos podem ser um problema se você não combinar CSR com SSR ou prerendering.
    CSR é melhor como segunda etapa (após HTML inicial rápido) do que como estratégia única para sites de conteúdo.

💡 Resumo rápido: 

    CSR é pesado no primeiro load, mas depois pode ser muito rápido e responsivo. 
    Por isso, muitas aplicações modernas usam SSR ou Static Rendering para o HTML inicial, e CSR para a interatividade contínua.

*/