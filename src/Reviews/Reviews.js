import React from 'react';
import './index.css';
import Review from './Review';

function Reviews() {
  return (
    <main>
      <section className='review-container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Reviews;
