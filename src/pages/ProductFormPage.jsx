import React from 'react'
import { useForm } from "react-hook-form";
import { useProducts } from '../context/ProductsContext';

const ProductFormPage = () => {

  const {register, handleSubmit} = useForm();
  const {createProduct} = useProducts();

  const onSubmit = handleSubmit(data => {
    createProduct(data);
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" {...register("nombre", {required:true})} />
        </div>
        <div>
          <label htmlFor="">Precio</label>
          <input type="number" {...register("precio", {required:true})} />
        </div>
        <div>
          <label htmlFor="">Stock</label>
          <input type="number" {...register("stock", {required:true})} />
        </div>
        <div>
          <label htmlFor="">Descripción</label>
          <input type="text" {...register("descripcion", {required:true})} />
        </div>
        <div>
          <label htmlFor="">Categoría</label>
          <input type="text" {...register("categoria", {required:true})} />
        </div>
        <div>
          <label htmlFor="">Imagen</label>
          <input type="file" {...register("image")} />
        </div>
        <button className='btnForm' type='sumbit'>
          <span>Crear producto</span>
        </button>
      </form>
    </div>
  )
}

export default ProductFormPage