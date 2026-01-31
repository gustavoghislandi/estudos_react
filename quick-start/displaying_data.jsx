// JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name: [isso é uma maravilha]

return (
  <h1>
    {user.name}
  </h1>
);

// You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);

// You can put more complex expressions inside the JSX curly braces {JS-here} too, for example, string concatenation:

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1> {/* JS here */}
      <img
        className="avatar"
        src={user.imageUrl} // JS here
        alt={'Photo of ' + user.name} // JS here
        style={{ // Isso é um objeto JS, não uma sintaxe especial
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

// In the above example, 
// style={{}} is not a special syntax,
// but a regular {} object
// inside the style={ } JSX curly braces. 
// You can use the style attribute when your styles depend on JavaScript variables.

<h3 style={{color: 'red'}}>Exemplo para mostrar style passado como objeto JS</h3>

// Por ser um objeto, quando for número (por exemplo) não recebe aspas o valor:

    // No contexto do React:

        // style={{
        // width: 100,    // número, sem aspas
        // height: 100,   // número, sem aspas
        // fontSize: "16px" // string, com aspas
        // }}