import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import List from './List';
import './index.css';

const url = 'https://course-api.com/react-tours-project';

function Tours() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setLoading(false);
      setTours(toursData);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <List tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default Tours;
