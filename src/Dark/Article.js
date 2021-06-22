import React from 'react';
import moment from 'moment';

function Article({ title, snippet, date, length }) {
  return (
    <article className='dark-post'>
      <h2>{title}</h2>
      <div className='dark-post-info'>
        <span>{moment(date).format('MMMM dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
}

export default Article;
