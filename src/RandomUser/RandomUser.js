import React, { useState } from 'react';
import './randomUser.css';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function RandomUser() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('Random Person');

  const handleValue = (e) => {};

  return (
    <main>
      <div className='ru-block bcg-black'></div>
      <div className='ru-block'>
        <div className='ru-container'>
          <img src={defaultImage} alt='random user' />
        </div>
      </div>
    </main>
  );
}

export default RandomUser;
