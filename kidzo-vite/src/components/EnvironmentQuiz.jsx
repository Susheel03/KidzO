import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function EnvironmentQuiz() {
    const quizData = [
        {
            question: "Which of these is good for the environment?",
            options: ["Throwing trash in parks", "Recycling items", "Using plastic bags everywhere", "Using more electricity than needed"],
            correctAnswer: 1
          },
          {
            question: "Why should we not litter?",
            options: ["Because litter can harm animals", "Because it is pretty", "Because it keeps the playground clean", "Because everyone will join in"],
            correctAnswer: 0
          },
          {
            question: "What can you do to save energy at home?",
            options: ["Leave the lights on all day", "Turn off lights when leaving a room", "Use more water", "Use more electricity"],
            correctAnswer: 1
          },
          {
            question: "How can recycling help the environment?",
            options: ["It doesn’t do anything", "It reduces waste and saves resources", "It makes recycling harder", "It wastes resources"],
            correctAnswer: 1
          },
          {
            question: "Which action is bad for the environment?",
            options: ["Planting a tree", "Littering", "Saving water", "Walking instead of driving"],
            correctAnswer: 1
          },
          {
            question: "How can you help save the environment every day?",
            options: ["Recycling and walking to school", "Throwing garbage anywhere", "Using more water daily", "Using plastic packaging"],
            correctAnswer: 0
          },
          {
            question: "Why is it important to save water?",
            options: ["It is limited", "It can flood the streets", "It makes plants grow faster", "It is used only for fun"],
            correctAnswer: 0
          },
          {
            question: "Which choice is harmful to the environment?",
            options: ["Planting trees", "Throwing garbage on the ground", "Saving energy", "Recycling"],
            correctAnswer: 1
          },
          {
            question: "Which action shows care for nature?",
            options: ["Picking up litter", "Burning trash", "Ignoring trash", "Driving instead of walking"],
            correctAnswer: 0
          },
          {
            question: "What happens if we waste too much electricity?",
            options: ["We run out of it", "It keeps going without any consequences", "It makes the earth cleaner", "It causes pollution"],
            correctAnswer: 0
          }
          
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

