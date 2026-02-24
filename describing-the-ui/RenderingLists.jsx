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

