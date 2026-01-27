// ================================
// RESUMO SOBRE STRICT MODE EM JS / REACT / REACT NATIVE
// ================================

// 1️⃣ "use strict" do JavaScript
// - É um modo estrito da engine JS que ativa erros para práticas inseguras e melhora otimizações.
// - Deve ser colocado no topo de um arquivo ou função: "use strict";
// - Funções normais em strict mode têm 'this = undefined' se chamadas sem contexto.
// - ES modules (import/export) já rodam em strict mode automaticamente.

// 2️⃣ React / React Native
// - O React possui também <React.StrictMode>, mas isso é diferente!
//     • <React.StrictMode> ativa apenas checagens de desenvolvimento do React.
//     • Não afeta desempenho ou regras do JS.
// - A transpilação via Babel / Metro geralmente insere "use strict" em módulos automaticamente.
// - Portanto, em projetos modernos, o código JS já roda em strict mode sem precisar escrever manualmente.

// 3️⃣ Teste rápido de strict mode
// - Podemos verificar assim:
function isStrictMode() {
  return (function () { return !this; })(); // retorna true se strict mode ativo
}

// 4️⃣ Como garantir strict mode
// - Colocando "use strict"; no topo do arquivo de entrada (index.js, App.js)
// - Em React Native, cada arquivo é tratado como módulo, então strict mode já é aplicado quase sempre.
// - <React.StrictMode> não substitui "use strict"; serve apenas para alertas de desenvolvimento do React.

// 5️⃣ Resumo rápido:
// - "use strict" = JS engine strict mode, afeta execução, previne erros silenciosos.
// - <React.StrictMode> = checagens de React, desenvolvimento apenas.
// - ES modules já estão em strict mode por padrão.
// - Babel/Metro geralmente já adicionam "use strict" nos arquivos transpilados.
// ================================
