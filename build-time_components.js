// Em React, componentes de build-time são aqueles que são renderizados durante a construção da aplicação, não no navegador.
// Ou seja, o HTML final é gerado antes da execução, geralmente em frameworks como Next.js usando Static Generation (getStaticProps).

// Um exemplo simples usando Next.js:

    // pages/index.js
    export async function getStaticProps() {
        return {
            props: {
                message: "Oi! Eu fui gerado em build-time 😊"
            }
        };
    }

    export default function Home({ message }) {
        return <h1>{message}</h1>;
    }


// ✅ Aqui, o <h1> é um componente de build-time, porque o conteúdo "Oi! Eu fui gerado em build-time 😊" já é colocado no HTML quando a aplicação é construída, e não quando o usuário acessa.

// Vamos visualizar a  diferença visual entre build-time e client-side render:

// 1️⃣ Build-Time (Static Generation)

    // O HTML já chega pronto para o navegador. Exemplo:

        // <!-- HTML que o navegador recebe -->
        <h1>Oi! Eu fui gerado em build-time 😊</h1>


    // Quando acontece: Durante a construção (npm run build)

    // Performance: Muito rápida, porque o navegador só precisa exibir

    // Exemplo: getStaticProps em Next.js

// 2️⃣ Client-Side (Runtime)

    // O HTML é gerado pelo JavaScript no navegador:

        function Home() {
            const [message, setMessage] = React.useState("");

            React.useEffect(() => {
                setMessage("Oi! Eu fui gerado no client-side 😎");
            }, []);

            return <h1>{message}</h1>;
        }


    // Quando acontece: Quando o usuário abre a página

    // Performance: Mais lenta, depende do JS carregar e rodar

    // Exemplo: React puro ou useEffect no Next.js

// 💡 Resumo visual mental:

    // Build-Time: [HTML pronto] -> navegador exibe
    // Client-Side: [JS roda] -> HTML é gerado -> navegador exibe


//-------------------------------------------------------------
// É muito estranho ter que escrever isto:

    // pages/index.js
    export async function getStaticProps() {
        return {
            props: {
                message: "Oi! Eu fui gerado em build-time 😊"
            }
        };
    }

    export default function Home({ message }) {
        return <h1>{message}</h1>;
    }

// Ao invés disto:

    <h1>Oi! Eu fui gerado em build-time 😊</h1>

// Sim, eu entendo perfeitamente — e essa sensação é super comum quando você começa a trabalhar com frameworks como Next.js. 😅

// O que você está sentindo é basicamente: “por que complicar algo que poderia ser só HTML?”

// A diferença está no propósito:

{/* <h1>Oi!</h1> → HTML puro, estático e fixo. Simples, rápido, perfeito para conteúdo que nunca muda. */}

// getStaticProps + JSX → HTML que PODE DEPENDER DE DADOS EXTERNOS, mesmo que seja gerado em build-time.

// Ex.: dados de um CMS, lista de produtos, posts do blog.

// Mesmo que você queira só mostrar um texto agora, a estrutura do React permite crescer depois sem refatorar.

// 💡 Então a “complexidade” é o preço da flexibilidade e reutilização de componentes, não de necessidade imediata.

// Ou seja, você pode usar APIs no servidor para buscar os dados e criar o HTML com esses dados... esta é sacada, CONTEÚDO DINÂMICO.

// Ou seja, você não está escrevendo HTML “manual” — você está gerando HTML estático dinamicamente, mas de forma pré-renderizada.

// Exemplo rápido pra fixar:

    // pages/index.js
    export async function getStaticProps() {
        const res = await fetch("https://api.example.com/posts");
        const posts = await res.json();

        return {
            props: { posts }
        };
    }

    export default function Home({ posts }) {
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        );
    }

// Essa é a sacada do build-time render: você consegue ter conteúdo dinâmico (vindo de APIs, banco de dados, CMS, etc.) mas entregue ao navegador como HTML estático pronto.

// Então você ganha:

    // Performance: navegador não precisa esperar JS rodar pra ver o conteúdo.
    // SEO melhor: motores de busca veem o HTML completo.
    // Flexibilidade: se amanhã quiser adicionar interatividade, já está no React.

// É como ter o melhor dos dois mundos: dinâmico no servidor, estático no cliente.

//------------------------------------
// O ganho de tempo depende bastante do contexto, mas vamos quebrar passo a passo:

// 1️⃣ Client-side render (React puro)

    // O navegador baixa JS + HTML mínimo.
    // React precisa executar JS, montar o DOM e preencher os dados.
    // Dependendo da página, isso pode levar 200–800ms só pra renderizar conteúdo visível, mais se a rede estiver lenta.

// 2️⃣ Build-time render (Next.js Static Generation)

    // O HTML já vem pronto do servidor.
    // O navegador só exibe o conteúdo, sem esperar JS executar.
    // Isso geralmente reduz o tempo de First Contentful Paint (FCP) em 100–500ms ou mais, especialmente em páginas grandes ou APIs pesadas.

// 💡 Exemplo prático:

    // Página de blog com 50 posts

        // Client-side: navegador espera ~400ms pra ver os posts

        // Build-time: posts já estão no HTML → FCP praticamente imediato (~50ms–100ms)

// ⚠️ Observação: o ganho real depende de:

    // Tamanho da página
    // Número de chamadas de API
    // Velocidade do servidor e da rede