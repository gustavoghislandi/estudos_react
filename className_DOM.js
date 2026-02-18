// No HTML/DOM:
// className é a propriedade JavaScript que altera o atributo class.

// No React:
// className é usado no JSX no lugar de class, porque class é palavra reservada do JavaScript.

// No DOM → propriedade.
// No React → sintaxe obrigatória no JSX para definir classes.

// ### Exemplo simples (no DOM)

// HTML:

    <div id="meuElemento" class="box"></div>

// JavaScript:

    const elemento = document.getElementById("meuElemento");

// // Modificando completamente a classe

    elemento.className = "novaClasse";

// Depois disso, o HTML passa a ser:

<div id="meuElemento" class="novaClasse"></div>

// ---

// ### ⚠️ Importante

// `className` **substitui todas as classes existentes**.

// Se você quiser **adicionar** ou **remover** classes sem apagar as outras, o mais recomendado é usar:

elemento.classList.add("ativa");     // adiciona
elemento.classList.remove("box");    // remove
elemento.classList.toggle("ativa");  // alterna

// 👉 Resumindo:

    // * `className = "..."` → substitui tudo
    // * `classList` → manipula classes individualmente
