import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { ThemeContextProvider } from './store/theme-context';
import { CountriesContextProvider } from './store/countries-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CountriesContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountriesContextProvider>
  </BrowserRouter>
);
