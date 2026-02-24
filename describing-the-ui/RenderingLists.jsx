// Rendering Lists

// You can use the JavaScript array methods to manipulate an array of data.

// Here’s a short example of how to generate a list of items from an array (still need the unique “key” prop):

// Move the data into an array:

    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

// Map the people members into a new array of JSX nodes, listItems:

    const listItems = people.map(person => <li>{person}</li>);

// Return listItems from your component wrapped in a <ul>:

    return <ul>{listItems}</ul>;

// Filtering arrays of items 

// This data can be structured even more.

    const people2 = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

// Let’s say you want a way to only show people whose profession is 'chemist'. You can use JavaScript’s filter() method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns true or false), and returns a new array of only those items that passed the test (returned true).

// You only want the items where profession is 'chemist'. The “test” function for this looks like (person) => person.profession === 'chemist'. Here’s how to put it together:

//     Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':

    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

// Now map over chemists:

    const listItems2 = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

// Lastly, return the listItems from your component:

    return <ul>{listItems}</ul>;

    // NOTE:
    // Arrow functions containing => { are said to have a “block body”. They let you write more than a single line of code, but you have to write a return statement yourself. If you forget it, nothing gets returned! [Eu já sabia, só salvei por causa do nome dela.]

// Keeping list items in order with key

// Notice that all the sandboxes above show an error in the console:

    // Warning: Each child in a list should have a unique “key” prop.

// You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

    <li key={person.id}>...</li>

// Cada item do array tem que ter uma chave unica (string ou number)

// JSX elements directly inside a map() call always need keys!

// Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

// RELEVANT:
// Rather than generating keys on the fly, you should include them in your data:

    export const people3 = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];

// Displaying several DOM nodes for each list item 

// What do you do when each item needs to render not one, but several DOM nodes?

// The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:

    import { Fragment } from 'react';

// ...

    const listItems3 = people.map(person =>
    <Fragment key={person.id}>
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
    </Fragment>
);

// Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on.

// Se não tiver necessidade de CSS na div (ou outra tag) pode ser interessante usar o Fragment, pois fica mais limpo.

//---

// Where to get your key

// Different sources of data provide different sources of keys:

    // Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
    // Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

// Rules of keys

// Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
// Keys must not change or that defeats their purpose! Don’t generate them while rendering.

// Why does React need keys?

// Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

// File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

// ATENÇÃO:

// You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

// Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

// Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.

// Exemplo de código com filter e não tendo que fazer map duas vezes, pois ele foi colocado dentro de um componente:

    import { people } from './data.js';
    import { getImageUrl } from './utils.js';

    function ListSection({ title, people }) {
        return (
            <>
                <h2>{title}</h2>
                <ul>
                    {people.map(person =>
                        <li key={person.id}>
                            <img
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul>
            </>
        );
    }

    export default function List() {
        const chemists = people.filter(person =>
            person.profession === 'chemist'
        );
        const everyoneElse = people.filter(person =>
            person.profession !== 'chemist'
        );
        return (
            <article>
                <h1>Scientists</h1>
                <ListSection
                    title="Chemists"
                    people={chemists}
                />
                <ListSection
                    title="Everyone Else"
                    people={everyoneElse}
                />
            </article>
        );
    }


// A very attentive reader might notice that with two filter calls, we check each person’s profession twice. Checking a property is very fast, so in this example it’s fine. If your logic was more expensive than that, you could replace the filter calls with a loop that manually constructs the arrays and checks each person once.

// In fact, if people never change, you could move this code out of your component. From React’s perspective, all that matters is that you give it an array of JSX nodes in the end. It doesn’t care how you produce that array:

    import { people2 } from './data.js';
    import { getImageUrl } from './utils.js';

    let chemists2 = [];
    let everyoneElse = [];
    people2.forEach(person => {
        if (person.profession === 'chemist') {
            chemists2.push(person);
        } else {
            everyoneElse.push(person);
        }
    });

    function ListSection({ title, people2 }) {
        return (
            <>
                <h2>{title}</h2>
                <ul>
                    {people2.map(person =>
                        <li key={person.id}>
                            <img
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul>
            </>
        );
    }

    export default function List() {
        return (
            <article>
                <h1>Scientists</h1>
                <ListSection
                    title="Chemists"
                    people2={chemists2}
                />
                <ListSection
                    title="Everyone Else"
                    people2={everyoneElse}
                />
            </article>
        );
    }


// Abaixo, uma versão com Componente dentro do map e desestruturação das props:

    export const recipes = [{
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
    }, {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
    }, {
        id: 'hummus',
        name: 'Hummus',
        ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
    }];



    import { recipes } from './data.js';

    function Recipe({ id, name, ingredients }) {
        return (
            <div>
                <h2>{name}</h2>
                <ul>
                    {ingredients.map(ingredient =>
                        <li key={ingredient}>
                            {ingredient}
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    export default function RecipeList() {
        return (
            <div>
                <h1>Recipes</h1>
                {recipes.map(recipe =>
                    <Recipe {...recipe} key={recipe.id} />
                )}
            </div>
        );
    }

// Daria para fazer algo assim também (sem passar as props):

import { recipes } from './data.js';

function Recipe() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return (
                  <li key={ingredient}>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}

    </div>
  );
}
export default function RecipeList() {
  return (
    <div>
    <Recipe />
    </div>
  );
}

// É interessante como os tutoriais às vezes complicam. Abaixo, meu código para a solução que deve colocar o <hr /> entre os parágrafos:

    const poem = {
        lines: [
            'I write, erase, rewrite',
            'Erase again, and then',
            'A poppy blooms.'
        ]
    };

    export default function Poem() {
        return (
            <article>
                {poem.lines.map((line, index) => {
                    if (index === (poem.lines.length - 1)) {
                        return <><p key={index}>
                            {line}
                        </p>
                        </>
                    } else {
                        return <><p key={index}>
                            {line}
                        </p>
                            <hr />
                        </>
                    }
                }
                )}
            </article>
        );
    }

// E abaixo, das soluções do tutorial, a mais compacta:

    import { Fragment } from 'react';

    const poem2 = {
        lines: [
            'I write, erase, rewrite',
            'Erase again, and then',
            'A poppy blooms.'
        ]
    };

    export default function Poem() {
        return (
            <article>
                {poem2.lines.map((line, i) =>
                    <Fragment key={i}>
                        {i > 0 && <hr />}
                        <p>{line}</p>
                    </Fragment>
                )}
            </article>
        );
    }

// Diferença:
// No meu código, peguei o valor do último índice a partir de length e não renderizei o <hr /> quando chegasse nele; do contrário, é pra renderizar com.
// Já no código mais compacto do tutorial, ele sempre renderizou o <hr />, menos para o primeiro elemento.
// Ou seja, ele optou por renderizar o <hr /> acima do <p></p> e ocultar o primeiro, enquanto eu optei por renderizar abaixo e ocultar o último.
// Do meu ponto de vista, a maneira que escrevi é mais intuitiva. Porque o formato de saída esperado inicia com <p></p>, seguido de <hr />, para lá ao final terminar com <p></p> já sem o <hr /> final que seria esperado.

