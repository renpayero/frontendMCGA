import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../stylesheets/products/products.css";
import "../stylesheets/products/buttons.css";
import "../stylesheets/products/modalEdit.css";
import "../stylesheets/products/productCard.css";
import Title from '../components/Title';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const { getProducts, products, updateProduct } = useProducts();
  const { register, handleSubmit, setValue } = useForm();
  const [modal, setModal] = useState(false);
  const [mostrarFooter, setMostrarFooter] = useState(true); //hace que no se muestren los botones(eliminar,editar) de la card en este componente y si en el de la ruta privada.

  //esta variable se usa para guardar el producto que se va a editar, y luego se pasa como parametro a la funcion completForm
  const onSubmit = handleSubmit(product => {
    updateProduct(product._id, product); //el id del producto se pasa como parametro para saber que producto se va a editar
    setModal(false);
  })


  // esta funcion se ejecuta cuando se hace click en el boton editar de un producto, y se encarga de completar el form del modal con los datos del producto
  const completForm = (product) => {
    setValue("nombre", product.nombre);
    setValue("precio", product.precio);
    setValue("stock", product.stock);
    setValue("descripcion", product.descripcion);
    setValue("categoria", product.categoria);
    setValue("_id", product._id);
  }


  useEffect(() => {
    getProducts();
  }, [])

  if (products.length === 0) {
    return <h1>No hay productos, cree productos en <Link to="/add-product">AGREGAR PRODUCTOS</Link></h1>
  }

  return (
    <section>
      <Title word1="STOCK" word2="DISPONIBLE" />
      <div className='mainProducts'>
        {
          modal && (
            <div className='divModal'>
              <form className='form' onSubmit={onSubmit}>
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
            <ProductCard mostrarFooter={mostrarFooter} completForm={completForm} product={product} setModal={setModal} key={product._id} />
          )
          )
        }
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  )
}

export default ProductsPage