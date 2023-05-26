import Contacto from "./pages/Contacto";
import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/components/Contacto" element={<Contacto/>} />
          
    </Routes>
  </BrowserRouter>
  )
}

export default App
