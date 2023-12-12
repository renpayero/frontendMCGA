import { useAuth } from "../context/AuthContext";
import "../stylesheets/navbar/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <nav>
      <Link to="/" className="link-img userNav"><img src="logo.png" alt="Logo"></img>
        {user && (
          <>
            <FontAwesomeIcon className="iconUserNav" icon={faCircleUser} /> <span className="userNameNav">{capitalizeFirstLetter(user.username)}</span>
          </>
        )}
      </Link>

      <ul>
        {
          isAuthenticated ? (
            <>
              {/* Estos se renderizan para desktop */}
              <li className="navWord"> <Link to="/products">Productos</Link> </li>
              <li className="navWord"> <Link to="/add-product">Agregar producto </Link> </li>
              <li className="navWord"> <Link to="/" onClick={() => logout()}>Cerrar sesión</Link> </li>
              {/* Los tres de abajo solo se renderizan si la pantalla es menor a 600px establecido en el media querie de css */}
              <li className="navIcon"><Link to="/products"> <FontAwesomeIcon icon={faClipboard} /></Link> </li>  
              <li className="navIcon"><Link to="/add-product"> <FontAwesomeIcon icon={faPlus} /> </Link> </li>  
              <li className="navIcon"><Link to="/" onClick={() => logout()}> <FontAwesomeIcon icon={faCircleXmark} /></Link> </li>  
            </>

          ) : (
            <>
              <li><Link to="/login">Iniciar sesión </Link></li>
              <li><Link to="/register">Registrarse </Link></li>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar