// npm (Node Package Manager) é um repositório público de pacotes JavaScript
// Qualquer pessoa ou empresa pode publicar código reutilizável lá
// Esses pacotes ficam versionados e disponíveis para outros projetos
// npm também é o serviço/organização que hospeda e distribui esses pacotes
// Site oficial do repositório: https://www.npmjs.com

// Por baixo dos panos, quando você roda npm install, acontece isso:

    // O npm lê o package.json
    // Para cada dependência, ele faz requisições HTTP para o registro do npm
    // O registro responde com metadados do pacote (versões, dependências, URLs dos arquivos)
    // O npm baixa os arquivos .tgz do pacote
    // Salva tudo em node_modules/ e atualiza o package-lock.json

// 📡 URL principal que o npm consulta:

    // https://registry.npmjs.org

// Exemplo real:

    // https://registry.npmjs.org/react

        // A partir daí, o npm descobre onde baixar o código do pacote.

    // Quando o npm acessa:

        // https://registry.npmjs.org/react

    // ele não baixa o código ainda.

    // 👉 Essa URL retorna um JSON com metadados, tipo:

        // versões disponíveis
        // dependências
        // URL exata do arquivo do pacote

    // Dentro desse JSON tem algo como:

        // dist.tarball:
        // https://registry.npmjs.org/react/-/react-18.2.0.tgz

    // 📦 É esse .tgz que contém o código.

    // Então o fluxo é:

        // npm pede informações do pacote (JSON)
        // o JSON diz onde está o arquivo
        // npm baixa o arquivo
        // extrai em node_modules

    // Ou seja: a primeira URL é um índice, não o código em si.

// Ao acessar ao URL haverá dados assim:




/*
_id: "react",                                               // ID interno do pacote no registry
_rev: "5088-5ac294f44fb029242f72e851a4807d0b",              // versão do documento no banco de dados do registry
name: "react",                                              // nome do pacote
dist-tags: { 
  beta: "19.0.0-beta-26f2496093-20240514",                  // tag para versão beta
  rc: "19.0.0-rc.1",                                        // tag para release candidate
  latest: "19.2.4",                                         // tag da versão padrão instalada pelo npm
  … 
},
versions: { 
  "0.0.1": {…}, 
  "0.0.2": {…}, 
  "0.0.3": {…}, 
  … 
},                                                          // lista de todas as versões publicadas do pacote, cada uma com seu metadata
time: { 
  created: "2011-10-26T17:46:21.942Z",                      // data de criação do pacote
modified: "2026-01-30T16:23:28.171Z",                       // última modificação do registro
  "0.0.1": "2011-10-26T17:46:22.746Z",                      // data de publicação de cada versão
  … 
},
bugs: { url: "https://github.com/facebook/react/issues" },  // link para reportar bugs
license: "MIT",                                             // licença do pacote
homepage: "https://react.dev/",                             // página oficial do pacote
keywords: [ "react" ],                                      // palavras-chave para busca
repository: { 
  url: "git+https://github.com/facebook/react.git",         // repositório do código-fonte
  type: "git",                                              // tipo de repositório
  directory: "packages/react"                               // subdiretório dentro do repositório, se houver
},
description: "React is a JavaScript library for building user interfaces.", // descrição do pacote
maintainers: [ {…}, {…} ],                                                  // lista de responsáveis pelo pacote
readme: "",                                                                 // conteúdo do README (nem sempre vem completo)
readmeFilename: "",                                                         // nome do arquivo README
users: { asa: true, ich: true, jal: true, … }                               // usuários que marcaram este pacote como usado/favorito

*/

// npm install <pacote>
// npm lê package.json e package-lock.json
// npm não precisa ter todos os pacotes localmente

// URL que o npm consulta para checar o pacote:
const registryUrl = "https://registry.npmjs.org/<pacote>"; 
// Exemplo real:
const reactRegistry = "https://registry.npmjs.org/react";

// Fluxo resumido:
// 1️⃣ npm faz GET no registryUrl
// 2️⃣ Recebe JSON com metadados:
//      - versões disponíveis
//      - dependências
//      - URL do arquivo .tgz
// 3️⃣ npm baixa o .tgz do pacote (ex: react-19.2.4.tgz)
// 4️⃣ Extrai em node_modules/
// 5️⃣ Atualiza package-lock.json

//--------------------------------------------------------------------------------------------------------------------


// ========================================================
// Resumão: npm, package.json, package-lock.json e bin
// ========================================================

