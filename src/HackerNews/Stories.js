import React from 'react';

import { useGlobalContext } from './context';

function Stories() {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className='hacker-loading'></div>;
  }
  return (
    <section className='hacker-stories'>
      {hits.map((item) => {
        const { objectID, title, num_comments, url, points, author } = item;
        return (
          <article key={objectID} className='hacker-story'>
            <h4 className='hacker-title'>{title}</h4>
            <p className='hacker-info'>
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                target='_blank'
                href={url}
                className='hacker-read-link'
                rel='noreferrer'
              >
                Read More
              </a>
              <button className='hacker-remove-btn'>Remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
