import React from "react";
import { useProducts } from "../context/ProductsContext";

const ProductCard = ({ product, setModal, completForm}) => {
  const { deleteProduct } = useProducts();

  const editProduct = () => {
    completForm(product);
    setModal(true);
  }

  return (
    <div key={product._id} className="productCard">
      <h1>{product.nombre}</h1>
      <p>{product.precio}</p>
      <p>{product.stock}</p>
      <p>{product.descripcion}</p>
      <p>{product.categoria}</p>
      <div>
        <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
        <button onClick={editProduct}>Editar</button>
      </div>
    </div>
  );
};

export default ProductCard;
