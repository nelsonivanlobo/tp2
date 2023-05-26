import Joaquin from "../assets/perfil.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
            <h1>Facundo Joaquin Gil</h1>
            <img src={Joaquin} alt="" className="imagen_header"/>
            <div className='nav'>
                  <nav className="navbar navbar-light bg-light">
                  <Link to="/components/Maincontacto  " className='boton_contacto'>Contacto</Link>
                  <Link to="/" className='boton_contacto'>volver a inicio</Link>
                  </nav>

              </div>

    </div>
  )
}

export default Header