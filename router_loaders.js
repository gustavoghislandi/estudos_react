// Router loaders são funções usadas em bibliotecas de roteamento (principalmente React Router) para carregar dados antes de renderizar uma rota.

// Ou seja: o componente só renderiza depois que os dados chegam, evitando “loading” manual dentro do componente.

// Como funciona (em 1 frase)

    // O loader roda antes do componente, busca dados e os entrega para a rota.

// Exemplo simples (React Router)

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const res = await fetch("/api/posts");
      return res.json();
    },
  },
]);

import { useLoaderData } from "react-router-dom";

function Home() {
  const posts = useLoaderData();
  return <div>{posts.length} posts</div>;
}

// Por que usar loaders?

    // Dados são carregados antes de renderizar
    // Evita estados de loading espalhados
    // Ajuda no SEO (com SSR)
    // Facilita roteamento baseado em dados

// Quando usar

    // Rotas que precisam buscar API antes de renderizar
    // Páginas com conteúdo inicial importante
