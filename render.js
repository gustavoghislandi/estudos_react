// Rendering em React (JavaScript library) é o processo de gerar a interface (UI) a partir do estado/props do componente.

// Ou seja:

    // O React executa a função do componente
    // Essa função retorna JSX
    // O React usa isso para desenhar/atualizar a tela

    // Isso é o render.

// Exemplo simples:

    function Counter({ count }) {
        return <h1>{count}</h1>;
    }

    // Aqui o render é só transformar count em UI.

// Render deve ser puro → só calcular a UI.

    // Side effects (mudar dados, API, animação, etc.) não devem acontecer durante o render.

    // Eles devem ir em:

    // event handlers (onClick, etc.)

    // ou useEffect se não tiver outra opção.

// 📌 Resumindo em uma frase:
// Rendering = calcular como a interface deve parecer.
// Side effects = coisas que realmente mudam algo fora desse cálculo.

//--------------------------------------------------------------------------------

// O render é no retorno do componente, então?
// E o event handler é colocado dentro do retorno, mas é executado fora do render, é isso?

// Sim.

// Render em React (JavaScript library) é basicamente executar o componente e produzir o JSX do return.

    function App() {
        return <button>Click</button>; // isso faz parte do render
    }

// Event handler:

    // Você define no JSX (onClick={...})

    // Mas ele só executa depois, quando o usuário interage.

    <button onClick={handleClick}>Click</button>

//---------------------

// Render: cria o botão

// Event handler: roda quando clicar, não durante o render.