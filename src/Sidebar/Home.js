import React from 'react';
import { FaBars } from 'react-icons/fa';

function Home() {
  return (
    <main className='home-main'>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='home-btn'>Show Modal</button>
    </main>
  );
}

export default Home;
