import React from 'react';
import { useGlobalContext } from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function Quiz() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return <main className='quiz-main'>quiz App</main>;
}

export default Quiz;
