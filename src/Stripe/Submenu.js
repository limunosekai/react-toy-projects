import React from 'react';
import { useGlobalContext } from './context';

function Submenu() {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <div
      className={`${isSubmenuOpen ? 'stripe-submenu show' : 'stripe-submenu'}`}
    >
      ddd
    </div>
  );
}

export default Submenu;
