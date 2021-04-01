import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureClient } from './api/client';
import {BrowserRouter as Router} from 'react-router-dom';
require('dotenv').config()

const accessToken = localStorage.getItem('token');
configureClient({accessToken});


//Fichero principal de mi App de React. Aquí voy a definir cual va a ser elemento HTML del DOM en el que voy a renderizar mi app React

ReactDOM.render(
    
    <Router>

        <App  isInitiallyLogged= {!!accessToken /* Con esta expresión conseguimos el booleano de esa expresión, en este caso si noy hay token y es un null es un false, si hay algo es un true */} /> 

    </Router>,
    document.getElementById('root')
);

