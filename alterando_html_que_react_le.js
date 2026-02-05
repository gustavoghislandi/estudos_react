// Usei isto para alterar onde renderiza o react. Fiz um teste.

// Alterei em node_modules/react-scripts/config/paths.js

//----------------

// Perfeito, agora estamos na camada certa. Vou te mostrar onde isso está definido no CRA internamente, linha por linha, sem rodeios.

// Estrutura do CRA (após npx create-react-app my-app)

    // my-app/
    // ├─ node_modules/
    // │  └─ react-scripts/
    // ├─ public/
    // │  └─ index.html
    // ├─ src/
    // │  └─ index.js
    // ├─ package.json

// O arquivo public/index.html é literalmente um arquivo físico que você pode abrir no seu projeto. É a base do template.

// Mas você quer saber onde o CRA “aponta” para ele internamente.

// 1. Webpack Dev Server (modo npm start)

// Dentro de node_modules/react-scripts/config/webpackDevServer.config.js:

    const paths = require('./paths');

    // devServer: {
    //     static: {
    //         directory: paths.appPublic,  // <<< aqui está o public
    //     },
    //     historyApiFallback: true,     // faz SPA usar index.html
    //     }

// paths.appPublic é definido em node_modules/react-scripts/config/paths.js:

    const path = require('path');
    const fs = require('fs');

    const appDirectory = fs.realpathSync(process.cwd());
    const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

    module.exports = {
        appPublic: resolveApp('public'),  // <<< aqui está
        appHtml: resolveApp('public/index.html'),  // <<< aqui está o index.html
        // ...
    }

// ✅ Conclusão:

// public → paths.appPublic
// public/index.html → paths.appHtml

// Então, CRA sabe que seu HTML está em public/index.html via essa configuração.

// 2. Webpack Build (modo npm run build)

// Ainda em CRA, webpack usa o plugin HtmlWebpackPlugin:

    new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,  // <<< usa public/index.html
    })

// Ou seja:

// paths.appHtml → public/index.html é o template do HTML final
// O bundle JS é injetado nele automaticamente.

// 3. Resumo técnico

// Arquivo físico: public/index.html
// Configuração CRA:
// node_modules/react-scripts/config/paths.js → define appPublic e appHtml
// webpackDevServer.config.js → serve appPublic
// webpack.config.js → usa HtmlWebpackPlugin({ template: appHtml })

// Ou seja, se você quiser mudar o arquivo ou a pasta, teria que alterar paths.js ou ejectar (npm run eject) para editar webpack.config.js diretamente.
