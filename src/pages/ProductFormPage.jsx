import React from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import "../stylesheets/form/form.css";
import "../stylesheets/form/button.css";
import "../stylesheets/form/input.css";
import "../stylesheets/form/errors.css";

const ProductFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useProducts();

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
  });

  return (
    <section>
      <h1>Agregar productos</h1>
      <div className="divForm">
        <form className="form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" {...register("nombre", { required: true })} />
          </div>
          <div>
            <label htmlFor="precio">Precio</label>
            <input type="number" {...register("precio", { required: true })} />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <input type="number" {...register("stock", { required: true })} />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción</label>
            <input
              type="text"
              {...register("descripcion", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="categoria">Categoría</label>
            <input type="text" {...register("categoria", { required: true })} />
          </div>
          <button className="btnForm" type="sumbit">
            <span>Crear producto</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductFormPage;
