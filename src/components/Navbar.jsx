import "../stylesheets/navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src="../../public/logo.png" alt="Logo"></img>
      <h2><Link>Productos</Link></h2>
      <ul>
        <li><Link to="/login">Login </Link></li>
        <li><Link to="/register">Register </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar