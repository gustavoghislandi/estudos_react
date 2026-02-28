// Detecting impure calculations with StrictMode 

// Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.

// When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.

// React offers a “Strict Mode” in which it calls each component’s function twice during development. BY CALLING THE COMPONENT FUNCTIONS TWICE, STRICT MODE HELPS FIND COMPONENTS THAT BREAK THESE RULES.

// Notice how the original example displayed “Guest #2”, “Guest #4”, and “Guest #6” instead of “Guest #1”, “Guest #2”, and “Guest #3”. The original function was impure, so calling it twice broke it. But the fixed pure version works even if the function is called twice every time. Pure functions only calculate, so calling them twice won’t change anything—just like calling double(2) twice doesn’t change what’s returned, and solving y = 2x twice doesn’t change what y is. Same inputs, same outputs. Always.

// Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.

// Ou seja, props, state e context não devem ser modificadas enquanto ocorre a renderização.
// O Strict Mode roda os componentes duas vezes, de modo que se algo estiver fora desse padrão poderá ser percebido.
// O Stric Mode não tem efeito em produção, então não vai deixar nada mais lento para os usuários.



//-----------

// Render deve ser:

    // Puro
    // Sem efeitos colaterais
    // Apenas cálculo de UI

// Mudanças devem acontecer:

    // Em event handlers
    // Em useEffect
    // Ou em outras fases do ciclo (nunca no render)

// 🧠 Por que isso é tão importante?

// Porque o React pode:

    // Renderizar duas vezes (Strict Mode)
    // Interromper um render no meio
    // Reexecutar render sem commit

// Se você modificar algo durante render, o comportamento fica imprevisível.

// ---------------------

// O problema é:

// ❌ Modificar algo que sobrevive entre renders.

// Por exemplo:

// ❌ Variável fora do componente

    let contador = 0;

    function MeuComponente() {
        contador++; // ❌ errado
        return <div>{contador}</div>;
    }

    // Errado porque contador é compartilhado entre renders.

// ❌ Mutar props

    function MeuComponente({ user }) {
        user.name = "João"; // ❌ errado
    return <div>{user.name}</div>;
}

    // Props são somente leitura.

// ❌ Mutar state diretamente

    const [lista, setLista] = useState([]); 

    lista.push("item"); // ❌ errado

    // State deve ser tratado como imutável.

// 🟢 Então quando pode mudar algo?

// Você pode mudar estado:

// 1️⃣ Dentro de eventos

    <button onClick={() => setCount(c => c + 1)} />

    // Isso é o mais comum.

// 2️⃣ Dentro de effects (useEffect)

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // ATENÇÃO: Effects acontecem depois do render, então podem causar efeitos colaterais.