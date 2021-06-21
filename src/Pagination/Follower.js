import React from 'react';

function Follower({ avatar_url, html_url, login }) {
  return (
    <article className='pagination-card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='pagination-btn'>
        View Profile
      </a>
    </article>
  );
}

export default Follower;
