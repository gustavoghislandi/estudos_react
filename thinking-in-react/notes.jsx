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