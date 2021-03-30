

import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import './LoginForm.css';

function LoginForm() {

    
    //Establezco primero el estado de mi componente con un objeto que contiene mi username y password como un string vacío cada uno
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: '',
    });
    

    //Genero un manejador del evento para que cada vez que un inpit del formulario cambie, setee ese nuevo estado del componente obligando a su renderizado. 
    const handleInputChange = event =>{
        const newCredentials = {
            ...credentials, 
            [event.target.name]: event.target.value
        };
        setCredentials(newCredentials);
        
    }

  return (
    <form className="loginForm">
      <FormField
        type="text"
        name="username"
        label="email"
        className="loginForm-field"
        value={credentials.username}
        onChange ={handleInputChange}
      />
      <FormField
        type="password"
        name="password"
        label="contraseña"
        className="loginForm-field"
        value={credentials.password}
        onChange = {handleInputChange}
      />
      <Button type="submit" className="loginForm-submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
