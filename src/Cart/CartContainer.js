import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

function CartContainer() {
  const { cart, total } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* Cart Header */}
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>Currently Empty...</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>Your Cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='cart-btn cart-clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
