import React, { useEffect, useState } from 'react';
import './dark.css';
import Article from './Article';
import data from './data';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function Dark() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
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
