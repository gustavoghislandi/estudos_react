// Step 1: Break the UI into a component hierarchy 

    // Separe o mockup visual (parte de design) em componentes.
    // Os componentes que estiverem dentro de outros componentes serão filhos destes.

// Step 2: Build a static version in React

    // The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet! 
    // It’s often easier to build the static version first and add interactivity later. 
    // Building a static version requires a lot of typing and no thinking, 
    // but adding interactivity requires a lot of thinking and not a lot of typing.

    // To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. 
    // Props are a way of passing data from parent to child. 
    // (If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.)

        // Ou seja, não use state, só use props. State é somente para interatividade.

    // Em projetos menores é mais fácil fazer top-down; em maiores, bottom-up.

    // After building your components, you’ll have a library of reusable components that render your data model. 
    // Because this is a static app, the components will only return JSX. 
    // The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. 
    // This is called 'one-way data flow' because the data flows down from the top-level component to the ones at the bottom of the tree.

        // Ou seja, o componente mais alto será quem receberá os dados que virão da API como prop repassando-o aos demais, de cima para baixo.

// Step 3: Find the minimal but complete representation of UI state 

// To make the UI interactive, you need to let users change your underlying data model. You will use state for this.

// Think of state as the minimal set of changing data that your app needs to remember. 
// The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself).
// Descubra a representação absolutamente mínima do state que sua aplicação precisa e compute todo o resto sob demanda. 

    // Por exemplo, se você está construindo uma lista de compras, você pode armazenar os itens como um array no state. Se você também quer exibir o número de itens na lista, não armazene o número de itens como outro valor de state—em vez disso, leia o comprimento do seu array.

// Agora pense em todas as partes de dados nesta aplicação de exemplo:

//     A lista original de produtos
//     O texto de busca que o usuário digitou
//     O valor da checkbox
//     A lista filtrada de produtos

// Quais desses são state? Identifique os que não são:

    //     Permanece inalterado ao longo do tempo? Se sim, não é state.
    //     É passado de um pai via props? Se sim, não é state.
    //     Você pode computá-lo baseado no state ou props existentes em seu componente? Se sim, definitivamente não é state!

    // O que sobra provavelmente é state.

// Vamos passá-los um por um novamente:

    //     A lista original de produtos é passada como props, então não é state.
    //     O texto de busca parece ser state já que muda ao longo do tempo e não pode ser computado a partir de nada.
    //     O valor da checkbox parece ser state já que muda ao longo do tempo e não pode ser computado a partir de nada.
    //     A lista filtrada de produtos não é state porque pode ser computada pegando a lista original de produtos e filtrando-a de acordo com o texto de busca e o valor da checkbox.

// Isso significa que apenas o texto de busca e o valor da checkbox são state!

// Step 4: Identify where your state should live 

    // Seus states devem ficar no componente pai que seja comum a todos os que usem esse componente.

    // Se o ProductTable não tivesse acesso ao state, ele não conseguiria filtrar os produtos dinamicamente quando o usuário mudasse o texto ou a checkbox. Então a aplicação não funcionaria como esperado.

// Step 5: Add inverse data flow 

    // Aqui o exemplo ficou rodando, então vou deixar um lembrete:

        // forEach: quando você quer executar algo para cada item, sem criar novo array.

        // map: quando você quer criar um novo array transformando os itens.