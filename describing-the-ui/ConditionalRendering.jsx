// Your components will often need to display different things depending on different conditions.
// In React, you can conditionally render JSX using JavaScript syntax like 'if' statements, '&&,' and '? :' operators.

// Conditionally returning JSX 

// Let’s say you have a PackingList component rendering several Items, which can be marked as packed or not:

    function Item({ name, isPacked }) {
        return <li className="item">{name}</li>;
    }

    export default function PackingList() {
        return (
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
        );
    }




// Notice that some of the Item components have their isPacked prop set to true instead of false. You want to add a checkmark (✅) to packed items if isPacked={true}.

// You can write this as an if/else statement like so:

    // if (isPacked) {
    //         return <li className="item">{name} ✅</li>;
    //     }
    // return <li className="item">{name}</li>;

// If the isPacked prop is true, this code returns a different JSX tree. With this change, some of the items get a checkmark at the end:

    function Item({ name, isPacked }) {
        if (isPacked) {
            return <li className="item">{name} ✅</li>;
        }
        return <li className="item">{name}</li>;
    }

    export default function PackingList() {
        return (
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
        );
    }
