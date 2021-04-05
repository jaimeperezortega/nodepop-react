

import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import './LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';

function LoginForm({onSubmit, isLoading}) {

  // Utilizamos las proptypes para asegurarnos de que mandamos las props necesarias desde un padre a un hijo. Si por ejemplo yo tengo un onSubmit en este formulario que e suna función que no le he pasado desde arriba, puedo hacer que las proptypes me avisen de que falta recibir esa prop antes de intentar ejecutarlo. Es un chequeo dinámico de las props.

LoginForm.propTypes = {
  onSubmit: T.func,
  
};

LoginForm.defaultProps = { //Es buena idea pasar por defaukt props los que sean requeridos. Así nos aseguramos que si una prop no nos llega tenga un valor por defecto
  isLoading: false,
}

    
    //Establezco primero el estado de mi componente con un objeto que contiene mi username y password como un string vacío cada uno
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });

    const [checkboxChecked, setcheckboxChecked] = React.useState(false)

    const clickOnCheckBox = () => {
      setcheckboxChecked(!checkboxChecked);
      
    }
    

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

    //Creo el método que va a manejar el evento submit del formulario.

    // ¿ Cómo es el flujo desde que hago submit en el formulario para setear el estado de mi componente principal App.js a true?

    //1. Al pinchar en el botón del formulario, como es de tipo submit, lo que hace es disparar el submit

    //2. Al hacer submit se dispara el evento handleSubmit  que consiste en prevenir el comportamniento por defecto y llama a la prop onSubmit (pasándole las credentials obtenidas en este formulario) que recibe arriba del todo y que está diseñada para responder  a eventos submit. Esta prop se la ha pasado a LoginForm su padre LoginPage. El onSubmit que le ha llegado desde su padre se ha definido en LoginPage como handle Submit:
    //  const handleSubmit = async credentials =>{
    //     await login(credentials);
    //     onLogin();
    // }

    // 3. Al ejecutar este método handleSubmit vemos que se produce una llamada a la api a través de login (pasándole credentials) y cuando haya hecho esta llamada a la api satisfactoriamente (es asíncrono), luego ejecuta la prop que recibe LoginPage (onlogin) que se la está pasando su padre App.js

    //4. Por último, la prop onLogin que le está pasando el padre App.js a LoginPage.js es una función que se llama handleLogin que es tan sencilla como esto: const handleLogin = () => setIsLogged(true); 

    // DE ESTA FORMA, UN EVENTO QUE SE HA PRODUCIDO EN UN COMPONENTE HIJO MUCHO MÁS ABAJO DEL PADRE, REPERCUTE EN EL ESTADO DEL PADRE

    const handleSubmit = event =>{
        event.preventDefault();
        onSubmit(credentials, checkboxChecked);
        
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
     
    <Checkbox  title="Mantener sesión" onClick={clickOnCheckBox} />
   
      <Button type="submit" className="loginForm-submit" variant="primary" disabled={isLoading || !credentials.email || !credentials.password} > {/*Con este condicional establezaco si el botón está o no habilitado en función del estado del componente. Si no hay valor en username o en password, el botón queda deshabilitado}*/}

      
        Log in
      </Button>
    </form>
  );
}



export default LoginForm;
