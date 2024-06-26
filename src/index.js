import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EcomProvider } from './components/store/EcomContext';
// react bootstrap configs
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <EcomProvider>
      <App />
    </EcomProvider>
  </React.StrictMode>
);


