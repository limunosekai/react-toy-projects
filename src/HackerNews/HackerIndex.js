import React from 'react';
import { AppProvider } from './context';
import HackerNews from './HackerNews';
import './hackerNews.css';

function HackerIndex() {
  return (
    <AppProvider>
      <HackerNews />
    </AppProvider>
  );
}

export default HackerIndex;
