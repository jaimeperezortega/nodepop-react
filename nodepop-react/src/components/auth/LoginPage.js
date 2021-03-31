

import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../api/auth'


import './LoginPage.css';

function LoginPage({onLogin}) {

  //El componente LoginPage tendrá que tener un estado que indique si se ha producido o no un error para que actue como le digamos en función de ello. Inicializamos el estado inicial a null
  const [error, setError] = React.useState(null);

  //También nos creamos un estado para determinar si está cargando o no

  const [isLoading, setIsLoading] = React.useState(false);

    // Nos creasmos el método handleSubmit para manejar el evento submit del formulario y lo que va a hacer es primero hacer el login con las credentials que genere ese formulario y si todo sale bien llamar al método onLogin para setear el estado de App a isLogged = true
    const handleSubmit = async credentials =>{
        
      try {
        setIsLoading(true);
        await login(credentials);
        onLogin();
        
        
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } 
    
    }

    const closeError = () => setError(null);
    

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Nodepop React</h1>
      <LoginForm  isLoading= {isLoading} error = {error} onSubmit={handleSubmit} />
      {error && <div onClick={closeError} className="loginPage-error">{error.message}</div>/*Con esta expresión le decimos a nuestro componente que si hay error me pinte ese div */}
      {isLoading && <div className="loginPage-error">{"...Cargando"}</div>/*Con esta expresión le decimos a nuestro componente que si hay error me pinte ese div */}
      
      
    </div>
  );
}

export default LoginPage;
