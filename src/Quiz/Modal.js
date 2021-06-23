import React from 'react';
import { useGlobalContext } from './context';

function Modal() {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'quiz-modal-container isOpen' : 'quiz-modal-container'
      }`}
    >
      <div className='quiz-modal-content'>
        <h2>Congraulation 🎉</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly!
        </p>
        <button className='quiz-close-btn' onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
