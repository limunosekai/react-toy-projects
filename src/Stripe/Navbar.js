import React from 'react';
import logo from './images/logo.svg';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const submenuHandler = (e) => {
    if (!e.target.classList.contains('stripe-link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='stripe-nav' onMouseOver={submenuHandler}>
      <div className='stripe-nav-center'>
        <div className='stripe-nav-header'>
          <img className='stripe-nav-logo' src={logo} alt='' />
          <button
            className='stripe-btn stripe-toggle-btn'
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className='stripe-nav-links'>
          <li>
            <button className='stripe-link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='stripe-link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='stripe-link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='stripe-btn stripe-signin-btn'>Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
