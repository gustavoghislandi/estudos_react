// If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.

// ----------------

    // Em frameworks com file-based routing como Next.js, cada arquivo dentro da pasta de rotas (app/ ou pages/) que faz export default vira automaticamente uma página (rota). Diferente do React puro, onde há um único componente root, no Next.js cada página tem seu próprio componente root. Componentes pequenos criados em outras pastas (ex: components/) e importados em uma página não viram rotas, apenas o arquivo dentro da estrutura de rotas vira página.

    // Tá, mas... isso é igual usar o React Router

    // Quase — mas não é igual.

    // Com Next.js, as rotas são criadas automaticamente pelos arquivos (file-based routing).
    
        // No Next.js só vira rota o arquivo que está na pasta de rotas (app/ ou pages/) e que exporta o default.

        // Exemplo:

            // app/page.tsx        → rota "/"
            // app/about/page.tsx  → rota "/about"


        // Se você criar:

            // components/Button.tsx
            // components/Card.tsx


        // E importar tudo dentro de app/page.tsx…

            // 👉 Esses 100 componentes não viram páginas.
            // São só componentes reutilizáveis.

            // Só vira rota o que está na estrutura de rotas.

    // Com React Router, você define as rotas manualmente no código:

        // <Route path="/about" element={<About />} />


    // Resumo:
        // Next.js → rota baseada em arquivos.
        // React Router → rota declarada no código.

// ----------------

// Você pode encontrar arquivos que não possuem a extensão de arquivo .js da seguinte forma:

    // import Gallery from './Gallery';

// Tanto './Gallery.js' quanto './Gallery' funcionarão com o React, embora o primeiro esteja mais próximo de como os Módulos ES nativos funcionam.

// ----------------

//  Um arquivo não pode ter mais de uma exportação padrão, mas pode ter quantas exportações nomeadas você desejar.

// A forma como você exporta seu componente determina como você deve importá-lo. Você receberá um erro se tentar importar uma exportação padrão da mesma forma que faria com uma exportação nomeada! Este gráfico pode ajudá-lo a acompanhar:

// Sintase	        Declaração de exportação	                Declaração de importação

// Padrão	        export default function Button() {}	        import Button from './Button.js';
// Nomeada	        export function Button() {}	                import { Button } from './Button.js';

// Quando você escreve uma importação padrão, você pode colocar o nome que quiser depois de import. 

    // Por exemplo, você poderia escrever import Banana from './Button.js' e ainda forneceria a mesma exportação padrão. 

// Por outro lado, com importações nomeadas, o nome deve corresponder em ambos os lados. É por isso que eles são chamados de importações nomeadas!

// Os usuários costumam usar exportações padrão se o arquivo exportar apenas um componente e usar exportações nomeadas se exportar vários componentes e valores.

// Independentemente de qual estilo de código você preferir, sempre forneça nomes significativos para as funções do componente e os arquivos que os contêm. Componentes sem nomes, como export default () => {}, são desencorajados porque dificultam a depuração.

// Lembrando que nas nomeadas você pode usar a sintaxe 'as' para renomear. Exemplo:

    // import { Button as Banana } from './Button.js'