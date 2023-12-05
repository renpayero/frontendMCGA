import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    signin(data)
  })

  return (
    <div>
      <form className='formRegister' onSubmit={onSubmit}>
      {
        signinErrors.length > 0 && <div className='errorsBack'>{signinErrors[0]}</div>
      }
      <h1>Iniciar sesión</h1>
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
        <button type='sumbit'>
          <span>Iniciar sesión</span>
        </button>
      <p>¿No tienes una cuenta aún? <Link to="/register">Regístrate</Link></p>
      </form>
    </div>
  )
}

export default LoginPage