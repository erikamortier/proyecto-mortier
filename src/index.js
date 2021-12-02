//1) necesitamos la variable React en scope
import React from 'react';

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from 'react-dom';



//3) Necesitamos una aplicacion de react
import App from "./App"

//4) Necesitamos dibujar la aplicacion en el DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


