import React from 'react'; //importamos react 
import  ReactDOM  from 'react-dom/client'; //herramienta para renderizar react como es web usamos DOM

function App() { //componente inicial pero es de mala practica que este en este archivo main 
    return (<h1>Hola mundo!!!</h1>);
}


ReactDOM.createRoot(document.getElementById('root')).render( //forma de renderizar nuestro componente
    <React.StrictMode>
        <App />
    </React.StrictMode>
);