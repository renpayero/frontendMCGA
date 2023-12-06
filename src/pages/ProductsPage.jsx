import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProducts } from '../context/ProductsContext';


const ProductsPage = () => {
  const {getProducts, products} = useProducts();

  useEffect(() => {
    getProducts();
  }, [])

  if(products.length === 0){
    return <h1>No hay productos flaquito</h1>
  }

  return (
    <div>
      {
        products.map(product => (
          <div key={product._id}>
            <h1>{product.nombre}</h1>
            <p>{product.precio}</p>
            <p>{product.stock}</p>
            <p>{product.descripcion}</p>
            <p>{product.categoria}</p>
            <img src={product.image} alt="" />
          </div>
        )
        )
      }
    </div>
  )
}

export default ProductsPage