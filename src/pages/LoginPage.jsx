import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/form/form.css";
import "../stylesheets/form/button.css";
import "../stylesheets/form/input.css";
import "../stylesheets/form/errors.css";
import Title from "../components/Title";


const LoginPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products");
    }
  }, [isAuthenticated]) //esta linea es para que se ejecute el useEffect cuando cambia el valor de isAuthenticated

  return (
    <div className='divForm'>

      <div>
      <Title word1="INICIAR" word2="SESIÓN"></Title>
      <form className='form' onSubmit={onSubmit}>
      {
        signinErrors.length > 0 && <div className='errorsBack'>{signinErrors[0]}</div>
      }
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
        <button className="btnForm" type='sumbit'>
          <span>Iniciar sesión</span>
        </button>
      <p>¿No tienes una cuenta aún? <Link to="/register">Regístrate</Link></p>
      </form>
      </div>
    </div>
  )
}

export default LoginPage