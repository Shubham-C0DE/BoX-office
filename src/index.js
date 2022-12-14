import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as ServiceWorker from './serviceWorker'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter> 
  <App /> 
  </HashRouter> 
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// ServiceWorkerRegistration.register();
ServiceWorker.register();
