// Keeping Components Pure

// Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

// Purity: Components as formulas

// REACT ASSUMES THAT EVERY COMPONENT YOU WRITE IS A PURE FUNCTION. This means that React components you write must always return the same JSX given the same inputs:

    function Recipe({ drinkers }) {
        return (
            <ol>
                <li>Boil {drinkers} cups of water.</li>
                <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
                <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
            </ol>
        );
    }

    export default function App() {
        return (
            <section>
                <h1>Spiced Chai Recipe</h1>
                <h2>For two</h2>
                <Recipe drinkers={2} />
                <h2>For a gathering</h2>
                <Recipe drinkers={4} />
            </section>
        );
    }

// When you pass drinkers={2} to Recipe, it will return JSX containing 2 cups of water. Always.

// If you pass drinkers={4}, it will return JSX containing 4 cups of water. Always.

// Side Effects: (un)intended consequences 

// React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

// Here is a component that breaks this rule:

    let guest = 0;

    function Cup() {
        // Bad: changing a preexisting variable!
        guest = guest + 1;
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    export default function TeaSet() {
        return (
            <>
                <Cup />
                <Cup />
                <Cup />
            </>
        );
    }

// This component is reading and writing a guest variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what’s more, if other components read guest, they will produce different JSX, too, depending on when they were rendered! That’s not predictable.

// Going back to our formula y = 2x, now even if x = 2, we cannot trust that y = 4. Our tests could fail, our users would be baffled, planes would fall out of the sky—you can see how this would lead to confusing bugs!

// You can fix this component by passing guest as a prop instead:

    function Cup({ guest }) {
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    export default function TeaSet() {
        return (
            <>
                <Cup guest={1} />
                <Cup guest={2} />
                <Cup guest={3} />
            </>
        );
    }

// Now your component is pure, as the JSX it returns only depends on the guest prop.

// In general, you should not expect your components to be rendered in any particular order. It doesn’t matter if you call y = 2x before or after y = 5x: both formulas will resolve independently of each other. In the same way, each component should only “think for itself”, and not attempt to coordinate with or depend upon others during rendering. Rendering is like a school exam: each component should calculate JSX on their own!


// Detecting impure calculations with StrictMode 

// Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.

// When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.

// React offers a “Strict Mode” in which it calls each component’s function twice during development. BY CALLING THE COMPONENT FUNCTIONS TWICE, STRICT MODE HELPS FIND COMPONENTS THAT BREAK THESE RULES.

// Notice how the original example displayed “Guest #2”, “Guest #4”, and “Guest #6” instead of “Guest #1”, “Guest #2”, and “Guest #3”. The original function was impure, so calling it twice broke it. But the fixed pure version works even if the function is called twice every time. Pure functions only calculate, so calling them twice won’t change anything—just like calling double(2) twice doesn’t change what’s returned, and solving y = 2x twice doesn’t change what y is. Same inputs, same outputs. Always.

// Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.