import instance from './axios.js';

//axios es la variable instance en axios.js

export const registerRequest = user => instance.post(`/register`, user);

export const loginRequest = user => instance.post(`/login`,user);

//Esta ruta verifica si el usuario tiene token cuando se recarga la pagina o se carga
export const verifyTokenRequest = () => instance.get(`/verify`);