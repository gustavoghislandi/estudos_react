import './App.css'
import ComponenteTeste from './components/ComponenteTeste'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import Vite from './pages/Vite/Vite'

function App() {
  return (
    <>
    <p>Eu já sei mexer algo, mas vamos por partes.</p>
    <ComponenteTeste />
      <Vite />
      <RouterProvider router={router} />
    </>
  )
}

export default App
