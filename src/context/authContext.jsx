import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import Cookies from "js-cookie";

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

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  //Recibe un usuario y llama a la funcion en api/auth.js para mandar al back el nuevo usuario a registrar.
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data)
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      // console.log(error.response.data)
      setErrors(error.response.data)
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
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
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
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const res = await verifyTokenRequest(cookies.token);

          if (!res.data) {
          return setIsAuthenticated(false);
          }
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    }
    checkLogin();
  }, [])
  

  return (
    <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, errors }}>
      { children }
    </AuthContext.Provider>
  )
}