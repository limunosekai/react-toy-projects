import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { FaBars, FaGithubAlt, FaGooglePlus, FaBlogger } from 'react-icons/fa';
import { links, social } from './data';

function NavBar() {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <img
              src='https://res.cloudinary.com/limu/image/upload/v1622974602/icon/logo_hzhpms.png'
              alt='logo'
            />
          </div>
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
