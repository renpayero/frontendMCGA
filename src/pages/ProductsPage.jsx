import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductsContext';
import "../stylesheets/products/products.css";
import ProductCard from '../components/ProductCard';
import { useForm } from "react-hook-form";
import "../stylesheets/products/btnClose.css";

const ProductsPage = () => {
  const { getProducts, products } = useProducts();
  const { register, handleSubmit, setValue } = useForm();
  const [modal, setModal] = useState(false);

  const onSubmit = () => {
    console.log("first")
  }
  const completForm = (product) => {
    setValue("nombre", product.nombre);
    setValue("precio", product.precio);
    setValue("stock", product.stock);
    setValue("descripcion", product.descripcion);
    setValue("categoria", product.categoria);
  }
  
  useEffect(() => {
    getProducts();
  }, [])

  if (products.length === 0) {
    return <h1>No hay productos flaquito</h1> //!ACOMODAR ESTO DESPUES
  }

  return (
    <div className='mainProducts'>
      {
        modal && (
          <div className='divModal'>
            <form className='modalForm' onSubmit={onSubmit}>
              <button type='button' onClick={() => setModal(false)} className="button">
                <span className="X"></span>
                <span className="Y"></span>
                <div className="close">Close</div>
              </button>
              <div>
                <label htmlFor="">Nombre</label>
                <input type="text" {...register("nombre", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Precio</label>
                <input type="number" {...register("precio", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Stock</label>
                <input type="number" {...register("stock", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Descripción</label>
                <input type="text" {...register("descripcion", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Categoría</label>
                <input type="text" {...register("categoria", { required: true })} />
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
          <ProductCard completForm={completForm} product={product} setModal={setModal} key={product._id} />
        )
        )
      }
    </div>
  )
}

export default ProductsPage