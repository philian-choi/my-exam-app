// src/components/QuizPage.js
import React, { useState } from 'react';
import Papa from 'papaparse';
import ResultsPage from './ResultsPage';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const loadedQuestions = results.data
          .map((row) => {
            if (
              row.question &&
              row.option1 &&
              row.option2 &&
              row.option3 &&
              row.option4 &&
              row.answer &&
              row.explanation
            ) {
              return {
                question: row.question,
                options: [row.option1, row.option2, row.option3, row.option4],
                answer: row.answer,
                explanation: row.explanation,
              };
            } else {
              return null;
            }
          })
          .filter((question) => question !== null);

        setQuestions(loadedQuestions.sort(() => 0.5 - Math.random()).slice(0, 50));
      },
    });
  };

  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });

    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <h1>Upload Quiz CSV File</h1>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
    );
  }

  if (showResults) {
    return (
      <ResultsPage 
        questions={questions} 
        selectedAnswers={selectedAnswers} 
        score={score} 
      />
    );
  }

  return (
    <div className="quiz-container">
      <h1>Question {currentQuestionIndex + 1} / {questions.length}</h1>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
