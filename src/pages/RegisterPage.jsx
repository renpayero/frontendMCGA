import React from 'react'
import {useForm} from 'react-hook-form'
import '../stylesheets/register/register.css'
import "../stylesheets/register/input.css"
import "../stylesheets/register/button.css"
import "../api/auth.js"
import { registerRequest } from '../api/auth.js'

const RegisterPage = () => {

  const {register, handleSubmit} = useForm()

  return (
    <div className='divRegister'>
      <form className='formRegister' onSubmit={handleSubmit(async(data) => {
        console.log(data);
        const res = await registerRequest(data)
        console.log(res);
      })}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" {...register('username', {required: true})}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", {required:true})} />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" {...register("password", {required: true})} />
        </div>
        <button type='sumbit'>
          <span>Registrarse</span>
        </button>
      </form>
    </div>
  )
}

export default RegisterPage