// De forma bem breve:

// ### 🔹 `aria-*`

// São atributos de **acessibilidade** (Accessible Rich Internet Applications).
// Servem para tornar interfaces mais compreensíveis para leitores de tela e tecnologias assistivas.

// Exemplos:

// * `aria-label` → define um rótulo acessível
// * `aria-hidden="true"` → oculta o elemento de leitores de tela
// * `aria-expanded` → indica se algo está expandido ou não

// 👉 Melhoram a **acessibilidade**, não alteram o visual.

// ---

// ### 🔹 `data-*`

// São atributos personalizados para **armazenar dados extras** em elementos HTML.

// Exemplo:

// ```html
// <div data-id="123" data-user="Joao"></div>
// ```

// Podem ser acessados via JavaScript:

// ```js
// element.dataset.id
// ```

// 👉 Servem para guardar informações usadas por scripts.

// Sim — **`data-*` ainda é muito usado** 👍
// Mas ele **não substitui** `getElementBy...`, porque servem para coisas diferentes.

// ### 🔹 `data-*`

// Serve para **guardar dados no HTML**.

// Exemplo:

// ```html
// <button data-id="42">Editar</button>
// ```

// ```js
// button.dataset.id // "42"
// ```

// Muito comum em:

// * Componentes JS
// * Frameworks
// * Integração com backend
// * Marcar comportamento (`data-action="delete"`)

// ---

// ### 🔹 `getElementById`, `querySelector`, etc.

// Servem para **selecionar elementos no DOM**.

// Exemplo:

// ```js
// document.getElementById("meuBotao")
// document.querySelector("[data-id='42']")
// ```

// ---

// ### ✅ Resumo direto

// * `data-*` → guarda dados
// * `getElementBy...` → busca elementos

// Eles **trabalham juntos**, não competem.

// Inclusive hoje é comum usar:

// ```js
// document.querySelector("[data-action='delete']")
// ```

// Ou seja: **sim, `data-*` é bem moderno e ainda muito usado.**
