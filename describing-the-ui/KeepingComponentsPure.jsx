// Mutação em React é quando uma função pega uma variável fora do escopo dela e muda ela. Isso torna a função impura.

//---------------------

// Keeping Components Pure

// Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

// Purity: Components as formulas

// REACT ASSUMES THAT EVERY COMPONENT YOU WRITE IS A PURE FUNCTION. This means that React components you write must always return the same JSX given the same inputs:

    function Recipe({ drinkers }) {
        return (
            <ol>
                <li>Boil {drinkers} cups of water.</li>
                <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
                <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
            </ol>
        );
    }

    export default function App() {
        return (
            <section>
                <h1>Spiced Chai Recipe</h1>
                <h2>For two</h2>
                <Recipe drinkers={2} />
                <h2>For a gathering</h2>
                <Recipe drinkers={4} />
            </section>
        );
    }

// When you pass drinkers={2} to Recipe, it will return JSX containing 2 cups of water. Always.

// If you pass drinkers={4}, it will return JSX containing 4 cups of water. Always.

// Side Effects: (un)intended consequences 

// React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

// Here is a component that breaks this rule:

    let guest = 0;

    function Cup() {
        // Bad: changing a preexisting variable!
        guest = guest + 1;
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    export default function TeaSet() {
        return (
            <>
                <Cup />
                <Cup />
                <Cup />
            </>
        );
    }

// This component is reading and writing a guest variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what’s more, if other components read guest, they will produce different JSX, too, depending on when they were rendered! That’s not predictable.

// Going back to our formula y = 2x, now even if x = 2, we cannot trust that y = 4. Our tests could fail, our users would be baffled, planes would fall out of the sky—you can see how this would lead to confusing bugs!

// You can fix this component by passing guest as a prop instead:

    function Cup({ guest }) {
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    export default function TeaSet() {
        return (
            <>
                <Cup guest={1} />
                <Cup guest={2} />
                <Cup guest={3} />
            </>
        );
    }

// Now your component is pure, as the JSX it returns only depends on the guest prop.

// In general, you should not expect your components to be rendered in any particular order. It doesn’t matter if you call y = 2x before or after y = 5x: both formulas will resolve independently of each other. In the same way, each component should only “think for itself”, and not attempt to coordinate with or depend upon others during rendering. Rendering is like a school exam: each component should calculate JSX on their own!


// Detecting impure calculations with StrictMode 

// Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.

// When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.

// React offers a “Strict Mode” in which it calls each component’s function twice during development. BY CALLING THE COMPONENT FUNCTIONS TWICE, STRICT MODE HELPS FIND COMPONENTS THAT BREAK THESE RULES.

// Notice how the original example displayed “Guest #2”, “Guest #4”, and “Guest #6” instead of “Guest #1”, “Guest #2”, and “Guest #3”. The original function was impure, so calling it twice broke it. But the fixed pure version works even if the function is called twice every time. Pure functions only calculate, so calling them twice won’t change anything—just like calling double(2) twice doesn’t change what’s returned, and solving y = 2x twice doesn’t change what y is. Same inputs, same outputs. Always.

// Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.

// Local mutation: Your component’s little secret 

// No exemplo acima, o problema era que o componente alterou uma variável pré-existente durante a renderização. Isso é frequentemente chamado de “mutação” para soar um pouco mais assustador. Funções puras não mutam variáveis fora do escopo da função ou objetos que foram criados antes da chamada—isso as torna impuras!

// Ou seja, "mutação" em React é quando uma função pega uma variável fora do escopo dela e muda ela. Isso torna a função impura.

// No entanto, é perfeitamente normal alterar variáveis e objetos que você acabou de criar durante a renderização. Neste exemplo, você cria um array [], o atribui a uma variável cups, e então faz push de uma dúzia de xícaras nele:

    function Cup({ guest }) {
        return <h2>Xícara de chá para convidado #{guest}</h2>;
    }

    export default function TeaGathering() {
        const cups = [];
        for (let i = 1; i <= 12; i++) {
            cups.push(<Cup key={i} guest={i} />);
        }
        return cups;
    }


// Se a variável cups ou o array [] fossem criados fora da função TeaGathering, isso seria um grande problema! Você estaria alterando um objeto pré-existente empurrando itens para esse array.

// No entanto, está tudo bem porque você os criou durante a mesma renderização, dentro de TeaGathering. Nenhum código fora de TeaGathering jamais saberá que isso aconteceu. Isso é chamado de “mutação local”—é como o pequeno segredo do seu componente.

// Ou seja, se for "mutação local"("local mutation"), não tem problema.

// Where you can cause side effects 

// While functional programming relies heavily on purity, at some point, somewhere, something has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called side effects. They’re things that happen “on the side”, not during rendering.

// In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

// If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.

// When possible, try to express your logic with rendering alone. You’ll be surprised how far this can take you!

// Side effects geralmente pertencem a event handlers
// Event handlers são funções em que você performa uma ação (exemplo, clicar em um botão).
// Apesar de event handlers serem definidos dentro do componente, eles não rodam durante a renderização. Então eles não precisam ser puros.

// Why does React care about purity?

    // Writing pure functions takes some habit and discipline. But it also unlocks marvelous opportunities:

    // Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.

        // A lógica fica dentro do backend e só envia a parte do return. Com isso, se acessa BD e outros dados rapidamente e depois envia o componente montado.

            // Não só HTML, mas quase isso.

                // Depende do tipo de componente:

                // Server Component

                    // O servidor executa tudo.
                    // O cliente recebe HTML + um payload pequeno do React para montar a árvore.
                    // Quase nenhum JavaScript é enviado.

                // Client Component ("use client")

                    // O navegador recebe HTML + JavaScript do componente.
                    // O React precisa rodar no cliente para hidratar e permitir interação.

                // Por isso fica mais leve:

                    // Menos JavaScript no navegador
                    // Menos código para baixar
                    // Renderização inicial mais rápida

    // You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
    // If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.

    // Every new React feature we’re building takes advantage of purity. From data fetching to animations to performance, keeping components pure unlocks the power of the React paradigm.

//---------------

    // Recap

    // A component must be pure, meaning:

        // It minds its own business. It should not change any objects or variables that existed before rendering.

        // SAME INPUTS, SAME OUTPUT. Given the same inputs, a component should always return the same JSX.

        // Rendering can happen at any time, so components should not depend on each others’ rendering sequence.

        // You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.

        // Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.

        // Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.


// Num dos exemplos para prática havia tentativa de modificação do DOM. 

export default function Clock({ time }) {
  const hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    document.getElementById('time').className = 'night';
  } else {
    document.getElementById('time').className = 'day';
  }
  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}

// Nota:
    // SE FOSSE JAVASCRIPT PURO (SEM REACT) FUNCIONARIA

// Mas a solução era retornar um JSX

export default function Clock({ time }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}


// No primeiro código você faz isso:

document.getElementById('time').className = 'night';

    // Isso é manipulação direta do DOM.

    // Ou seja, você está usando a API do navegador para alterar um elemento que já existe na página.

// O problema é que no React:

    // Quem controla o DOM é o React

    // O componente deve apenas descrever como o DOM deveria ser

// Quando você usa document.getElementById, você está mexendo por fora do controle do React.

// Isso cria vários problemas:

// ⚠️ Possíveis problemas:

    // O elemento pode nem existir ainda quando o código roda

    // O React pode sobrescrever essa alteração depois

    // O componente deixa de ser previsível

    // Quebra o conceito de pure render

//----

// O React quer que você retorne a descrição da UI.

// Em vez de alterar o DOM manualmente, você define a classe no JSX:

    let className;

    if (hours >= 0 && hours <= 6) {
    className = 'night';
    } else {
    className = 'day';
    }

// Depois:

    // <h1 className={className}>

// Agora o fluxo é:

    // props (time)
    //      ↓
    // cálculo (hours)
    //      ↓
    // JSX
    //      ↓
    // React atualiza o DOM

// Quem faz a modificação real no DOM é o React.

//--------------

// Em React, durante renderização:

// ❌ Não faça:

    // document.getElementById

    // document.querySelector

    // element.className = ...

    // element.style = ...

// ✔️ Faça:

    // calcular valores

    // retornar JSX

//-------------

// Um jeito simples de visualizar

// Imagine que React funciona como uma função matemática.

// Entrada:

    // time = 02:00

// Saída:

    // <h1 class="night">02:00:00</h1>

// Entrada:

    // time = 14:00

// Saída:

    // <h1 class="day">14:00:00</h1>

// O COMPONENTE SÓ TRANSFORMA DADOS EM INTERFACE

//----

// Quando manipular DOM é permitido

// Existe momento para isso, mas não durante render.

// Usa-se:

    // useEffect

    // useRef

//-----------------------------

// It is useful to remember which operations on arrays mutate them, and which don’t. For example, push, pop, reverse, and sort will mutate the original array, but slice, filter, and map will create a new one.

// Ou seja, se for tentar modificar uma prop que é array não use push. Faça uma slice (cópia) e use push.

// Para entender melhor, veja o exemplo 3 no site.