import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

function List() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <div className='logo'>
          <img
            src='https://res.cloudinary.com/limu/image/upload/v1622974602/icon/logo_hzhpms.png'
            alt='logo'
          />
        </div>
        <button className='sidebar-close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='sidebar-links'>
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='sidebar-social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;
