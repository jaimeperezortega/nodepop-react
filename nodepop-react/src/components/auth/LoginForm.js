

import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import './LoginForm.css';

function LoginForm({onSubmit}) {

    
    //Establezco primero el estado de mi componente con un objeto que contiene mi username y password como un string vacío cada uno
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });
    

    //Genero un manejador del evento para que cada vez que un inpit del formulario cambie, setee ese nuevo estado del componente obligando a su renderizado. Dado que mi estado depende del estado anterior, le pasamos una función que recibe como parámetro el estado anterior y a partir de ese estado anterior le generamos el nuevo estado
    const handleInputChange = event =>{
        setCredentials(oldCredentials => {

            const newCredentials = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            }
           return newCredentials
        });
        
    }

    //Creo el método que va a manejar el evento submit del formulario

    const handleSubmit = event =>{
        event.preventDefault();
        onSubmit(credentials);
        console.log(credentials);
        
    }

    const {email, password} = credentials; // Desestructuro las propiedades username y password del objeto credentials

  return (
    <form className="loginForm" onSubmit = {handleSubmit}>
      <FormField
        type="text"
        name="email"
        label="email"
        className="loginForm-field"
        value={email}
        onChange ={handleInputChange}
      />
      <FormField
        type="password"
        name="password"
        label="contraseña"
        className="loginForm-field"
        value={password}
        onChange = {handleInputChange}
      />
      <Button type="submit" className="loginForm-submit" variant="primary" disabled={!credentials.email || !credentials.password} > {/*Con este condicional establezaco si el botón está o no habilitado en función del estado del componente. Si no hay valor en username o en password, el botón queda deshabilitado}*/}

      
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
