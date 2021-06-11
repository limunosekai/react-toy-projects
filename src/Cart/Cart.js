import React from 'react';
import App from './App';
import './cart.css';
import { AppProvider } from './context';

function Cart() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default Cart;
