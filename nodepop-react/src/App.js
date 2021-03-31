
import './App.css';
import AdsPage from './components/ads/AdsPage'
import LoginPage from './components/auth/LoginPage'
import React from 'react';

function App({ isInitiallyLogged }) {
const [isLogged, setIsLogged] = React.useState(isInitiallyLogged); //Seteamos el estado de si un usuario está logeado o no en el nivel más alto de nuestra aplicación (App.js) para que pueda funcionar de un modo u otro en función de ese estado. El login se va a producir en el login page porque es donde se va a disparar la acción. Por ello, hay que definir en el Login Page una prop que responda a eso. Vamos a llamar a ese método onLogin. Digamos que LoginPage utiliza este evento para informar a su padre (App.js) de que un usuario está o no logeado

const handleLogin = () => setIsLogged(true); //Cuando en el LoginPage se produzca el evento onLogin, se va a disparar el método handleLogin que lo único que hace es cambiar el estado isLogged a true

const handleLogout = () => setIsLogged(false);


  return (
    <div className="App">
      {isLogged ? <AdsPage onLogout = {handleLogout} isLogged={isLogged} /> : <LoginPage onLogin={handleLogin}/> }
      
    </div>
  );
}

export default App;
