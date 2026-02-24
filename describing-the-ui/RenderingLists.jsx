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
