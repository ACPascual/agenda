
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="welcome">Bienvenida</Link></li>
        <li><Link to="contacts">Contactos</Link></li>
        {/* <li><Link to="character/4">Ver el pj 4</Link></li> */}
      </ul>
      <button><Link to="/">Vuelve a casa</Link></button>
    </div>
  )
}

export default Menu