// Resumo – Rendering on the Web ("Quanto menos JavaScript você precisar para entregar valor real ao usuário, melhor será a experiência.", por ChatGPT)
//
// O artigo explica as principais abordagens de renderização
// que desenvolvedores web podem escolher para construir aplicações,
// e os trade-offs de performance de cada uma.
//
// Terminologia fundamental:
// Server-side rendering (SSR): renderiza HTML no servidor antes de enviar
// para o cliente.
// Client-side rendering (CSR): usa JavaScript no navegador para montar o DOM.
// Prerendering: gera HTML estático no build time.
// Hydration: adiciona estado e interatividade ao HTML já renderizado.
// Rehydration: similar à hydration, mas atualiza o DOM continuamente.
//
// Métricas de performance mencionadas:
// Time to First Byte (TTFB): tempo até o primeiro byte ser recebido.
// First Contentful Paint (FCP): momento em que conteúdo visível aparece.
// Interaction to Next Paint (INP): responsividade geral às interações.
// Total Blocking Time (TBT): tempo em que a main thread ficou bloqueada.
//
// Server-side rendering (SSR):
// Gera HTML completo no servidor, evita custos de renderização no cliente,
// geralmente resulta em FCP rápido e menor bloqueio da main thread.
// Pode aumentar TTFB, mas melhora perceptivelmente a experiência inicial.
// Funciona bem com muitas condições de rede e dispositivos variados.
//
// Static rendering:
// Gera HTML estático no momento do build para cada URL.
// Oferece FCP e TTFB consistentemente rápidos,
// além de reduzir TBT e INP quando há pouco JavaScript no cliente.
// Permite uso eficiente de CDNs e cache de borda.
//
// Limitações do static rendering:
// É difícil gerar páginas HTML antecipadamente quando há muitos URLs únicos.
//
// Client-side rendering (CSR):
// Toda a lógica, roteamento e templating ocorre no navegador via JavaScript.
// Pode ser complicado manter performance em dispositivos móveis.
// Código grande ou bibliotecas de terceiros aumentam TBT/INP.
// Técnicas como code splitting e lazy-loading ajudam a melhorar performance.
//
// Rehydration:
// Combina SSR com renderização no cliente.
// Começa com HTML rápido, depois "pega" o estado com JavaScript.
// Pode trazer overhead, duplicando trabalho no servidor e cliente.
// Pode impactar negativamente TBT e INP se houver muito JavaScript.
//
// Avanços e estratégias:
// Streaming SSR: envia HTML em partes para o navegador ir renderizando.
// Progressive rehydration: ativa partes interativas uma a uma ao invés de tudo de uma vez.
// Partial rehydration: identifica partes estáticas e reduz seu footprint no cliente.
// Trisomorphic rendering: serve SSR inicialmente e depois usa service worker
// para renderizações subsequentes no navegador.
//
// SEO:
// SSR geralmente melhora a indexação, pois crawlers conseguem interpretar
// conteúdo completo no HTML.
//
// Conclusão:
// Entender necessidades de performance e gargalos é essencial.
// SSR e static rendering costumam oferecer melhores experiências iniciais,
// enquanto CSR pode funcionar bem com otimizações adequadas.

// Para saber mais (e ver imagens e tabelas), acesse:

    // https://web.dev/articles/rendering-on-the-web


