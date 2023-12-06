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

    return <ProductsContext.Provider 
    value={{
        products,
        createProduct,
        getProducts,
    }}
    >{children}
    </ProductsContext.Provider>;
}