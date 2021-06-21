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
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPageHandler = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPageHandler = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

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
        {!loading && (
          <div className='pagination-btn-container'>
            <button className='pagination-prev-btn' onClick={prevPageHandler}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`pagination-page-btn ${
                    index === page ? 'pagination-active-btn' : null
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='pagination-next-btn' onClick={nextPageHandler}>
              next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Pagination;
