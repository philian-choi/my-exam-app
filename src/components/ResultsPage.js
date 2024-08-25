// src/components/ResultsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage = ({ questions, selectedAnswers, score }) => {
  const navigate = useNavigate();

  return (
    <div className="quiz-container">
      <h1>Quiz Results</h1>
      <p>Your score: {score} / {questions.length}</p>
      {questions.map((question, index) => {
        const isCorrect = selectedAnswers[index] === question.answer;
        return (
          <div
            key={index}
            className="result-item"
          >
            <h3 style={{ color: isCorrect ? 'green' : 'red' }}>
              {index + 1}. {question.question}
            </h3>
            <p>Your answer: {selectedAnswers[index]}</p>
            <p>Correct answer: {question.answer}</p>
            <p>Explanation: {question.explanation}</p>
          </div>
        );
      })}
      <button onClick={() => navigate('/')}>홈으로 이동</button>
    </div>
  );
};

export default ResultsPage;
