import React from 'react';
import './cocktail.css';
import { AppProvider } from './context';
import App from './App';

function Cocktail() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default Cocktail;
