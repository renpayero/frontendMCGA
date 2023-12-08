import { useEffect, useState } from "react";
import { useProducts } from '../context/ProductsContext';
import "../stylesheets/products/products.css";
import "../stylesheets/products/productCard.css";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

const HomePage = () => {
  const { getProducts, products } = useProducts();
  const [mostrarFooter, setMostrarFooter] = useState(false); //hace que no se muestren los botones de la card en este componente y si en el de la ruta privada.

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <section className="homePage">
      <Title word1="MP" word2="REPUESTOS" />
      <div className="mainProducts">
      {
        products.map(product => (
          <ProductCard mostrarFooter={mostrarFooter} product={product} key={product._id} />
        )
        )
      }
      </div>
    </section>
  );
};

export default HomePage;
