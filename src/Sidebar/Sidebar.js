import React from 'react';
import Modal from './Modal';
import List from './List';
import Home from './Home';
import './sidebar.css';

function Sidebar() {
  return (
    <>
      <Home />
      <Modal />
      <List />
    </>
  );
}

export default Sidebar;
