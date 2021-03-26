import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
require('dotenv').config()



//Fichero principal de mi App de React. Aquí voy a definir cual va a ser elemento HTML del DOM en el que voy a renderizar mi app React

ReactDOM.render(<App />, document.getElementById('root')
);

