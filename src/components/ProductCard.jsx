import React from "react";
import { useProducts } from "../context/ProductsContext";

const ProductCard = ({ product, setModal }) => {
  const { deleteProduct } = useProducts();

  return (
    <div key={product._id} className="productCard">
      <h1>{product.nombre}</h1>
      <p>{product.precio}</p>
      <p>{product.stock}</p>
      <p>{product.descripcion}</p>
      <p>{product.categoria}</p>
      <img src={product.image} alt="" />
      <div>
        <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
        <button onClick={() => setModal(true)}>Editar</button>
      </div>
    </div>
  );
};

export default ProductCard;
