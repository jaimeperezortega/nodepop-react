

import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../api/auth'


import './LoginPage.css';

function LoginPage({onLogin}) {
 
  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  

    const handleSubmit = async (credentials, checkboxChecked) =>{
      
      try {
        setIsLoading(true);
        await login(credentials, checkboxChecked);
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
