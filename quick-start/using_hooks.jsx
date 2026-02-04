// Functions starting with 'use' are called Hooks.

// 'useState' is a built-in Hook provided by React. You can find other built-in Hooks in the API reference [https://react.dev/reference/react]. 

// You can also write your own Hooks by combining the existing ones.

// Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

//---------------

// Exemplo (do ChatGPT):

    function Item({ nome }) { // Componente filho
        const [ativo, setAtivo] = useState(false); // O useState dentro do filho permite cada Item ter o seu próprio state

        return (
            <div onClick={() => setAtivo(!ativo)}>
                {nome} - {ativo ? "Ativo" : "Inativo"}
            </div>
        );
    }

    function Lista({ itens }) { // Componente pai
        return (
            <div>
                {itens.map(item => (
                    <Item key={item.id} nome={item.nome} />
                ))}
            </div>
        );
    }

// Notas rápidas:

    // map → cria várias instâncias
    // Hook → fica no topo do "molde" do componente
    // State → pertence à instância

// Observação importante ⚠️

// Isso só vale quando:

// o componente continua sendo a mesma instância
// identificado pela key correta

// Se a key muda, o React:

    // destrói a instância antiga
    // cria uma nova
    // e o state zera