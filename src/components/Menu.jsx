
import { Link } from "react-router-dom"
import BotonModo from "./BotonModo"

const Menu = () => {
  return (
    <div>
      <BotonModo />

      <ul>
        <li><Link to="welcome">Bienvenida</Link></li>
        <li><Link to="contacts">Contactos</Link></li>
      </ul>
      <button><Link to="/">Vuelve a casa</Link></button>
    </div>
  )
}

export default Menu