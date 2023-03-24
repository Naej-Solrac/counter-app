
import React from 'react'; //importamos react 
import  ReactDOM  from 'react-dom/client'; //herramienta para renderizar react como es web usamos DOM
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorldApp';
import { Naej } from './Naej';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render( //forma de renderizar nuestro componente
    <React.StrictMode>
        <CounterApp value = {991014002}/>
    </React.StrictMode>
);

