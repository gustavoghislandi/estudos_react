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

// Deep Dive
// Where are the HTML tags in the render tree?

// You’ll notice in the above render tree, there is no mention of the HTML tags that each component renders. This is because the render tree is only composed of React components.

// React, as a UI framework, is PLATAFORM AGNOSTIC. On react.dev, we showcase examples that render to the web, which uses HTML markup as its UI primitives. But a React app could just as likely render to a mobile or desktop platform, which may use different UI primitives like UIView or FrameworkElement.

// These platform UI primitives are not a part of React. React render trees can provide insight to our React app regardless of what platform your app renders to.

  // React é agnóstico de plataforma porque ele só descreve árvores de componentes e estado. Quem realmente desenha a interface é o renderer da plataforma.

  // No Web usamos HTML (div, button, etc.), mas em outras plataformas existem outros primitivos de UI, como UIView no iOS ou FrameworkElement no Windows.

  // Exemplo de render condicional:

  import * as React from 'react';
  import inspirations from './inspirations';
  import FancyText from './FancyText';
  import Color from './Color';

  export default function InspirationGenerator({children}) {
    const [index, setIndex] = React.useState(0);
    const inspiration = inspirations[index];
    const next = () => setIndex((index + 1) % inspirations.length);

    return (
      <>
        <p>Your inspirational {inspiration.type} is:</p>
        {inspiration.type === 'quote'
        ? <FancyText text={inspiration.value} />
        : <Color value={inspiration.value} />}

        <button onClick={next}>Inspire me again</button>
        {children}
      </>
    );
  }

  import FancyText from './FancyText';
  import InspirationGenerator from './InspirationGenerator';
  import Copyright from './Copyright';

  export default function App() {
    return (
      <>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </>
    );
  }


  // Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.

  // Identifying these categories of components are useful for understanding data flow and performance of your app.