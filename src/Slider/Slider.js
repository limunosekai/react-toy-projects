import React, { useEffect, useState } from 'react';
import './slider.css';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='slider-section'>
      <div className='slider-title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='slider-section-center'>
        {people.map((item, i) => {
          const { id, image, name, title, quote } = item;
          let position = 'nextSlide';
          if (i === index) {
            position = 'activeSlide';
          }
          if (i === index - 1 || (index === 0 && i === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={`slider-article ${position}`} key={id}>
              <img className='slider-person-img' src={image} alt={name} />
              <h2>{name}</h2>
              <p className='slider-title'>{title}</p>
              <p className='slider-text'>{quote}</p>
              <FaQuoteRight className='slider-icon' />
            </article>
          );
        })}
        <button className='slider-prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='slider-next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
