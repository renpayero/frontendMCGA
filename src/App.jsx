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
            <footer>
              <div className="footer-content">
                <div className="about-us">
                  <h2>Sobre nosotros</h2>
                  <p>MPRepuestos es un negocio de repuestos de refrigeracion, ferreteria, lavarropas, secarropas y microhondas de alta calidad. Nos enorgullece ofrecer los mejores productos y servicios a nuestros clientes.</p>
                </div>
                <div className="contact-info">
                  <h2>Información de contacto</h2>
                  <p>Teléfono: <a href="tel:+542477465669">+54 2477465669</a></p>
                  <p>Email: <a href="mailto:mauropayero@gmail.com">mauropayero@gmail.com</a></p>
                </div>
                <div className="credits">
                  <h2>Créditos</h2>
                  <p>Esta página fue desarrollada por Renzo Payero y Estefano Bulgari para el negocio de repuestos MPRepuestos de Mauro Payero.</p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2023 - Todos los derechos reservados</p>
              </div>
            </footer>
          </main>
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App