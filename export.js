// Como funciona export com 'default'

// Se um arquivo tem 'export default', quem importa não precisa usar o mesmo nome.

    // Square.js
    export default function Square() {}

    // App.js
    import MeuQuadrado from "./Square";

// Percebe?
MeuQuadrado //pode ter qualquer nome. O JavaScript só pega o “export padrão” do arquivo.

    // ➡️ Isso deixa o código mais flexível
    // ➡️ Muito comum para componentes React

// Como funciona sem default (export nomeado)

    export function Square() {}

// Agora, quem importa tem que usar o mesmo nome:

    import { Square } from "./Square";

// Aqui:

// As {} são obrigatórias

// O nome tem que bater exatamente

// E se tiver mais de um export?

// Você pode ter vários exports nomeados, mas apenas um default por arquivo.

    export default function Square() {}
    export function helper() {}
    export const value = 10;

    // Importando:

    import Square, { helper, value } from "./Square";

// Resumo mental:

// default → vem sem {}
// nomeados → vêm com {}