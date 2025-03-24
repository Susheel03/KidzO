import React, { useState } from 'react';
import './Choosing_Game.css'; // Import the CSS file for styling

function Choosing_Game({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    if (!questions[currentQuestionIndex]) return;

    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;

      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="header">Ethics Quiz</div>

      {/* Question & Info */}
      {!quizCompleted ? (
        <>
          <div className="info-container">
            <p className="question-text">{currentQuestion?.question}</p>
          </div>

          {/* Display the images for answer options */}
          <div className="image-container">
            <img
              src={currentQuestion?.image1}
              alt="Option 1"
              onClick={() => handleAnswer('image1')}
              className={`choice-image ${
                selectedAnswer === 'image1' ? 'selected' : ''
              }`}
            />
            <img
              src={currentQuestion?.image2}
              alt="Option 2"
              onClick={() => handleAnswer('image2')}
              className={`choice-image ${
                selectedAnswer === 'image2' ? 'selected' : ''
              }`}
            />
          </div>

          {/* Feedback based on user selection */}
          {selectedAnswer && (
            <p className="feedback-text">
              {selectedAnswer === currentQuestion?.correctAnswer
                ? 'Correct!'
                : 'Incorrect'}
            </p>
          )}
        </>
      ) : (
        <div className="end-text">
          <h3>Quiz Completed!</h3>
          <p>Your Final Score is: {score}</p>
        </div>
      )}
    </div>
  );
}

export default Choosing_Game;
