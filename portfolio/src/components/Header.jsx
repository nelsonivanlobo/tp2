import Nelson from "../assets/nelson.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="main_header">
            <h1>Nelson Lobo</h1>
            <img src={Nelson} alt="" className="imagen_header"/>
            <div className='nav'>
                  <nav className="navbar">
                  <Link to="/components/Maincontacto  " className='boton_contacto'>Contacto</Link>
                  <Link to="/" className='boton_contacto'>volver a inicio</Link>
                  </nav>

              </div>

    </div>
  )
}

export default Header