import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../stylesheets/form/form.css';
import "../stylesheets/form/button.css";
import "../stylesheets/form/input.css";
import "../stylesheets/form/errors.css";
import "../api/auth.js";
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products");
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async values => {
    signup(values); //Funcion que se ejecuta en el context
  })

  return (
    <div className='divForm'>
      <form className='form' onSubmit={onSubmit}>
      {
        registerErrors.length > 0 && <div className='errorsBack'>{registerErrors[0]}</div>
      }
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          {errors.username && <p className='errorsInputs'>Nombre de usuario es requerido</p>}
          <input type="text" {...register('username', {required: true})}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {errors.email && <p className='errorsInputs'>Email es requerido</p>}
          <input type="email" {...register("email", {required:true})} />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          {errors.password && <p className='errorsInputs'>contraseña es requerida</p>}
          <input type="password" {...register("password", {required: true})} />
        </div>
        <button className='btnForm' type='sumbit'>
          <span>Registrarse</span>
        </button>
        <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </form>
    </div>
  )
}

export default RegisterPage