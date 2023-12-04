import { createContext, useContext, useState } from 'react';
import { registerRequest } from '../api/auth.js';

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

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
      { children }
    </AuthContext.Provider>
  )
}