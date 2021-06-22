import React from 'react';

import { useGlobalContext } from './context';

function SearchForm() {
  const { searchHandler, query } = useGlobalContext();
  return (
    <form className='hacker-search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search Hacker News!</h2>
      <input
        type='text'
        className='hacker-form-input'
        value={query}
        onChange={(e) => searchHandler(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
