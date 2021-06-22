import React from 'react';

import { useGlobalContext } from './context';

function Stories() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className='hacker-loading'></div>;
  }
  return <div>dd</div>;
}

export default Stories;