// ----------------------
// package.json
// ----------------------
// Define seu projeto/pacote, scripts e dependências
// Campos obrigatórios: "name", "version"
// Campos opcionais: description, main, scripts, repository, keywords, author, license, dependencies, devDependencies

const packageJsonExample = {
  name: "meu-app", // obrigatório
  version: "1.0.0", // obrigatório
  description: "Exemplo resumido de projeto", // opcional
  main: "index.js", // arquivo principal
  scripts: {
    dev: "vite", // chama o executável 'vite' do node_modules/.bin
    build: "vite build", // build usando vite
    lint: "eslint .", // lint do projeto
  },
  dependencies: {
    react: "^19.2.4", // vai para o build final e roda no navegador
    "react-dom": "^19.2.4",
  },
  devDependencies: {
    vite: "^7.3.1", // só necessário para desenvolvimento (build, dev server)
    eslint: "^9.39.1",
  },
  repository: {
    type: "git",
    url: "https://github.com/usuario/meu-app.git",
  },
  license: "MIT",
};

// ----------------------
// package-lock.json
// ----------------------
// Trava versões exatas de todas as dependências e sub-dependências
// Garante que todos que rodarem npm install terão o mesmo resultado

const packageLockExample = {
  name: "meu-app",
  version: "1.0.0",
  lockfileVersion: 3, // versão do formato lockfile
  requires: true, // indica que depende de outros pacotes
  packages: {
    "": { // raiz do projeto
      name: "meu-app",
      version: "1.0.0",
      dependencies: {
        react: "^19.2.4", // referência ao package.json
        "react-dom": "^19.2.4",
      },
      devDependencies: {
        vite: "^7.3.1",
        eslint: "^9.39.1",
      },
    },
    "node_modules/react": { // pasta do pacote instalado
      version: "19.2.4", // versão exata
      resolved: "https://registry.npmjs.org/react/-/react-19.2.4.tgz", // URL de download
      integrity: "sha512-abc123...", // hash para verificar integridade
      dependencies: {}, // sub-dependências do react
    },
    "node_modules/vite": { // pacote dev
      version: "7.3.1",
      bin: {
        vite: "bin/vite.js", // arquivo executável chamado pelos scripts
      },
      dependencies: {
        esbuild: "^0.27.0", // sub-dependências necessárias para o vite funcionar
      },
    },
  },
};

// ----------------------
// Como o script 'dev' funciona
// ----------------------

// package.json -> scripts: { dev: "vite" }
// npm run dev -> procura "vite" em node_modules/.bin
// node_modules/.bin/vite -> link para node_modules/vite/bin/vite.js
// O arquivo vite.js é executado pelo Node.js

// Exemplo:
const execScriptExample = `
npm run dev
// -> chama node_modules/.bin/vite
// -> executa vite/bin/vite.js
`;

// ----------------------
// dependencies vs devDependencies
// ----------------------

/*
dependencies -> necessárias no runtime / produção
devDependencies -> necessárias apenas no desenvolvimento (build, lint, testes)
Exemplo:
*/

const depsExample = {
  dependencies: {
    react: "^19.2.4", // precisa estar no bundle final
  },
  devDependencies: {
    vite: "^7.3.1", // só build / dev server
  },
};

// ----------------------
// Como ter múltiplas versões do mesmo pacote
// ----------------------

/*
// npm não permite instalar 2 versões do mesmo pacote com o mesmo nome na mesma pasta
// Solução: usar alias ou monorepo

npm install meu-projeto-v1@npm:meu-projeto@1.0.0
npm install meu-projeto-v2@npm:meu-projeto@1.0.1

// Depois importar:
import v1 from "meu-projeto-v1";
import v2 from "meu-projeto-v2";
*/

// ----------------------
// Como remover dependência e sub-dependências órfãs
// ----------------------

/*
npm uninstall pacote       -> remove o pacote do node_modules e package.json
npm prune                  -> remove pacotes órfãos não listados no package.json
npm ls pacote              -> verifica se ainda está instalado
*/

// ----------------------
// Fluxo resumido de instalação
// ----------------------

/*
package.json -> define quem você quer
npm install -> npm lê package.json e package-lock.json
npm acessa https://registry.npmjs.org/<pacote> -> recebe JSON de metadados
npm baixa arquivo .tgz -> node_modules/<pacote>
package-lock.json -> registra versão exata, integridade e dependências
node_modules/.bin/<comando> -> executável que scripts chamam
*/

// ========================================================
// FIM DO RESUMÃO
// ========================================================
