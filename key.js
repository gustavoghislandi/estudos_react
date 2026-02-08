// key is a special and reserved property in React.
// When an element is created, React extracts the key property and stores the key directly on the returned element.
// Even though key may look like it is passed as props, React automatically uses key to decide which components to update.
// There’s no way for a component to ask what key its parent specified.

// It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

    // IF NO KEY IS SPECIFIED, REACT WILL REPORT AN ERROR AND USE THE ARRAY INDEX AS A KEY BY DEFAULT

    // Using the array index as a key is problematic when trying to re-order a list’s items or inserting/removing list items. 
    // Explicitly passing key={i} silences the error but has the same problems as array indices and is not recommended in most cases.

// Keys do not need to be globally unique; they only need to be unique between components and their siblings.

// Ou seja, as keys só precisam ser únicas/diferentes entre os componentes irmãos diretos (filhos de um mesmo pai).

//----

// If your data was from a database, Alexa, Ben, and Claudia’s database IDs could be used as keys.

    <li key={user.id}>
    {user.name}: {user.taskCount} tasks left
    </li>