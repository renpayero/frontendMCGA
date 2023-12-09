import React from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import "../stylesheets/form/form.css";
import "../stylesheets/form/button.css";
import "../stylesheets/form/input.css";
import "../stylesheets/form/errors.css";
import Title from "../components/Title";
import { ToastContainer } from "react-toastify";

const ProductFormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createProduct } = useProducts();

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
    reset();
  });

  return (
    <section>
      <Title word1="AGREGAR" word2="PRODUCTO"></Title>
      <div className="divForm">
        <form className="form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            {errors.nombre && (
              <p className="errorsInputs">Nombre es requerido</p>
            )}
            <input type="text" {...register("nombre", { required: true })} />
          </div>
          <div>
            <label htmlFor="precio">Precio</label>
            {errors.precio && (
              <p className="errorsInputs">Precio es requerido</p>
            )}
            <input type="number" {...register("precio", { required: true })} />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            {errors.stock && <p className="errorsInputs">Stock es requerido</p>}
            <input type="number" {...register("stock", { required: true })} />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción</label>
            {errors.descripcion && (
              <p className="errorsInputs">Descripcion es requerido</p>
            )}
            <input
              type="text"
              {...register("descripcion", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="categoria">Categoría</label>
            {errors.categoria && (
              <p className="errorsInputs">Categoria es requerido</p>
            )}
            <input type="text" {...register("categoria", { required: true })} />
          </div>
          <button className="btnForm" type="sumbit">
            <span>Crear producto</span>
          </button>
        </form>
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
  );
};

export default ProductFormPage;
