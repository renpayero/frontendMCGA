import React from "react";
import { useProducts } from "../context/ProductsContext";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, setModal, completForm, mostrarFooter }) => {
  const { _id, nombre, precio, descripcion, stock, categoria } = product;
  const { deleteProduct } = useProducts();

  const editProduct = () => {
    completForm(product);
    setModal(true);
  };

  const handleDelete = (_id) => {
    deleteProduct(_id);
  }

  return (
    <div key={product._id} className="productCard">
      <header>
        <h1>{nombre}</h1>
      </header>
      <article>
        <p>
          Precio: <span>${precio}</span>
        </p>
        <p>
          Stock: <span>{stock}</span>
        </p>
        <p>
          Descripcion: <span>{descripcion}</span>
        </p>
        <p>
          Categoría: <span>{categoria}</span>
        </p>
        <p>
          ID: <span>{_id}</span>
        </p>
      </article>
      {mostrarFooter && (
        <footer>
          <button
            className="buttonDelete"
            onClick={() => handleDelete(_id)}
            type="button"
          >
            <span className="button__text">Eliminar</span>
            <span className="button__icon">
              <svg
                className="svg"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
                <line x1="80" x2="432" y1="112" y2="112"></line>
                <path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
                <line x1="256" x2="256" y1="176" y2="400"></line>
                <line x1="184" x2="192" y1="176" y2="400"></line>
                <line x1="328" x2="320" y1="176" y2="400"></line>
              </svg>
            </span>
          </button>
          <button className="buttoneEdit" onClick={() => editProduct()}>
            <svg
              className="svg-icon"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#a649da" strokeLinecap="round" strokeWidth="2">
                <path d="m20 20h-16"></path>
                <path
                  clipRule="evenodd"
                  d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
            <span className="lable">Editar</span>
          </button>
        </footer>
      )}
    </div>
  );
};

export default ProductCard;
