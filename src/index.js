import React from 'react';
import ReactDOM from 'react-dom/client';
// це провайдер  теми
import { ThemeProvider } from '@emotion/react'
import './index.css';
import { App } from 'App/App';
import { theme } from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// Якщо ви хочете почати вимірювати продуктивність у своїй програмі, передайте функцію
// для реєстрації результатів (наприклад: reportWebVitals(console.log))
// або відправити до кінцевої точки аналітики. Докладніше: https://bit.ly/CRA-vitals
// reportWebVitals();