import React from 'react';
import './pagination.css';
import Follower from './Follower';
import { useFetch } from './useFetch';

function Pagination() {
  const { loading, data } = useFetch();

  return (
    <div>
      <div className='pagination-section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination 🍕'}</h1>
        <div className='pagination-underline'></div>
      </div>
      <section className='pagination-followers'>
        <div className='pagination-container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Pagination;
