import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProducts } from '../context/ProductsContext';
import "../stylesheets/products/products.css";
import ProductCard from '../components/ProductCard';
import { useForm } from "react-hook-form";

const ProductsPage = () => {
  const {getProducts, products} = useProducts();
  const {register, handleSubmit} = useForm();
  const [modal, setModal] = useState(false);

  const onSubmit = () => {
    console.log("first")
  }

  useEffect(() => {
    getProducts();
  }, [])

  if(products.length === 0){
    return <h1>No hay productos flaquito</h1>
  }

  return (
    <div className='mainProducts'>
      {
        modal && (
          <div className='divModal'>
          <form className='modalForm' onSubmit={onSubmit}>
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
          <span>Editar producto</span>
        </button>
      </form>
          </div>
        )
      }
      {
        products.map(product => (
          <ProductCard product={product} setModal={setModal} key={product._id}/>
        )
        )
      }
    </div>
  )
}

export default ProductsPage