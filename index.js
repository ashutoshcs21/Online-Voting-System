import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';

import BlinkingLights from './BlinkingLights';
// import aftervoting from './aftervoting.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <BlinkingLights />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

