// Instância de quê, exatamente?

// 👉 Instância de um componente React, não de uma classe JS nem de um objeto “normal”.

// Hoje, com function components, pense assim (no exemplo em "updating_the_screen_useState.jsx"):

// MyButton não é um objeto
// MyButton não é uma classe
// MyButton é uma função que o React chama

// Cada <MyButton /> no JSX vira uma “posição” diferente na árvore de componentes

// Para cada posição, o React mantém um registro interno de estado, efeitos, refs etc.
// Esse “registro” é o que a gente informalmente chama de instância do componente.
// Mesmo sendo a mesma função, o React guarda estados separados porque elas estão em lugares diferentes da árvore.

//---

// Então o useState fica onde?

// Não fica na função em si.

// O React faz algo conceitualmente assim (bem simplificado):


    // MyButton (posição 1)
    //   state[0] = 0

    // MyButton (posição 2)
    //   state[0] = 0


// Quando você clica no primeiro botão, o React sabe:

// “Ah, isso é o state[0] do MyButton da posição 1”

// Por isso um não afeta o outro.

