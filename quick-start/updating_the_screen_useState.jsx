// Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

// First, import useState from React:

import { useState } from 'react';   

// Now you can declare a state variable inside your component:

    function MyButton() {
        const [count, setCount] = useState(0);
    // ...
    }

// You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].

// The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:

            function MyButton() {
                const [count, setCount] = useState(0);

                function handleClick() {
                    setCount(count + 1);
                }

                return (
                    <button onClick={handleClick}>
                        Clicked {count} times
                    </button>
                );
            }

// React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

// If you render the same component multiple times, each will get its own state. Click each button separately:

    import { useState } from 'react';

    export default function MyApp() {
        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        );
    }

    function MyButton() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }

// Notice how each button “remembers” its own count state and doesn’t affect other buttons.

// -----ATENÇÃO-----:

    // O que faz o button ser contado em separado é porque a variável está dentro de MyButton e não em My App.

    // Porque em React, o estado (useState) pertence ao componente onde ele é declarado.
    // Então, cada vez que o React renderiza <MyButton />, ele cria uma instância separada desse componente, com seu próprio estado.

// E se o count estivesse em MyApp?

// Aí mudaria tudo.

    export default function MyApp() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <MyButton count={count} setCount={setCount} />
                <MyButton count={count} setCount={setCount} />
            </div>
        );
    }

// Nesse caso:

    // O estado fica no pai
    // Os dois botões usam o mesmo count
    // Clicar em um atualiza os dois

// Ou seja:

    // Estado no componente → estado isolado
    // Estado no pai → estado compartilhado

// Se quiser:

    // Cada botão independente → estado dentro do botão
    // Vários componentes sincronizados → estado sobe pro pai (“lifting state up”)


// Exemplo com count compartilhado entre os dois:

// Aqui o estado sobe para o pai (MyApp), e os botões só usam o que recebem via props.

    import { useState } from 'react';

    export default function MyApp() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <div>
                <h1>Contador compartilhado</h1>
                <MyButton count={count} onClick={handleClick} />
                <MyButton count={count} onClick={handleClick} />
            </div>
        );
    }

    function MyButton({ count, onClick }) {
        return (
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        );
    }

// O que acontece aqui?

    // Só existe um count
    // Ele mora em MyApp

// Ambos os botões:

    // mostram o mesmo valor
    // chamam a mesma função

// Clicar em qualquer um → os dois atualizam

//----

// 1️⃣ De onde vêm count e onClick nos parâmetros da função MyButton()?

// Eles não surgem do nada. Vêm daqui, no componente pai:

    <MyButton count={count} onClick={handleClick} />


// Isso significa literalmente:

    count={count}

    // → “Passe o valor da variável count do MyApp para o MyButton”

    onClick={handleClick}

    // → “Passe a função handleClick do MyApp para o MyButton”

    // Tudo isso vira props.

// 2️⃣ O que é isto aqui então?

    function MyButton({ count, onClick }) {}

    // Isso é desestruturação de props.

    // É exatamente a mesma coisa que escrever:

        function MyButton(props) {
            const count = props.count;
            const onClick = props.onClick;
        }

/*
        // Ou seja:

            // count ← props.count
            // onClick ← props.onClick

            // Nada mágico. Só JavaScript.



// 3️⃣ “Mas entra onClick e sai onClick… parece estranho”

// Aqui tem dois onClick, mas eles são coisas diferentes:

// 🔹 1º onClick (prop do componente):

        <MyButton onClick={handleClick} />

    // 👉 Isso é um nome de prop inventado por você.
    // Poderia se chamar quandoClicar, acao, banana — React não liga.

// 🔹 2º onClick (atributo do botão HTML):

        <button onClick={onClick}>

    // 👉 Esse já é especial: é o evento onClick do <button>.

// 🔗 O que acontece na prática?

    <button onClick={onClick}>
                     ↑
                     |
            função que veio do pai


// Então o fluxo é:

    // Clique no botão
    // <button> dispara onClick
    // React chama a função que está ali
    // Essa função é handleClick (do MyApp)
    // handleClick faz setCount(...)
    // MyApp re-renderiza
    // Os dois botões atualizam

*/ 