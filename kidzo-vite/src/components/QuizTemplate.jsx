import React, { useState } from 'react';
import "./QuizTemplate.css"


function QuizTemplate({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      if (questions[currentQuestion].correctAnswer === selectedAnswer) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      if (currentQuestion + 1 >= questions.length) {
        setShowResults(true);
      }
    }
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <div>
          <h2>Quiz Results</h2>
          <p>Your score: {score}/{questions.length}!!</p>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerClick(index)}
                />
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default QuizTemplate;