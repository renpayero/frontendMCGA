import axios from "axios";

//Establecemos la propiedades a axios para comunicarnos con el backend accediendo a las cookies que nos manda.
const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

export default instance;


// https://backendmcga-production.up.railway.app/api/