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

// Conditionally returning nothing with null

// In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null:

    // if (isPacked) {
    //     return null;
    // }
    // return <li className="item">{name}</li>;

// If isPacked is true, the component will return nothing, null. Otherwise, it will return JSX to render.

// Conditional (ternary) operator (? :)

// JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.

// Instead of this:

    // if (isPacked) {
    //   return <li className="item">{name} ✅</li>;
    // }
    // return <li className="item">{name}</li>;

// You can write this:

    return (
        <li className="item">
            {isPacked ? name + ' ✅' : name}
        </li>
    );

// This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up. In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.

// Logical AND operator (&&)

// Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:

    // return (
    //     <li className="item">
    //         {name} {isPacked && '✅'}
    //     </li>
    // );

// ----> React considers 'false' as a “hole” in the JSX tree, just like 'null' or 'undefined', and doesn’t render anything in its place.

// São só esses 3 que o React não renderiza. {0}, {""}, e NaN renderizam!

// Então, nesses casos o correto é faze algo assim:

    (messageCount > 0) && <p>New messages</p>

// Conditionally assigning JSX to a variable [interessante!]

// When the shortcuts get in the way of writing plain code, try using an if statement and a variable. You can reassign variables defined with let, so start by providing the default content you want to display, the name:

    let itemContent = name2;

// Use an if statement to reassign a JSX expression to itemContent if isPacked is true:

    if (isPacked) {
        itemContent = name2 + " ✅";
    }

// Curly braces open the “window into JavaScript”. Embed the variable with curly braces in the returned JSX tree, nesting the previously calculated expression inside of JSX:

    <li className="item">
    {itemContent}
    </li>

// This style is the most verbose, but it’s also the most flexible.

// Like before, this works not only for text, but for arbitrary JSX too:

    if (isPacked) {
        itemContent = (
            <del>
                {name2 + " ✅"}
            </del>
        );
    }

// In others words, it serves for components too!

// Em outras palavras, serve para componentes também!



// In React, you control branching logic with JavaScript.
// You can return a JSX expression conditionally with an if statement.
// You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
// The shortcuts are common, but you don’t have to use them if you prefer plain if.


    <li className="item">
        {name} {isPacked ? '✅' : '❌'}
    </li>

// Abaixo um exemplo que vai além, usando objetos:

const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15–70 mg/cup',
        age: '4,000+ years'
    },
    coffee: {
        part: 'bean',
        caffeine: '80–185 mg/cup',
        age: '1,000+ years'
    }
};

function Drink({ name }) {
    const info = drinks[name];
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    );
}

export default function DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}

// Certamente, parece mais interessante.