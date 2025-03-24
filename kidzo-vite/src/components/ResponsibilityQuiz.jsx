import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function ResponsibilityQuiz() {
    const quizData = [
      // Your quiz questions
      {
        question: "Which of the following shows responsibility?",
        options: ["Ignoring your homework", "Completing your chores on time", "Running away from problems", "Breaking rules"],
        correctAnswer: 1
      },
      {
        question: "What should you do if you forgot to bring your lunch to school?",
        options: ["Lie about it", "Ask your teacher for help", "Steal someone else’s food", "Avoid all responsibility"],
        correctAnswer: 1
      },
      {
        question: "What does being responsible mean?",
        options: ["Avoiding punishment", "Completing your duties and helping others", "Always getting attention", "Having fun only"],
        correctAnswer: 1
      },
      {
        question: "Which choice shows responsibility at home?",
        options: ["Leaving your toys everywhere", "Cleaning your room when asked", "Ignoring your parents' instructions", "Breaking the rules"],
        correctAnswer: 1
      },
      {
        question: "How do you show responsibility to your friends?",
        options: ["Sharing your things", "Taking their belongings", "Ignoring their feelings", "Avoiding making promises"],
        correctAnswer: 0
      },
      {
        question: "Why is responsibility important?",
        options: ["It makes you rich", "It keeps your promises and builds trust", "It makes life easier", "It avoids being noticed"],
        correctAnswer: 1
      },
      {
        question: "Which is an example of being responsible in school?",
        options: ["Skipping assignments", "Completing homework", "Avoiding study time", "Playing during lessons"],
        correctAnswer: 1
      },
      {
        question: "How should you take care of a borrowed toy?",
        options: ["Return it broken", "Handle it carefully", "Keep it forever", "Forget about it"],
        correctAnswer: 1
      },
      {
        question: "Which of the following shows responsibility for the environment?",
        options: ["Throwing litter", "Recycling and cleaning up trash", "Ignoring pollution", "Ignoring others' needs"],
        correctAnswer: 1
      },
      {
        question: "What is a responsible thing to do during group work?",
        options: ["Do nothing", "Listen to others and contribute", "Ignore others", "Focus only on your idea"],
        correctAnswer: 1
      }
         
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

