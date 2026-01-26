// Fetching e outro motivo para usar um framework

// Basicamente velocidade de renderização

// Data Fetching

// Outro problema comum é uma cadeia sequencial de requisições (network waterfalls),
// que acontecem quando o app só começa a buscar os dados depois que o componente já foi carregado e renderizado.

export default function Dashboard() {
  const [data, setData] = useState(null);

  // ❌ Fetching data in a component causes network waterfalls
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}

// Ou seja:
// 1️⃣ o JavaScript baixa
// 2️⃣ o componente renderiza
// 3️⃣ só então o fetch roda

// Isso cria uma cadeia sequencial de requisições, em vez de tudo acontecer em paralelo, deixando a tela mais lenta para o usuário.

// Pra resolver isso pode-se usar uma biblioteca de fetching, tais como React Query, SWR, Apollo, ou Relay,
// que dão opções de 'prefetch data' (pré-busca de dados), 
// assim a requisição começa antes de o componente renderizar.

// Essas bibliotecas funcionam melhor quando integradas ao seu padrão de “carregador” de roteamento para especificar dependências de dados no nível da rota, o que permite ao roteador otimizar suas buscas de dados:

export async function loader() {
  const response = await fetch(`/api/data`);
  const data = await response.json();
  return data;
}

// ✅ Fetching data in parallel while the code is downloading
export default function Dashboard({loaderData}) {
  return (
    <div>
      {loaderData.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}

// O router faz as buscas paralelamento à renderização.
// Isso é melhor visto aqui:

import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

// 1️⃣ Loader da rota
async function loader() {
  const response = await fetch("/api/data"); // busca dados da API
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data; // 🔹 Esse return será recebido pelo componente
}

// 2️⃣ Componente que consome os dados
function Dashboard() {
  const loaderData = useLoaderData(); // 🔹 Aqui entra o return do loader
  return (
    <div>
      {loaderData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// 3️⃣ Configuração do router conectando loader e componente
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: loader, // 🔹 Aqui o loader é "linkado" à rota
  },
]);

// 4️⃣ App principal
export default function App() {
  return <RouterProvider router={router} />;
}

// O createBrowserRouter() faz o fetch de todos os loaders antes de (ou paralelamente a) renderizar.
//  É comportamento padrão e esperado dele.

// No React Router v6.4+, o comportamento padrão do createBrowserRouter é:

    // Quando o usuário entra em uma rota, o router executa todos os loaders associados a essa rota e às rotas “ancestrais” antes de renderizar o componente.
    // Esses loaders são chamados automaticamente pelo router.
    // Se houver mais de um loader (por exemplo, rota pai e rota filha), eles podem ser executados em paralelo, não em série, para acelerar o carregamento.
    // Só depois que os loaders resolvem suas promessas, o componente é renderizado.

// Ou seja:

    // O fetch não acontece dentro do componente (como em useEffect)
    // O componente recebe os dados prontos via useLoaderData()
    // Isso previne network waterfalls, porque você não está esperando a renderização para começar o fetch.


//----------------------------------------------------------------------------------------------------

// Exemplo do ChatGPT:

import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

/* -----------------------------------------------------------
  ❌ Exemplo problemático: fetch dentro do componente
  -> causa network waterfalls
----------------------------------------------------------- */
export function DashboardWithWaterfall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Problema:
  // 1️⃣ Componente renderiza
  // 2️⃣ Só então o fetch acontece
  // 3️⃣ Se houver múltiplos fetches sequenciais, cria-se um "waterfall"
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

/* -----------------------------------------------------------
  ✅ Solução com loader + React Router
  -> fetch acontece antes da renderização
----------------------------------------------------------- */

// 1️⃣ Loader da rota
async function dashboardLoader() {
  const response = await fetch("/api/data");
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data; // 🔹 Este return será passado para o componente
}

// 2️⃣ Componente que consome os dados do loader
function Dashboard() {
  const loaderData = useLoaderData(); // 🔹 Aqui entra o retorno do loader
  return (
    <div>
      {loaderData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// 3️⃣ Configuração do router conectando loader e componente
const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader, // 🔹 Router chama o loader antes da renderização
  },
]);

// 4️⃣ App principal
export default function App() {
  return <RouterProvider router={router2} />;
}

/* -----------------------------------------------------------
  🔹 Comportamento do React Router v6.4+:

  - Quando o usuário entra em uma rota, o router executa todos
    os loaders da rota e de rotas “ancestrais” antes de renderizar
  - Esses loaders podem ser executados em paralelo
  - Só depois que os loaders resolvem suas promessas, o componente é montado
  - O componente usa useLoaderData() para acessar os dados
  - Isso previne network waterfalls, porque o fetch não espera
    a renderização do componente
----------------------------------------------------------- */
