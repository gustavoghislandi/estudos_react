// Fragment [https://react.dev/reference/react/Fragment#fragmentinstance Canary content also]

// Wrap elements in <Fragment> to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases.

// optional key: Fragments declared with the explicit <Fragment> syntax may have keys.

// Fragments are useful because grouping elements with a Fragment has no effect on layout or styles, unlike if you wrapped the elements in another container like a DOM element.

//--------

// The example above(not here) (using <></>) is equivalent to importing Fragment from React:

    import { Fragment } from 'react';

    function Post() {
    return (
        <Fragment>
            <PostTitle />
            <PostBody />
        </Fragment>
    );
    }

// Usually you won’t need this unless you need to pass a key to your Fragment.

//--------

// Assigning multiple elements to a variable

// Like any other element, you can assign Fragment elements to variables, pass them as props, and so on:

function CloseDialog() {
  const buttons = (
    <>
      <OKButton />
      <CancelButton />
    </>
  );
  return (
    <AlertDialog buttons={buttons}>
      Are you sure you want to leave this page?
    </AlertDialog>
  );
}

//--------

// Grouping elements with text

// You can use Fragment to group text together with components:

function DateRangePicker({ start, end }) {
  return (
    <>
      From
      <DatePicker date={start} />
      to
      <DatePicker date={end} />
    </>
  );
}

//--------

// Rendering a list of Fragments

// Here’s a situation where you need to write Fragment explicitly instead of using the <></> syntax. When you render multiple elements in a loop, you need to assign a key to each element. If the elements within the loop are Fragments, you need to use the normal JSX element syntax in order to provide the key attribute:

function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  );
}

//----- completo abaixo:

import { Fragment } from 'react';

const posts = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
