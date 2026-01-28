// SWC (Speedy Web Compiler)

// No React + Vite, SWC é o transpilador que substitui o Babel.

// Em poucas palavras:

    // SWC = compilador em Rust
    // Converte JSX / TS / TSX → JavaScript
    // Muito mais rápido que Babel

// No Vite, ele aparece assim:

    // import react from '@vitejs/plugin-react-swc';

// O que muda na prática?

    // ⚡ Dev server e HMR mais rápidos
    // 🚀 Build mais rápido
    // ❌ Menos plugins que Babel (menos “mágica”)

// Quando usar?

    // Quase sempre em projetos React modernos
    // Se você não depende de plugins Babel muito específicos

// 👉 Resumo direto:

    // SWC no Vite = React mais rápido, com menos custo de build.