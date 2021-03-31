import axios from 'axios';

// axios es un client http que nos sirve para configurar iun cliente para configurar una URL por defecto donde se va a dirigir


const baseURL = 'http://localhost:3001'
const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
    response => response.data,
    error => {
      if (!error.response) {
        return Promise.reject({ message: error.message }); // Aquí me retorna el error de una pérdida de conexión. En este caso Network erroe
      }
      return Promise.reject({
        message: error.response.statusText,
        ...error.response.data, //Aquí me sale el erroer que me manda el backend. En este caso Unauthorized
      });
    }
  );
  

//Con este interceptor, todas las peticiones que haga axios, van a devolverme los datos ya modelizados a los anuncios. En el método no tengo que preoucparme por averiguar como me llegan esos datos desde axios. Si hay un error le podemos pasar una función en el 2º parámetro


// Axios permite a través de esta función establecer el token en nuestras cabeceras que recibamos después de una peticion de login. 

const setAuthorizationHeader = token =>{
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
};

// Ahora configuramos que si tenemos accessToken haga la peticion de login estableciendo el token en las cabeceras
export const configureClient = ({accessToken}) => {
    if (accessToken) {
        setAuthorizationHeader(accessToken);
    }
};

export  const resetClient = () => {
    removeAuthorizationHeader()
};

export default client;