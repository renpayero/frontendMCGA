import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.jsx";

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductFormPage from './pages/ProductFormPage.jsx';
import CrudPage from './pages/CrudPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          {/* Rutas privadas */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/add-product" element={<ProductFormPage/>} />
            <Route path="/product/:id" element={<ProductFormPage/>} />
            <Route path="/crud" element={<CrudPage/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  )
}

export default App