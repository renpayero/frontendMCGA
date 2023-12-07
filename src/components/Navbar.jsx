import { useAuth } from "../context/AuthContext";
import "../stylesheets/navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav>
      <Link to="/" className="link-img"><img src="../../public/logo.png" alt="Logo"></img></Link>
      <h2><Link>Productos</Link></h2>
      <ul>
      {
        isAuthenticated ? (
          <>
          <li>Bienvenido {user.username}</li>
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