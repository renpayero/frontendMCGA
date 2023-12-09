import { useAuth } from "../context/AuthContext";
import "../stylesheets/navbar/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const element = <FontAwesomeIcon icon={faCircleUser} />
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <nav>
      <Link to="/" className="link-img userNav"><img src="../../public/logo.png" alt="Logo"></img>
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
              <li><Link to="/products">Productos</Link></li>
              <li><Link to="/add-product">Agregar producto </Link></li>
              <li><Link to="/" onClick={() => logout()}>Cerrar sesión</Link></li>
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