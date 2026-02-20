// Resumindo

// ✔️ props funcionam como parâmetros
// ✔️ São passadas do componente pai para o filho
// ✔️ São somente leitura (não devem ser modificadas)
// ✔️ Sempre vêm como um objeto

//-------

// React components use props to communicate with each other.
// Every parent component can pass some information to its child components by giving them props.
//  Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

// Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

    function Avatar() {
        return (
            <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={100}
                height={100}
            />
        );
    }

    export default function Profile() {
        return (
            <Avatar />
        );
    }

// The props you can pass to an <img> tag are predefined (ReactDOM conforms to the HTML standard). But you can pass any props to your own components, such as <Avatar>, to customize them. Here’s how!

// Passing props to a component

// In this code, the Profile component isn’t passing any props to its child component, Avatar:

    export default function Profile() {
        return (
            <Avatar />
        );
    }

// Step 1: Pass props to the child component

// First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):

    export default function Profile() {
        return (
            <Avatar
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
                size={100}
            />
        );
    }

// Step 2: Read props inside the child component

// You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

    function Avatar({ person, size }) {
    // person and size are available here
    }

// Ou seja, props são como parâmetros passados.

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) { // São como parâmetros
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={80} // E aqui os argumentos passados
        person={{  // Aqui também
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={100}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={80}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}


// Você pode pensar nas props como “controles” os quais você pode ajustar. Elas desempenham o mesmo papel que os argumentos para funções-de fato.

// props são o único argumento para o seu componente!

// Os componente funcionais do React aceitam apenas um argumento, um objeto props:

    function Avatar(props) {
        let person = props.person;
        let size = props.size;
        // ...
    }

// Normalmente você não precisa de todo o objeto props em si, então você pode desestruturá-lo em props individuais.

// Não esqueça o par de { e } chaves dentro de ( e ) ao declarar props.
// props desestruturada:

    function Avatar({ person, size }) {
        // ...
    }

// Esta sintaxe é chamada de “desestruturação” e é equivalente a ler propriedades de um parâmetro de função.

// Specifying a default value for a prop

// If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:

    function Avatar({ person, size = 100 }) { // Igual no JS
        // ...
    }

// The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.

// Encaminhando props com a sintaxe de espalhamento JSX

// Às vezes, passar props se torna muito repetitivo:

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// Não há nada de errado com código repetitivo-ele pode ser mais legível. Mas às vezes você pode valorizar concisão. Alguns componentes encaminham todas as suas props aos seus filhos, como Profile faz com Avatar. Como eles não usam nenhuma de suas props diretamente, pode fazer sentido usar uma SINTAXE DE ESPALHAMENTO(SPREAD) mais concisa:

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// Isso encaminha todas as props de Profile ao Avatar sem listar cada um de seus nomes.

// Use a sintaxe de espalhamento com cuidado. Se você está a utilizando em quase todos os componentes, algo está errado. Muitas vezes, isso indica que você deveria dividir seus componentes e passar filhos como JSX. Mais sobre isso a seguir!

// Passando JSX como children

// É comum aninhar tags embutidas no navegador:

//     <div>
//     <img />
//     </div>

// Às vezes você desejará aninhar seus próprios componentes da mesma forma:

//     <Card>
//     <Avatar />
//     </Card>

// Quando você aninha conteúdo dentro de uma tag JSX, o componente pai irá receber esse conteúdo em uma prop chamada children. Por exemplo, o componente Card abaixo receberá a prop children definida como <Avatar /> e o renderizará em uma wrapper div:

// É possível pensar sobre um componente com a prop children como se ele tivesse um “buraco” o qual pode ser “preenchido” por seus componente pais com JSX arbitrária. Você frequentemente usará a prop children para wrappers visuais: painéis, grids, etc.


// Como props mudam com o passar do tempo

// O componente Clock abaixo recebe duas props de seu componente pai: color e time. (O código deste componente pai está omitido porque usa state, conceito o qual nós não vamos nos aprofundar ainda.)

// Tente mudar a cor na caixa de seleção abaixo: [Só é possível no site, é bom ir lá ver o que ocorre]


    export default function Clock({ color, time }) {
        return (
            <h1 style={{ color: color }}>
                {time}
            </h1>
        );
    }

// Este exemplo ilustra que um componente pode receber props diferentes com o passar o tempo. Props não são sempre estáticas! Aqui, a prop time muda a cada segundo, e a prop color muda quando você seleciona outra cor. As props refletem os dados de um componente a qualquer instante, não apenas num primeiro momento.

// Entretanto, as props são imutáveis-um termo da ciência da computação o qual significa “inalterável”. Quando um componente precisa mudar suas props (por exemplo, em resposta à interação do usuário ou a novos dados), ele terá que “pedir” ao componente pai que passe props diferentes- um novo objeto! Suas props antigas serão então deixadas de lado, e eventualmente o motor do JavaScript irá recuperar a memória ocupada por elas.

// Não tente “alterar props”. Quando você precisa responder a interações do usuário (como trocar a cor selecionada), você terá que “definir state”, sobre o qual você pode aprender em State: A Memória de um Componente.

// Ou seja, você não altera props, você altera state.

// No React, a regra geral é:

    // Props são somente leitura (imutáveis)
    // State é mutável (via setState / useState)

// 🔹 Props (propriedades)

//     Vêm do componente pai
//     São usadas para configurar o componente
//     Não podem ser alteradas pelo componente que as recebe

// Exemplo:

    function Botao({ cor }) {
        return <button style={{ backgroundColor: cor }}>Clique</button>;
    }

    // Aqui cor é uma prop.

// O componente Botao não pode fazer algo como:

    cor = "red"; // ❌ errado

// Porque props são imutáveis.

// 🔹 State (estado)

//     É interno ao componente
//     Pode mudar ao longo do tempo
//     Deve ser alterado usando setState (classe) ou useState (função)

// Exemplo correto usando useState:

    import { useState } from "react";

    function Botao() {
        const [cor, setCor] = useState("blue");

        return (
            <button
                style={{ backgroundColor: cor }}
                onClick={() => setCor("red")}
            >
                Clique
            </button>
        );
    }

// Aqui estamos alterando state, não props.

//---

// Props podem somente ser lidas e representam um momento específico no tempo: toda renderização recebe uma nova versão de props.

// Você não pode mudar as props. Quando você precisar de interatividade, precisará definir state.

//-----------------------
// Exercícios e maneiras de escrever:

// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

// Solution

// In this solution, the Profile component accepts multiple props: imageId (a string), name (a string), profession (a string), awards (an array of strings), discovery (a string), and imageSize (a number).

// Note that the imageSize prop has a default value, which is why we don’t pass it to the component.

import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')}) {/*Explicação mais abaixo */}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

// Note how you don’t need a separate awardCount prop if awards is an array. Then you can use awards.length to count the number of awards. Remember that props can take any values, and that includes arrays too!

// Another solution, which is more similar to the earlier examples on this page, is to group all information about a person in a single object, and pass that object as one prop:
import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
    </div>
  );
}

// Although the syntax looks slightly different because you’re describing properties of a JavaScript object rather than a collection of JSX attributes, these examples are mostly equivalent, and you can pick either approach.

// Explicação do ({awards.join(', ')})

    // ({awards.join(', ')})

// Ela aparece aqui dentro:

    // <b>Awards: {awards.length} </b>
    // ({awards.join(', ')})

 // 📌 O que é awards?

    // awards é um array (lista) de strings, por exemplo:

    [
    'Nobel Prize in Physics',
    'Nobel Prize in Chemistry',
    'Davy Medal',
    'Matteucci Medal'
    ]

// 🔎 O que faz join(', ')?

    // O método .join():

    //     Junta todos os elementos de um array
    //     Retorna uma única string
    //     Usa o separador que você passar como argumento

// Se awards for:

    [
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
    ]

// Então:

    awards.join(', ')

// vai virar a string:

// Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal