import React from 'react';
import Quiz from './Quiz';
import { AppProvider } from './context';
import './quiz.css';

function QuizIndex() {
  return (
    <AppProvider>
      <Quiz />
    </AppProvider>
  );
}

export default QuizIndex;
