// Understanding Your UI as a Tree

// Your UI as a tree

// Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.

// Ver https://react.dev/learn/understanding-your-ui-as-a-tree para visualizar a imagem da árvore.

// The Render Tree 

// Código interessante aqui:

    export default function FancyText({title, text}) {
    return title
        ? <h1 className='fancy title'>{text}</h1>
        : <h3 className='fancy cursive'>{text}</h3>
    }

    export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
          </>
            );
            }

    // Perceba que title não tem nada, mas ele está ali. Então, ele fica true e isso faz o retorno ser um h1 ao invés de um h3. Se remover ele, o texto fica o h3, porque é false. sim, muda a classe também.

// The root node in a React render tree is the root component of the app. In this case, the root component is App and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.