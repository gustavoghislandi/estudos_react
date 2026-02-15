// Props vs State

// Há dois tipos de dados “modelo” em React: props e state. Os dois são muito diferentes:

//     Props são como argumentos que você passa para uma função. Eles permitem que um componente pai passe dados para um componente filho e personalize sua aparência. Por exemplo, um Form pode passar uma prop color para um Button.
//     State é como a memória de um componente. Ele permite que um componente mantenha controle de algumas informações e as altere em resposta a interações. Por exemplo, um Button pode manter controle do state isHovered.

// Props e state são diferentes, mas trabalham juntos. Um componente pai frequentemente manterá algumas informações no state (para que possa alterá-las), e passá-las para baixo para componentes filhos como suas props. É normal se a diferença ainda parecer confusa na primeira leitura. Leva um pouco de prática para realmente entender!