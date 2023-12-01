import React from 'react'
import {useForm} from 'react-hook-form'

const RegisterPage = () => {

  const {register, handleSubmit} = useForm()

  return (
    <div>
      <form action="">
        <input type="text" {...register('username', {required: true})}/>
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
      </form>
    </div>
  )
}

export default RegisterPage