//  React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. Here is a Gallery component rendering three Profile components:

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <p>Extra text I added with markup (HTML)</p>
    </section>
  );
}

// O componente retorna uma tag <img /> com os atributos src e alt. O <img /> é escrito como HTML, mas na verdade, é o JavaScript que está por trás! Essa sintaxe é chamada JSX e permite usar tags HTML dentro do JavaScript.

// Como os componentes Profile são renderizados dentro da Gallery—mesmo várias vezes—, podemos dizer que Gallery é um componente pai, tornando cada Profile como um componente “filho”. 


// ----------------------------

// Componentes podem renderizar outros componentes, mas você nunca deve definir um componente dentro de outro componente:

    // export default function Gallery() {
    //   // 🔴 Nunca defina um componente dentro de outro componente!
    //   function Profile() {
    //     // ...
    //   }
    //   // ...
    // }

// O trecho acima é muito lento e causa erros. Em vez disso, defina todos os componentes no nível superior:

    // export default function Gallery() {
    //   // ...
    // }

    // // ✅ Declare componentes no nível superior
    // function Profile() {
    //   // ...
    // }

// Quando um componente filho precisa de alguns dados de um pai, passe-os por props em vez de definições de aninhamento.

// [ Eu prefiro que cada componente seja um arquivo individualizado ]