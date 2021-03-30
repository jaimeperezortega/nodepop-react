import axios from 'axios';

// axios es un client http que nos sirve para configurar iun cliente para configurar una URL por defecto donde se va a dirigir


const baseURL = 'http://localhost:3001'
const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });
client.interceptors.response.use(response => response.data) //Con este interceptor, todas las peticiones que haga axios, van a devolverme los datos ya modelizados a los anuncios. En el método no tengo que preoucparme por averiguar como me llegan esos datos desde axios. Si hay un error le podemos pasar una función en el 2º parámetro

export default client;