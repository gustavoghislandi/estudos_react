// É possível usar chaves {} para usar JS dentro do JSX - que retorna aquele simulacro de HTML. Então vira um HTML com JS.

// Quando você quiser passar um atributo de string para a JSX, coloque-o entre aspas simples ou duplas:

export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

// Qualquer expressão JavaScript funcionará entre chaves, incluindo chamadas de função como formatDate():

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

// Você só pode usar chaves de duas maneiras dentro da JSX:

// Como texto diretamente dentro de uma tag JSX: <h1>{nome}'s To Do List</h1> funciona, porém <{tag}>Gregorio Y. Zara's To Do List</{tag}> não funcionará.
// Como atributos imediatamente após o sinal =: src={avatar} lerá a variável avatar, mas src="{avatar}" passará a string "{avatar}".

// Além de strings, números e outras expressões JavaScript, você pode até passar objetos em JSX. Os objetos também são denotados por chaves, como { name: "Hedy Lamarr", inventions: 5 }. Portanto, para passar um objeto JS em JSX, você deve envolver o objeto em outro par de chaves:

    // person={{ name: "Hedy Lamarr", inventions: 5 }}

// Você pode ver isso com estilos CSS em linha na JSX. O React não exige que você use estilos inline (as classes CSS funcionam muito bem na maioria dos casos). Mas quando você precisa de um estilo inline, você passa um objeto para o atributo style:

// Você pode ver claramente o objeto JavaScript dentro das chaves quando o escreve dessa forma:

    <ul style={
    {
        backgroundColor: 'black',
        color: 'pink'
    }
    }></ul>

// Da próxima vez que você encontrar {{ e }} em JSX, saiba que isso é nada mais do que um objeto dentro das chaves da JSX!

// IMPORTANTE:
// As propriedades de style em linha são escritas em camelCase. Por exemplo, o HTML <ul style="background-color: black"> seria escrito como <ul style={{ backgroundColor: 'black' }}> em seu componente.

// Você pode colocar várias expressões dentro de um objeto e referenciá-las em seu JSX dentro de chaves:

    // const person = {
    //     name: 'Gregorio Y. Zara',
    //     theme: {
    //         backgroundColor: 'black',
    //         color: 'pink'
    //     }
    // };

    // export default function TodoList() {
    //     return (
    //         <div style={person.theme}>
    //             <h1>{person.name}'s Todos</h1>
    //             <img
    //                 className="avatar"
    //                 src="https://i.imgur.com/7vQD0fPs.jpg"
    //                 alt="Gregorio Y. Zara"
    //             />
    //             <ul>
    //                 <li>Improve the videophone</li>
    //                 <li>Prepare aeronautics lectures</li>
    //                 <li>Work on the alcohol-fuelled engine</li>
    //             </ul>
    //         </div>
    //     );
    // }

    // Neste exemplo, o objeto JavaScript person contém uma string name e um objeto theme:

    // const person = {
    //     name: 'Gregorio Y. Zara',
    //     theme: {
    //         backgroundColor: 'black',
    //         color: 'pink'
    //     }
    // };

// O componente pode usar os valores de person da seguinte forma:

    // <div style={person.theme}>
    // <h1>{person.name}'s Todos</h1>

// JSX é uma linguagem de modelação mínima, pois permite que você organize dados e lógica usando JavaScript.

// As chaves funcionam dentro do conteúdo da tag JSX ou imediatamente após = em atributos.

// {{ e }} não é uma sintaxe especial: é um objeto JavaScript colocado entre chaves JSX.

// Maneiras de passar uma URL com variáveis:

// Basicamente concatenando as variáveis numa string JS

    const baseUrl = 'https://i.imgur.com/';
    const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
    };

    export default function TodoList() {
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + '.jpg'}
            alt={person.name}
        />
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
    );
    }

    // Deste jeito não funciona:

     src="{baseUrl}{person.imageId}{person.imageSize}.jpg"

    // Deste funciona:

    // src={baseUrl + person.imageId + person.imageSize + '.jpg'}

    // Evidentemente a extensão poderia ser algo como person.fileExtension . Funcionaria também.

// Ou você pode importar um componente:

    //App.js
    import { getImageUrl } from './utils.js'
        
    // src={getImageUrl(person)}

    // util.js
    export function getImageUrl(person) {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            person.imageSize +
            '.jpg'
        );
    }