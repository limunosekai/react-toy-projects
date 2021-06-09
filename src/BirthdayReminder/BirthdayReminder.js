import React, { useState } from 'react';
import './birth.css';
import data from './data';
import List from './List';

function BirthdayReminder() {
  const [people, setPeople] = useState(data);

  const onClickHandler = () => {
    setPeople([]);
  };
  return (
    <main className='birth-main'>
      <section className='birth-container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={onClickHandler}>Clear All</button>
      </section>
    </main>
  );
}

export default BirthdayReminder;
