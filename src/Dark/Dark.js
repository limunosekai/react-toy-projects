import React, { useEffect, useState } from 'react';
import './dark.css';
import Article from './Article';
import data from './data';

function Dark() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <nav className='dark-nav'>
        <div className='dark-nav-center'>
          <h1>Dark Mode</h1>
          <button className='dark-btn' onClick={toggleTheme}>
            Toggle
          </button>
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
