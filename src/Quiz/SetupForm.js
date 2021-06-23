import React from 'react';
import { useGlobalContext } from './context';

function SetupForm() {
  const { handleChange, handleSubmit, quiz, error } = useGlobalContext();

  return (
    <div className='quiz-main'>
      <section className='quiz quiz-small'>
        <form className='quiz-setup-form'>
          <h2>Setup Quiz</h2>
          {/* amount */}
          <div className='quiz-form-control'>
            <label htmlFor='amount'>Number of questions</label>
            <input
              className='quiz-form-input'
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          {/* Category */}
          <div className='quiz-form-control'>
            <label htmlFor='category'>Category of questions</label>
            <select
              className='quiz-form-input'
              name='category'
              id='category'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='generalKnowledge'>General Knowledge</option>
              <option value='movie'>Movie</option>
              <option value='videoGames'>Video Games</option>
              <option value='sports'>Sports</option>
              <option value='art'>Art</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='quiz-form-control'>
            <label htmlFor='difficulty'>Difficulty of questions</label>
            <select
              className='quiz-form-input'
              name='difficulty'
              id='difficulty'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>

          {error && (
            <p className='quiz-error'>
              Can not generate questions, please try diffrent options
            </p>
          )}
          <button className='quiz-submit-btn' onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </div>
  );
}

export default SetupForm;
