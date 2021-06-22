import React from 'react';
import './dark.css';
import Article from './Article';
import data from './data';

function Dark() {
  return (
    <div>
      <nav>
        <div className='dark-nav-center'>
          <h1>Dark Mode</h1>
          <button className='dark-btn'>Toggle</button>
        </div>
      </nav>
      <div className='dark-articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Dark;
