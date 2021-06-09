import React, { useState } from 'react';
import './color.css';
import Color from './Color';
import Values from 'values.js';

function ColorGenerator() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <section className='color-section color-container'>
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.currentTarget.value)}
            placeholder='ex) #f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='color-btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      {error ? (
        <h4 className='error-text center'>Please check again!</h4>
      ) : (
        <h2 className='center'>Color List</h2>
      )}
      <section className='color-section colors'>
        {list.map((item, index) => {
          return <Color key={index} {...item} hex={item.hex} index={index} />;
        })}
      </section>
    </>
  );
}

export default ColorGenerator;
