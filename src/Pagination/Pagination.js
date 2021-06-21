import React, { useEffect, useState } from 'react';
import './pagination.css';
import Follower from './Follower';
import { useFetch } from './useFetch';

function Pagination() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);

  return (
    <div>
      <div className='pagination-section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination 🍕'}</h1>
        <div className='pagination-underline'></div>
      </div>
      <section className='pagination-followers'>
        <div className='pagination-container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Pagination;
