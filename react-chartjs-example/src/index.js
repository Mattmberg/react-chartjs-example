import React from 'react';
import App from './App';
import ReactDom from 'react-dom';

const rootElement = document.getElementById('root');
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
