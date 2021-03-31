import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureClient } from './api/client';
require('dotenv').config()

const accessToken = localStorage.getItem('token');
console.log(accessToken);

//Fichero principal de mi App de React. Aquí voy a definir cual va a ser elemento HTML del DOM en el que voy a renderizar mi app React

ReactDOM.render(
    <App isInitiallyLogged= {!!accessToken/* Con esta expresión conseguimos el booleano de esa expresión, en este caso si noy hay token y es un null es un false, si hay algo es un true */} />, 
    document.getElementById('root')
);

