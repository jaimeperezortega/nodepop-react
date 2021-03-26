import axios from 'axios';

// axios es un client http que nos sirve para configurar iun cliente para configurar una URL por defecto donde se va a dirigir


//const baseURL = 'http://localhost:3001'
const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });


export default client;