// Em Vite, arquivos em public não podem ser importados.
// '/public' é só para URLs estáticas.
// Para importar, coloque o arquivo em src e use import.
// Para usar como URL, mantenha em public e use "/arquivo.svg".

// Com React puro (ex: Create React App) geralmente dá para importar da pasta public.
// Com Vite, não. '/public' só serve para URL estática.
// Para importar, o arquivo precisa estar em src.

//----------

// Por que a pasta public só serve URL estática?

    // Porque o Vite não processa os arquivos dentro de public.
    // Ele só copia esses arquivos para a pasta final e serve exatamente como estão,
    // sem transformar, sem gerar hash, sem importar como módulo JS.

// Então o Vite não consegue tratar esses arquivos como algo que pode ser importado (com import), porque não faz build deles como módulos.

// O que é uma URL estática?
    // Uma URL estática é um caminho direto para o arquivo, sem passar pelo sistema
    // de módulos do Vite.

    // Exemplo:

        <img src="/vite.svg" />

        // Aqui, o arquivo já existe no servidor como /vite.svg, e o navegador só vai buscar esse caminho.

// Isso é diferente de:

    // import logo from "./vite.svg";
    // Nesse caso, o bundler precisa processar o arquivo, gerar hash, otimizar, etc.
    // Isso só acontece com arquivos em src.

// Resumo rápido:

    // public = arquivo já pronto, servido diretamente (URL estática)
    // src = arquivo que pode ser importado e processado pelo Vite

// Tem diferença de DESEMPENHO?

// Sim, tem diferença, mas pequena:

    // public (URL estática): é servido direto, sem processamento → mais rápido no build
    // src (import): é processado (hash, otimização) → pode aumentar build, mas melhora cache e otimização

// Ou seja:

    // public é mais simples e rápido
    // src entrega melhor performance em produção

// Então, PARA PRODUÇÃO, SEMPRE 'IMPORT' NO VITE.