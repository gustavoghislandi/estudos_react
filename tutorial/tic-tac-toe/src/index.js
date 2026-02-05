// Este arquivo é a ponte entre o componente criado em App.js e o web browser.

import { StrictMode } from "react"; // Importa React (é como import React from "react", para depois usar <React.StrictMode - que não se faz mais.)
import { createRoot } from "react-dom/client"; // Importa biblioteca que comunica com web browsers (React DOM)
import "./styles.css";

import App from "./App";


// Isto junta as peças restantes e as injeta em /public/index.html . Lá dentro tem uma div com o id chamado "root" e é lá que a renderização é feita a partir do código abaixo.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// OBS: Alterei os index.html para teste.html em node_modules/react-scripts/config/paths.js . Então o servidor serve o teste.html e não mais o index.html. A pasta permanece a /public.


















/*
const root = ReactDOM.createRoot(container);
root.render(<App />);


Agora (React 18)

O React separou melhor as responsabilidades.
A função createRoot não fica mais em react-dom, e sim em react-dom/client:

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

Por isso o tutorial não usa ReactDOM diretamente — ele importa só o que precisa.
*/