// Roteamento (Routing)

// Sem usar um framework, ou uma lib de roteamento, o rotamento pode ser feito com 'useState'.
// Porém, ele não cria as paths, as páginas são acessadas sempre no mesmo link,
// então você não pode compartilhar ou salvar links diretos para páginas específicas.

import {useState} from 'react';

import Home from './Home';
import Dashboard from './Dashboard';

export default function App() {
  // ❌ Routing in state does not create URLs
  const [route, setRoute] = useState('home');
  return (
    <div>
      {route === 'home' && <Home />}
      {route === 'dashboard' && <Dashboard />}
    </div>
  )
}

// Já com uma biblioteca de rotamento, como React Router or Tanstack Router,
// Você pode compartilhar links das páginas, o que, evidentemente é uma vantagem.

import {RouterProvider, createBrowserRouter} from 'react-router';

import Home from './Home';
import Dashboard from './Dashboard';

// ✅ Each route has it's own URL
const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/dashboard', element: <Dashboard />}
]);

export default function App() {
  return (
    <RouterProvider value={router} />
  )
}

// Também vai permitir fazer rotas aninhadas, route guards e route transitions, que são mais difíceis de implementar sem uma bibliotecade roteamento.

// ROTAS ANINHADAS

// Exemplo de sub-rota dentro de uma sub-rota, usando o React Router:

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';  // Sub-rota de Profile
import Privacy from './Privacy';    // Sub-rota de Settings

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />}>
            <Route path="settings" element={<Settings />}>
              <Route path="privacy" element={<Privacy />} /> {/* Sub-rota dentro de settings */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}


// Explicação:

    // O Profile tem uma sub-rota settings.

    // O settings tem outra sub-rota chamada privacy.

    // Neste exemplo, ao acessar /profile/settings/privacy, a página de Privacy será renderizada.

// ROUTE GUARDS (Proteção de Rotas)

// Impedir o acesso a uma rota sem autenticação, por exemplo:

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" />;
}

function App() {
  const isAuthenticated = false; // Mudando isso para 'true' permitiria o acesso

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>
  );
}


// Se isAuthenticated for false, a rota /dashboard redireciona para o login.

// TRANSIÇÃO COM FADE

// A animação fade pode ser vista se você adicionar uma classe CSS para criar o efeito. Aqui está o que você pode fazer para ver a transição de fade funcionando:

// Adicione as transições no seu CSS:

/* CSS para a transição fade */
    // .fade-enter {
    // opacity: 0;
    // }

    // .fade-enter-active {
    // opacity: 1;
    // transition: opacity 300ms;
    // }

    // .fade-exit {
    // opacity: 1;
    // }

    // .fade-exit-active {
    // opacity: 0;
    // transition: opacity 300ms;
    // }


// No seu componente React, a transição de fade vai ser aplicada sempre que você mudar de uma rota para outra. O componente será gradualmente mostrado ou escondido.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <Router>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" unmountOnExit>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

// Como funciona a transição fade:

    // .fade-enter define o estado inicial do componente (opacidade 0, invisível).

    // .fade-enter-active define o estado final, tornando o componente visível (opacidade 1) e adicionando a transição (300ms).

    // .fade-exit e .fade-exit-active fazem o componente desaparecer com o mesmo efeito, quando a rota for trocada.

// Como ver funcionando:

    // Se você abrir a aplicação no navegador e trocar entre as rotas, verá uma transição suave de fade entre as páginas.