// Posso usar qualquer Biblioteca compatível com React com Vite?

// Na prática, sim — quase qualquer biblioteca React funciona com Vite, porque o Vite usa ES Modules e é bem compatível com o ecossistema React.

// Mas há exceções, principalmente quando a biblioteca:

    // ❌ Pode dar problema
    // Depende de Node APIs (fs, path, crypto etc.)

// Ex.: bibliotecas feitas para backend

    // Usa CommonJS sem suporte a ESM
    // Vite consegue lidar, mas às vezes precisa de ajustes
    // Depende de Babel plugins específicos
    // Se a lib só funciona com Babel, pode dar conflito
    // Tem SSR/Next.js específico

// Algumas bibliotecas só funcionam bem em Next.js, não no Vite

// ✅ Normalmente funciona sem problema

    // UI libs (MUI, Chakra, Ant Design)
    // State (Zustand, Redux, Jotai)
    // Routers (React Router)
    // Query (TanStack Query)
    // Form (React Hook Form)

// Dica prática:

    // Se a biblioteca é React + browser, tende a funcionar.
    // Se ela é Node-only ou Next.js-only, pode dar erro.