import React from 'react';
import { useGlobalContext } from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function Quiz() {
  const { waiting, loading, questions, index, correct, nextQuestion } =
    useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <div className='quiz-main'>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          Correct Answers : {correct}/{questions.length}
        </p>
        <article className='quiz-container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='quiz-btn-container'>
            {answers.map((answer, i) => {
              return (
                <button
                  key={i}
                  className='answer-btn'
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          Next
        </button>
      </section>
    </div>
  );
}

export default Quiz;
