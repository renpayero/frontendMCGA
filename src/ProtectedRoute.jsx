import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext.jsx"

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading){
    return <h1>Loading...</h1>
  }
  //Si no está autenticado redirecciona al login.
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet/>;
  
}

export default ProtectedRoute