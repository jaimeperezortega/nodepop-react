

import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../api/auth'

import './LoginPage.css';

function LoginPage({onLogin}) {

    // Nos creasmos el método handleSubmit para manejar el evento submit del formulario y lo que va a hacer es primero hacer el login con las credentials que genere ese formulario y si todo sale bien llamar al método onLogin para setear el estado de App a isLogged = true
    const handleSubmit = async credentials =>{
        await login(credentials);
        onLogin();
    }

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Nodepop React</h1>
      <LoginForm onSubmit={handleSubmit} />
      
    </div>
  );
}

export default LoginPage;
