import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import getGoats from './helpers/data/goatData';

getGoats();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
