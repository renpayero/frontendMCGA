import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.jsx";

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductFormPage from './pages/ProductFormPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { ProductsProvider } from './context/ProductsContext.jsx';
import Navbar from './components/Navbar.jsx';
import "./index.css"
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Rutas privadas */}
              <Route element={<ProtectedRoute />}>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/add-product" element={<ProductFormPage />} />
              </Route>
            </Routes>
          </main>
            <Footer/>
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App