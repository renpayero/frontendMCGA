import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../stylesheets/register/register.css'
import "../stylesheets/register/input.css"
import "../stylesheets/register/button.css"
import "../api/auth.js"
import { useAuth } from '../context/authContext.jsx';
import { useNavigate } from "react-router-dom";

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
    <div className='divRegister'>
      <form className='formRegister' onSubmit={onSubmit}>
      {
        registerErrors.length > 0 && <div className='errorsBack'>{registerErrors[0]}</div>
      }
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" {...register('username', {required: true})}/>
          {errors.username && <p className='errorsInputs'>Nombre de usuario es requerido</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", {required:true})} />
          {errors.email && <p className='errorsInputs'>Email es requerido</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" {...register("password", {required: true})} />
          {errors.password && <p className='errorsInputs'>contraseña es requerida</p>}
        </div>
        <button type='sumbit'>
          <span>Registrarse</span>
        </button>
      </form>
    </div>
  )
}

export default RegisterPage