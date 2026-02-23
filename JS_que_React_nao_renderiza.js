// No JSX, o React não renderiza apenas três valores específicos:
//
// - false
// - null
// - undefined
//
// Esses são tratados como “buracos” na árvore de renderização.
//
// 📌 Então não é “qualquer falsy”
//
// Em JavaScript existem vários valores falsy:

false
null
undefined
0
""
NaN

// Mas React só ignora automaticamente:

false
null
undefined

// 🔎 Exemplos práticos
//
// ✅ Não renderiza nada

false
null
undefined

// Nada aparece na tela.
//
// ⚠️ Esses são falsy, mas renderizam

0

// ➡️ Renderiza 0 na tela.

""

// ➡️ Renderiza uma string vazia (não aparece visualmente, mas existe no DOM).

NaN

// ➡️ Renderiza NaN como texto.
//
// 🚨 Armadilha comum
//
// Muito comum fazer isso:

items.length && <Lista />

// Se items.length for 0, o React renderiza 0 😅
// Porque 0 não é ignorado — ele é renderizado.
//
// Forma mais segura:

items.length > 0 && <Lista />

// ✅ Resumo
//
// Valor        | Renderiza?
// false        | ❌ Não
// null         | ❌ Não
// undefined    | ❌ Não
// 0            | ✅ Sim
// ""           | ⚠️ Sim (string vazia)
// NaN          | ✅ Sim
