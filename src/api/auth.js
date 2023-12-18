import instance from './axios.js';

//axios es la variable instance en axios.js

export const registerRequest = user => instance.post(`/register`, user, { withCredentials: true });

export const loginRequest = user => instance.post(`/login`, user, { withCredentials: true });

//Esta ruta verifica si el usuario tiene token cuando se recarga la pagina o se carga
export const verifyTokenRequest = () => instance.get(`/verify`);

