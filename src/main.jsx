import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import Ayuda from './pages/Ayuda.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Proyectos from './pages/Proyectos.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/ayuda' element={<Ayuda />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/proyectos' element={<Proyectos />} />
    </Routes>
  </BrowserRouter>
)
