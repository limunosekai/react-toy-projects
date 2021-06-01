import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import List from './List';
import './index.css';

const url = 'https://course-api.com/react-tours-project';

function Tours() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

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

  return (
    <main>
      <List tours={tours} />
    </main>
  );
}

export default Tours;
