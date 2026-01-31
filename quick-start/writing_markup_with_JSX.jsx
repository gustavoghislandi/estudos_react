// The markup syntax you’ve seen in 'creating_and_nesting_components.jsx' is called JSX. It is OPTIONAL, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

// JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

    function AboutPage() {
        return (
            <>
                <h1>About</h1>
                <p>Hello there.<br />How do you do?</p>
            </>
        );
    }

// If you have a lot of HTML to port to JSX, you can use an online converter (https://transform.tools/html-to-jsx - Não faz milagre, não vai transformar lista em map, por exemplo.)

// ===============================
// DIFERENÇAS DO JSX (RESUMO)
// ===============================

// 1) JSX vira JavaScript

    // JSX é convertido para React.createElement antes de rodar no browser.

// 2) Mistura JS + markup

    // Permite usar JavaScript dentro do JSX com {}.

// 3) Atributos diferentes do HTML

    // class -> className
    // for -> htmlFor

// 4) Um único elemento pai

    // Componentes devem retornar um único elemento raiz (ou Fragment).

// 5) Componentes com letra maiúscula

    // <MyButton /> = componente React
    // <button> = elemento HTML

// 6) JSX é opcional

    // React pode ser usado sem JSX, mas fica mais verboso.


// ===============================
// EXEMPLOS DE CADA CASO
// ===============================

// 1) JSX vira JavaScript

    const el = <h1>Olá</h1>;

    // vira:
    
    React.createElement("h1", null, "Olá");

// 2) Mistura JS + markup

    const nome = "Ana";
    <h1>Olá, {nome}</h1>

// 3) Atributos diferentes do HTML

    // <div className="container">
    // <label htmlFor="email">Email</label>
    // </div>

// 4) Um único elemento pai

    // ❌ Errado

    // return (
    // <h1>Título</h1>
    // <p>Texto</p>
    // );

    // ✅ Certo

    return (
    <>
        <h1>Título</h1>
        <p>Texto</p>
    </>
    );

// 5) Componentes com letra maiúscula

    // <MyButton />  // componente React
    // <button />   // HTML

// 6) JSX é opcional

    // Sem JSX:

    React.createElement("button", null, "Clique");

    // Com JSX:

    <button>Clique</button>
