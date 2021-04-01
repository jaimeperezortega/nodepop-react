
import {Redirect, Route} from 'react-router-dom';

//PrivateRoute es un componente muy básicxo que va a recibir la prop is Logged para saber si un usuario está o no loggeado. Si está loggeado le va a dejar ir a la página solicitada por el usuario pasándole las props que necesita. Si no está loggeado, le va a hacer un Redirect a login

const PrivateRoute = ({isLogged, ...props}) => {
    return isLogged ? <Route {...props}/> : <Redirect to = '/login'/>
};

export default PrivateRoute;