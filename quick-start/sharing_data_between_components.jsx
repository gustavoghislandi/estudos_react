// Sharing data between components

// In the previous example, each MyButton had its own independent count, and when each button was clicked, only the count for the button clicked changed:
    
        // Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. Both MyButton components contain a count with value zero.

    // Initially, each MyButton’s count state is 0

        // The same diagram as the previous, with the count of the first child MyButton component highlighted indicating a click with the count value incremented to one. The second MyButton component still contains value zero.

    // The first MyButton updates its count to 1

// However, often you’ll need components to share data and always update together.

// To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.

// Como já visto antes, para fazer os componentes compartilharem estado, tem que mover os estado para componente(s) "acima".

// In this example, it is MyApp:

        // Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. MyApp contains a count value of zero which is passed down to both of the MyButton components, which also show value zero.

    // Initially, MyApp’s count state is 0 and is passed down to both children

        // The same diagram as the previous, with the count of the parent MyApp component highlighted indicating a click with the value incremented to one. The flow to both of the children MyButton components is also highlighted, and the count value in each child is set to one indicating the value was passed down.

    // On click, MyApp updates its count state to 1 and passes it down to both children

// Now when you click either button, the count in MyApp will change, which will change both of the counts in MyButton. Here’s how you can express this in code.

// First, move the state up from MyButton into MyApp:

    export default function MyApp() {
        const [count, setCount] = useState(0); // Subindo pra cá.

        function handleClick() {
            setCount(count + 1);
        }

        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        );
    }

    function MyButton() {
        // ... we're moving code from here ...
    }

// Then, pass the state down from MyApp to each MyButton, together with the shared click handler. You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>:

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} /> {/*Passando as props 'count' e 'onClick', que recebem os valores 'count' e 'handleClick', respectivamente */}
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// The information you pass down like this is called props. 
// Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.

//------- Abertura para aprofundar em "props":

// Ou seja, "props" são passadas de cima para baixo (SOMENTE DE PAI PARA FILHO):

// Se o neto precisa da prop, o filho tem que repassar:

    function Avo({ valor }) {
        return <Pai valor={valor} />;
    }

    function Pai({ valor }) {
        return <Neto valor={valor} />;
    }

    function Neto({ valor }) {
        return <div>{valor}</div>;
    }

// Exemplo para maior clareza na passagem dos valores:

    function Avo({ valorDoAvo }) {
        return <Pai valorPropPai={valorDoAvo} />;
    }

    function Pai({ valorPropPai }) {
        return <Neto valorPropNeto={valorPropPai} />;
    }

    function Neto({ valorPropNeto }) {
        return <div>{valorPropNeto}</div>; // valorPropNeto aponta indiretamente para valorDoAvo
    }


// Pergunta: Em termos de ponteiro ou referência, aponta direto pra valor do avô, ou pai que aponta para avô?

// Resposta curta (e precisa):

    // 👉 Aponta para o valor, não “para o pai” nem “para o avô”.

// Agora, um pouquinho mais técnico:

    // Em JavaScript, props não são ponteiros entre variáveis
    // Cada componente recebe um valor

// Se esse valor for:

    // primitivo (number, string, boolean) → é copiado

    // objeto / array / função → é passada a referência ao objeto

// No seu exemplo típico:

    // const valorDoAvo = 10;

        // valorPropPai recebe 10

        // valorPropNeto recebe 10

    // Não existe cadeia de ponteiros tipo:

        // Neto → Pai → Avô


    // Existe só:

        // Neto → valor (10)


    // Se fosse um objeto:

        // const valorDoAvo = { total: 10 };


        // Aí sim:

        // Avô, Pai e Neto têm referências para o MESMO objeto
        // Mas ainda assim não é referência a outra variável, e sim ao objeto em memória

// 📌 Frase final pra guardar:

    // Props carregam valores; nomes de variáveis não fazem parte da ligação.

// -------

//  Pergunta: Se fosse um objeto, cada um apontaria pro mesmo objeto, como se fossem 3 variáveis (3 setas) apontando pro mesmo valor(objeto). Se for primitivo, cada primitivo é diferente?

// Quase perfeito — só um ajuste fino 👌

// ✔️ Objeto (ou array, função)

    // Sim.

        // const obj = { x: 1 };

    // Avô, Pai e Neto recebem a mesma referência

    // É como 3 setas apontando para o mesmo objeto na memória

        // Avo ─┐
        // Pai ─┼──> { x: 1 }
        // Neto ┘

// ⚠️ Primitivo (number, string, boolean, etc.)

// Aqui é o detalhe:

    // 👉 Não dá pra dizer que cada um é “diferente”, porque primitivos não têm identidade como objetos.

// O correto é:

    // O valor é copiado
    // Não existe referência compartilhada
    // Não faz sentido falar em “apontar pro mesmo lugar”

    // const a = 10;
    // const b = a;

        // a é 10
        // b é 10

        // Não há ligação entre eles

        // Se a mudar depois, b não muda.

//------- Fim da abertura para aprofundar em "props"

// Finally, change MyButton to read the props you have passed from its parent component:

    function MyButton({ count, onClick }) { // props passadas (com desestruturação)
        return (
            <button onClick={onClick}> {/* Quando o evento do botão 'onClick' acontecer, vai chamar a prop 'onClick', que aponta pra handleClick de MyApp */}
                Clicked {count} times {/* Usa a prop 'count', que aponta para o state 'count' de MyApp */}
            </button>
        );
    }

// When you click the button, the onClick handler fires. Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1), incrementing the count state variable. The new count value is passed as a prop to each button, so they all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.

// By now, you know the basics of how to write React code!