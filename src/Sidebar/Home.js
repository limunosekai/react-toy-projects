import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useContextGlobal } from './context';

function Home() {
  const { openSidebar, openModal } = useContextGlobal();

  return (
    <main className='home-main'>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='home-btn' onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
}

export default Home;
