import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./context/authContext.jsx";

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/add-product" element={<h1>ADD PRODUCT</h1>} />
          <Route path="/crud" element={<h1>MP Repuestos</h1>} />
        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  )
}

export default App