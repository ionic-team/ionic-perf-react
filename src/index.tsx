import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>, rootElement);
}