//--------------------------------------------------------------------
// Resumo – Rendering on the Web (com descrições visuais)
//
// O artigo discute as principais estratégias de renderização na web
// e como cada uma afeta métricas de performance e experiência do usuário.
// A decisão central é onde executar lógica e renderização:
// no servidor, no cliente, ou em abordagens híbridas.
//
// =======================
// TERMINOLOGIA
// =======================
//
// Server-side rendering (SSR):
// O servidor gera o HTML completo e envia ao navegador.
// O cliente recebe principalmente texto e links.
//
// Client-side rendering (CSR):
// O navegador recebe JavaScript e constrói o DOM no cliente.
//
// Static rendering:
// O HTML é gerado no build time e servido pronto, geralmente via CDN.
//
// Prerendering:
// A aplicação client-side é executada no build para gerar HTML inicial,
// mas precisa de JavaScript para se tornar realmente interativa.
//
// Hydration:
// Scripts no cliente adicionam interatividade ao HTML renderizado no servidor,
// assumindo que o DOM inicial não muda.
//
// Rehydration:
// Similar à hydration, mas envolve atualizações frequentes do DOM,
// podendo gerar mais custo de processamento.
//
// =======================
// MÉTRICAS RELACIONADAS
// =======================
//
// TTFB: tempo até o primeiro byte da resposta.
// FCP: momento em que o primeiro conteúdo aparece.
// TBT: tempo em que a main thread fica bloqueada.
// INP: responsividade geral às interações do usuário.
//
// =======================
// SERVER-SIDE RENDERING (SSR)
// =======================
//
// Descrição visual (diagrama):
// O navegador solicita a página.
// O servidor processa dados e gera HTML.
// O HTML chega ao navegador e é renderizado imediatamente.
// O JavaScript é carregado depois.
//
// Visualmente:
// Linha do tempo mostra FCP acontecendo cedo.
// O JavaScript aparece depois, reduzindo bloqueios iniciais.
//
// Vantagens:
// FCP rápido.
// Menor TBT e melhor INP, pois há menos JavaScript inicial.
// Boa experiência em redes lentas e dispositivos fracos.
//
// Desvantagem:
// Pode aumentar o TTFB, pois o servidor precisa gerar o HTML.
//
// =======================
// STATIC RENDERING
// =======================
//
// Descrição visual (diagrama):
// O navegador solicita um arquivo HTML pronto.
// O HTML vem diretamente do CDN.
// O conteúdo aparece quase imediatamente.
// JavaScript é opcional e geralmente pequeno.
//
// Visualmente:
// TTFB muito baixo.
// FCP e interatividade acontecem rapidamente.
//
// Vantagens:
// Performance muito consistente.
// Excelente cache.
// Baixo TBT e INP quando há pouco JavaScript.
//
// Limitação:
// Difícil quando existem muitas URLs dinâmicas
// ou páginas altamente personalizadas.
//
// =======================
// CLIENT-SIDE RENDERING (CSR)
// =======================
//
// Descrição visual (diagrama):
// O navegador solicita a página.
// Recebe um HTML mínimo (shell).
// Baixa grandes bundles de JavaScript.
// Executa JS, busca dados e monta o DOM.
// Só depois ocorre FCP e interatividade.
//
// Visualmente:
// FCP acontece mais tarde.
// Longas tarefas de JavaScript antes da página responder.
//
// Problemas:
// JavaScript cresce com a aplicação.
// Aumenta TBT e piora INP.
// Especialmente difícil em mobile.
//
// Mitigações:
// Code splitting.
// Lazy loading.
// PRPL pattern.
// Application shell + Service Workers.
//
// =======================
// REHYDRATION (SSR + CSR)
// =======================
//
// Descrição visual (diagrama):
// O servidor envia HTML completo.
// A página parece pronta visualmente.
// O navegador baixa JavaScript.
// O JavaScript executa e "assume" o DOM.
//
// Visualmente:
// Conteúdo aparece cedo,
// mas interações não funcionam imediatamente.
//
// Problema clássico:
// Página parece pronta,
// mas cliques não respondem até o JS terminar.
//
// Causa:
// HTML + dados serializados + bundle JS duplicam trabalho.
// Impacto negativo em TBT e INP.
//
// =======================
// STREAMING SSR
// =======================
//
// Descrição visual (diagrama):
// O servidor envia HTML em partes (chunks).
// O navegador renderiza conforme recebe.
// O resto da página continua chegando.
//
// Benefício:
// FCP ainda mais rápido.
// Melhor uso do tempo de rede.
//
// =======================
// PROGRESSIVE REHYDRATION
// =======================
//
// Descrição visual (diagrama):
// A página chega renderizada.
// Componentes críticos ganham interatividade primeiro.
// Partes menos importantes são hidratadas depois.
//
// Benefício:
// Menos JavaScript inicial.
// Interações importantes funcionam mais cedo.
// Menor bloqueio da main thread.
//
// =======================
// PARTIAL REHYDRATION
// =======================
//
// Descrição visual (conceito):
// Componentes quase estáticos não recebem JavaScript.
// Apenas partes realmente interativas são hidratadas.
//
// Benefício:
// Redução extrema de JavaScript no cliente.
//
// Desafio:
// Complexidade de cache.
// Navegação client-side mais difícil.
//
// =======================
// TRISOMORPHIC RENDERING
// =======================
//
// Descrição visual (diagrama):
// Primeira navegação: SSR via servidor.
// Navegações seguintes: Service Worker renderiza HTML.
// Compartilha lógica entre servidor, cliente e service worker.
//
// Benefício:
// Navegações rápidas estilo SPA.
// Mantém HTML atualizado sem recarregar tudo.
//
// =======================
// SEO
// =======================
//
// SSR e static rendering facilitam indexação,
// pois entregam HTML completo aos crawlers.
// CSR pode funcionar, mas exige mais cuidado e testes.
//
// =======================
// CONCLUSÃO
// =======================
//
// Não existe solução única.
// Static rendering e SSR geralmente oferecem melhor FCP e INP.
// CSR exige disciplina forte em JavaScript.
// Abordagens híbridas devem ser usadas com cautela.
// O ideal é medir gargalos reais e escolher a menor quantidade
// de JavaScript possível para entregar uma experiência interativa.

//------------------------------------

// PONTO DE VISTA DO ChatGPT:

