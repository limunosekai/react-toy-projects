import React from 'react';
import './cart.css';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function Cart() {
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default Cart;
