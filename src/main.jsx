
import React from 'react'; //importamos react 
import  ReactDOM  from 'react-dom/client'; //herramienta para renderizar react como es web usamos DOM
import { HelloWorldApp } from './HelloWorldApp';
import { Naej } from './Naej';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render( //forma de renderizar nuestro componente
    <React.StrictMode>
        <Naej title = "soy goku" subtitle= {123}/>
    </React.StrictMode>
);

