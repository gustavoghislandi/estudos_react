
// RESUMO — CSS x Objeto JavaScript (React)

// - A estrutura é praticamente IDÊNTICA visualmente:

    // ambos usam pares propriedade → valor.

    // CSS:

        // .botao {
        //     color: red;
        //     font - size: 16px;
        // }

    // JS:

        const botao = {
            color: "red",
            fontSize: "16px"
        };

// - Apesar da forma parecida, NÃO são a mesma coisa:

// CSS:

    // - Não é objeto
    // - Não vive no JavaScript
    // - É uma linguagem de regras
    // - Interpretado pelo motor de CSS do navegador

// Objeto JS:

    // - Vive em memória
    // - Pode ser lido, alterado e iterado
    // - Executado pelo motor JavaScript

// - No React:

    // - className recebe uma STRING (nome da classe CSS)
    // - style recebe um OBJETO JS (style inline)

// Conclusão:

    // A estrutura é idêntica na aparência,
    // mas o significado e o funcionamento são diferentes.
