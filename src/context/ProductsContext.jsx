import { createContext, useContext, useState } from "react";
import { createProductRequest, getProductsRequest, updateProductRequest, deleteProductRequest, getProductRequest } from "../api/products.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data);
        } catch (error) {
            notify("error", error.response.data.message);
        }
    }
    const createProduct = async (product) => {
        try {
            product.precio = Number(product.precio);
            product.stock = Number(product.stock);
            const res = await createProductRequest(product);
            notify("success", "Producto creado correctamente");
        } catch (error) {
            notify("error", error.response.data.message);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);
            if (res.status === 200) {
                const filterProducts = products.filter(product => product._id !== id); //Devuelve todos los productos menos el que mandamos al back a eliminar
                setProducts(filterProducts);
                return notify("success", "Producto eliminado correctamente");
            }
        } catch (error) {
            return notify("error", error.response.data.message);
        }
    }

    const updateProduct = async (id, product) => {
        try {
            const res = await updateProductRequest(id, product);
            const productUpdate = res.data;
            const productsUpdated = products.map(product => product._id === productUpdate._id ? productUpdate : product);
            setProducts(productsUpdated);
            return notify("success", "Producto actualizado correctamente");
        } catch (error) {
            return notify("error", error.response.data.message);
        }

    }

    //Dependiendo del tipo de notificacion que le pasamos muestra un una u otra, de de error o de success.
    const notify = (tipo, mensaje) => {
        console.log(tipo)
        if (tipo === "success") {
            toast.success(mensaje);
        }

        if (tipo === "error") {
            toast.error(mensaje);
        }
    }

    return <ProductsContext.Provider
        value={{
            products,
            createProduct,
            getProducts,
            deleteProduct,
            updateProduct,
        }}
    >{children}
    </ProductsContext.Provider>;
}