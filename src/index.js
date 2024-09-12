import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createRoot } from 'react-dom/client';

// // Borra el contenido HTML existente
// document.body.innerHTML = '<div id="app"></div>';

// // Renderiza tu componente React en su lugar
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>¡Hola, mundo!</h1>);