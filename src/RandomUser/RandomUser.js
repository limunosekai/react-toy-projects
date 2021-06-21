import React, { useEffect, useState } from 'react';
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

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains('ru-icon')) {
      const newTitle = e.target.dataset.label;
      setTitle(newTitle);
      setValue(person[newTitle]);
    }
  };

  return (
    <main>
      <div className='ru-block bcg-black'></div>
      <div className='ru-block'>
        <div className='ru-container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
          />
          <p className='ru-user-title'>My {title} is</p>
          <p className='ru-user-value'>{value}</p>
          <div className='ru-values-list'>
            <button
              className='ru-icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='ru-icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className='ru-icon'
              data-label='age'
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className='ru-icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='ru-icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='ru-icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='ru-btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'Random User'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default RandomUser;
