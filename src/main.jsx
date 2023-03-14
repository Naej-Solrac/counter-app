import React from 'react'; //importamos react 
import  ReactDOM  from 'react-dom/client'; //herramienta para renderizar react como es web usamos DOM
import { HelloWorldApp } from './HelloWorldApp';




ReactDOM.createRoot(document.getElementById('root')).render( //forma de renderizar nuestro componente
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
);