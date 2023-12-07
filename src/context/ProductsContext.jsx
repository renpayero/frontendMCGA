import { createContext, useContext, useState  } from "react";
import { createProductRequest, getProductsRequest, updateProductRequest, deleteProductRequest, getProductRequest } from "../api/products.js";

const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts debe estar dentro del proveedor ProductsContext");
    }
    return context;
};

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const createProduct = async(product) => {
        // necesito pasar el precio y stock de string a number antes de enviarlo al backend
        product.precio = Number(product.precio);
        product.stock = Number(product.stock);
        const res = await createProductRequest(product);
        console.log(res);
    }

    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);
            if (res.status === 200) {
                const filterProducts = products.filter( product => product._id !== id) //Devuelve todos los productos menos el que mandamos al back a eliminar
                setProducts(filterProducts);
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return <ProductsContext.Provider 
    value={{
        products,
        createProduct,
        getProducts,
        deleteProduct
    }}
    >{children}
    </ProductsContext.Provider>;
}