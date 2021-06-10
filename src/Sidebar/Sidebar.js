import React from 'react';
import Modal from './Modal';
import List from './List';
import Home from './Home';
import './sidebar.css';
import { AppProvider } from './context';

function Sidebar() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <List />
    </AppProvider>
  );
}

export default Sidebar;
