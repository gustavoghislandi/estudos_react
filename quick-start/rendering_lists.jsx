// You will rely on JavaScript features like for loop and the array map() function to render lists of components. [map é mais recomendado, em geral]

// For example, let’s say you have an array of products:

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

// Inside your component, use the map() function to transform an array of products into an array of <li> items:

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );

// Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

//-----------------------

// A key serve para o React identificar cada item da lista entre os irmãos.
// Ela permite que o React saiba qual item mudou, entrou ou saiu, evitando re-render desnecessário e bugs de estado.

// Para conteúdos idênticos, ainda precisa de key — o que importa não é o texto, é a identidade do item.
// Se dois posts são “iguais” no conteúdo, mas são itens diferentes, as keys devem ser diferentes.

// Regra prática:

    // Use id do banco ✔️
    // Evite index do array ❌ (salvo lista fixa, que nunca muda)

//----------------

// E se não usar key, que que acontece?

// Nada “explode”, mas dá problema sutil 😅

    // Sem key (ou com key ruim):

        // React não sabe qual item é qual
        // Pode reaproveitar o componente errado
        // Estado, foco, animações e inputs podem ir parar no item errado
        // Performance piora

// Exemplo clássico:

    // remove um item do meio da lista → o React acha que só mudou o conteúdo, não os itens → bagunça tudo.
    // Resumo: funciona… até não funcionar. Por isso key é obrigatória na prática.