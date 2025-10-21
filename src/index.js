import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // NEW IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* WRAP YOUR APP IN THE ROUTER */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);