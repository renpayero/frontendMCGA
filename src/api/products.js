import axios from './axios.js';

export const getProductsRequest = () => axios.get(`/products`);

export const createProductRequest = (product) => axios.post(`/products`, product);

export const updateProductRequest = (id) => axios.put(`/products/${id}`, product);

export const deleteProductRequest = (id) => axios.delete(`/products/${id}`);

export const getProductRequest = (id) => axios.get(`/products/${id}`, product);

// export const getProductsByCategoryRequest = (category) => axios.get(`/products/category/${category}`);
