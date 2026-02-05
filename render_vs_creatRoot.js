/*
RESUMO — React render vs createRoot (conciso)

ReactDOM.render (React legado, <=17):
- Execução síncrona e sequencial
- Uma render começa e vai até o fim
- Não pode pausar nem priorizar
- Pode travar a UI
- Não é concorrência nem paralelismo

createRoot (React 18+):
- Ativa renderização concorrente
- React pode pausar, priorizar e retomar renders
- Interface mais fluida
- Continua em uma única thread
- Não é paralelismo (nada roda ao mesmo tempo)

Conceitos-chave:
- Concorrência: dividir o trabalho e escolher quando executar cada parte
- Paralelismo: executar coisas ao mesmo tempo (React NÃO faz isso)
- Commit no DOM continua síncrono

Resumo final:
React 18 não faz mais coisas ao mesmo tempo,
faz a coisa certa no momento certo.
*/


ReactDOM.render(<App />, container);      // legado
ReactDOM.createRoot(container).render(<App />); // React 18+

// Ou mais legível no React 18+:

const root2 = ReactDOM.createRoot(container); // Não sei usa mais ReactDOM, porque já pega do react-dom/client (veja abaixo)
root.render(<App />);


// Agora (React 18)

// O React separou melhor as responsabilidades.
// A função createRoot não fica mais em react-dom, e sim em react-dom/client:

    import { createRoot } from "react-dom/client";

    const root = createRoot(document.getElementById("root"));
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );

// Por isso o tutorial não usa ReactDOM diretamente — ele importa só o que precisa.

