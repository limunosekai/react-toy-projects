import React from 'react';

import { useGlobalContext } from './context';

function Buttons() {
  const { isLoading, page, nbPages, pageHandler } = useGlobalContext();

  return (
    <div className='hacker-btn-container'>
      <button disabled={isLoading} onClick={() => pageHandler('dec')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => pageHandler('inc')}>
        next
      </button>
    </div>
  );
}

export default Buttons;
