import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Crea un contexto para compartirlo entre los componentes de la app
export const AuthContext = createContext();

//Custom hook para no tener que andar importando useContext en todos los archivos
export const useAuth = () => {
  const context = useContext(AuthContext); //Usamos el context
  if (!context) {
    throw new Error("useAuth debería estar dentro del provider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  //Recibe un usuario y llama a la funcion en api/auth.js para mandar al back el nuevo usuario a registrar.
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return notify("error", error.response.data[0]);
      }
      return notify("error", error.response.data.message);
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      //Hay errores que se devuelven en objetos y otros como arrays, entonces transformamos todo a array, porque el useState errors es un array
      if (Array.isArray(error.response.data)) {
        return notify("error", error.response.data[0]);
      }
      return notify("error", error.response.data.message);
    }
  }

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  //Si se muestra un error en el HTML se borra desp de 4 segundos del html.
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors])

  //Apenas se carga el componente se buscan las cookies y se mandan al back para verificar que estemos teniendo el token valido y podemos acceder a las rutas privadas
  useEffect(() => {
    const checkLogin = async () => { //Funcion asincrona para poder usar await
      const cookies = Cookies.get(); //Busca las cookies en el navegador

      if (!cookies.token) { //Si no hay token en las cookies, no está autenticado
        setIsAuthenticated(false); //establecemos el estado de autenticación en false
        setLoading(false); //establecemos el estado de loading en false
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token); //Si hay token en las cookies, se manda al back para verificar que sea valido
        if (!res.data) {  //Si no es valido, no está autenticado
          setIsAuthenticated(false);
          setLoading(false); //ya no esta cargando porque ya se verifico que no hay token
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        return setLoading(false); //establace el estado de loading 
        //en false porque ya paso las validaciones y permitimos
        // que cargue la pagina
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, [])

  //Dependiendo del tipo de notificacion que le pasamos muestra un una u otra, de de error o de success.
  const notify = (tipo, mensaje) => {
    if (tipo === "success") {
      toast.success(mensaje);
    }

    if (tipo === "error") {
      toast.error(mensaje);
    }
  }


  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errors,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}