/*
O que você conclui? Você usaria qual para "seu site"?

Boa pergunta — dá pra responder de forma bem direta e honesta 🙂

Minha conclusão geral
	Não existe “a melhor renderização”, existe a melhor renderização para o tipo de site e para o nível de interatividade que você precisa.
	Mas… se eu tivesse que resumir o artigo em uma frase:
		Quanto menos JavaScript você precisar para entregar valor real ao usuário, melhor será a experiência.

O que EU usaria para “meu site”:

1️⃣ Se fosse um site de conteúdo (blog, docs, landing pages, estudos)
	👉 Static Rendering (com HTML + CSS e JS mínimo)
	Por quê:
		- TTFB extremamente baixo
		- FCP quase imediato
		- INP excelente
		- Simples de escalar
		- Funciona bem até sem JavaScript
		- Menos bugs “página parece pronta mas não responde”
	📌 Exemplo:
		- Blog técnico
		- Documentação
		- Portfólio
		- Site institucional
	💭 Honestamente:
		Para 80% dos sites da web, static rendering é a escolha mais inteligente.

2️⃣ Se fosse um site dinâmico, mas com pouca personalização
	👉 Server-Side Rendering + HTML cache
	Por quê:
		- Conteúdo vem pronto
		- Usuário vê algo rápido
		- Dá para usar dados “quase em tempo real”
		- Melhor SEO sem gambiarras
	📌 Exemplo:
		- E-commerce
		- Notícias
		- Marketplaces
		- Dashboards públicos
	⚠️ Eu tomaria cuidado para:
		- Não exagerar no JS
		- Evitar rehydration pesada
		- Usar streaming quando possível

3️⃣ Se fosse uma aplicação muito interativa (tipo SaaS)
	👉 Híbrido bem controlado
		- SSR ou Static para a shell inicial
		- CSR apenas onde faz sentido
		- Code splitting agressivo
		- Progressive hydration
	📌 Exemplo:
		- Figma-like
		- Notion-like
		- Sistemas internos complexos
	💭 Aqui o erro comum é:
		“Tudo em SPA porque é mais fácil pro dev”
		… e o usuário paga a conta em performance.

O que EU evitaria como padrão:
	❌ Rehydration completa por default
		Porque:
			- Página parece pronta, mas não responde
			- Dobra trabalho (servidor + cliente)
			- INP ruim
			- Complexidade alta
			- Experiência frustrante, especialmente no mobile
		Só usaria se:
			- Houvesse ganho claro
			- Com progressive ou partial hydration

Minha regra mental (bem prática):
	Quando penso em renderização, eu sigo esta ordem:
		1. Consigo entregar isso só com HTML?
		2. Se não, consigo gerar esse HTML no build?
		3. Se não, preciso mesmo gerar no request?
		4. Esse JS é realmente necessário para o usuário agora?
		5. Se o JS não entrega valor imediato, ele não deveria bloquear interatividade.

Resumo final (bem direto):
	Se fosse “meu site” hoje:
		🟢 Conteúdo / estudos / blog: Static Rendering
		🟡 Produto com dados: SSR + cache
		🔴 App pesado: híbrido, com JS muito bem controlado

CSR não?
	Boa provocação — curta e direta 😄
	Resposta curta: 👉 não como padrão.
	Resposta honesta: CSR puro, hoje, eu evitaria
	Não é que CSR seja “errado”, mas ele é a pior escolha como default na maioria dos casos.

Por que NÃO CSR (por padrão):
	- FCP mais lento (tela branca esperando JS)
	- Muito JS bloqueando a main thread
	- INP tende a piorar conforme o app cresce
	- Mobile sofre bastante
	- SEO dá mais trabalho
	- Usuário vê “algo”, mas não consegue interagir rápido

Em outras palavras:
	CSR transfere custo do servidor para o usuário.
	E o usuário geralmente tem o hardware e a rede piores.

Quando EU usaria CSR, sim:
	CSR faz sentido quando interatividade é o produto:
	✅ Bons casos para CSR:
		- Dashboards internos
		- Sistemas logados (admin, ERP, CRM)
		- Ferramentas tipo Figma, Notion, Slack
		- Apps onde SEO não importa
		- Usuário volta com frequência (cache + shell)
	Nesses casos:
		- O custo inicial se dilui
		- SPA + cache funciona bem
		- UX contínua importa mais que FCP
	Mesmo assim, eu ainda faria:
		- Code splitting
		- Lazy loading
		- App Shell cache
		- Evitar JS no primeiro paint

Comparação rápida (realista):

	Critério	    CSR	SSR	Static
	FCP	            ❌	✅	✅✅
	INP	            ❌	🟡	 ✅
	SEO	            ❌	✅	✅
	Escala	        🟡	 ❌	 ✅✅
	Simplicidade	✅	🟡	 ✅
	Mobile	        ❌	🟡	 ✅

Minha conclusão final:
	Se você me obrigasse a escolher apenas uma estratégia hoje:
		🥇 Static
		🥈 SSR
		🥉 CSR
	CSR não é vilão, mas:
		- não é a melhor primeira escolha
		- funciona melhor como parte da solução, não como tudo
*/
