// Why immutability is important

// Note how in handleClick, you call .slice() to create a copy of the squares array instead of modifying the existing array. To explain why, we need to discuss immutability and why immutability is important to learn.

// There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes. Here is what it would look like if you mutated the squares array:

    const squares = [null, null, null, null, null, null, null, null, null];
    squares[0] = 'X';
    // Now `squares` is ["X", null, null, null, null, null, null, null, null];

// And here is what it would look like if you changed data without mutating the squares array:

    const squares = [null, null, null, null, null, null, null, null, null];
    const nextSquares = ['X', null, null, null, null, null, null, null, null];
    // Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`

// The result is the same but by not mutating (changing the underlying data) directly, you gain several benefits.

// Immutability makes complex features much easier to implement. Later in this tutorial, you will implement a “time travel” feature that lets you review the game’s history and “jump back” to past moves. This functionality isn’t specific to games—an ability to undo and redo certain actions is a common requirement for apps. Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.

// There is also another benefit of immutability. By default, all child components re-render automatically when the state of a parent component changes. This includes even the child components that weren’t affected by the change. Although re-rendering is not by itself noticeable to the user (you shouldn’t actively try to avoid it!), you might want to skip re-rendering a part of the tree that clearly wasn’t affected by it for performance reasons. Immutability makes it very cheap for components to compare whether their data has changed or not. You can learn more about how React chooses when to re-render a component in the memo API reference [https://react.dev/reference/react/memo].