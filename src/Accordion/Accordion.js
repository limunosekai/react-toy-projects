import React, { useState } from 'react';
import './accordion.css';
import data from './data';
import Question from './Question';

function Accordion() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='accordion-container'>
        <h3>Questions and Answers anout login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
