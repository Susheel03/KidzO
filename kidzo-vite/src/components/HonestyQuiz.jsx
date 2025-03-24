import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function HonestyQuiz() {
    const quizData = [
      // Your quiz questions
      {
        question: "Which of the following means always telling the truth?",
        options: ["Lying", "Honesty", "Stealing", "Ignoring"],
        correctAnswer: 1
      },
      {
        question: "If you break a toy at a friend's house, what should you do?",
        options: ["Say nothing", "Tell the truth to your friend", "Steal another toy", "Ignore the problem"],
        correctAnswer: 1
      },
      {
        question: "Which of these actions shows honesty?",
        options: ["Hiding mistakes", "Admitting mistakes", "Keeping secrets", "Ignoring others' feelings"],
        correctAnswer: 1
      },
      {
        question: "If you accidentally took a friend's pencil, what should you do?",
        options: ["Give it back and apologize", "Keep it because they won’t notice", "Say you didn’t take it", "Hide the pencil"],
        correctAnswer: 0
      },
      {
        question: "What does being honest make people feel?",
        options: ["Sad", "Happy", "Angry", "Confused"],
        correctAnswer: 1
      },
      {
        question: "Which of these shows you are being honest?",
        options: ["You admit your mistake", "You lie to save yourself", "You avoid others", "You pretend to forget things"],
        correctAnswer: 0
      },
      {
        question: "When you tell the truth, others will...",
        options: ["Not trust you", "Trust you", "Avoid you", "Punish you"],
        correctAnswer: 1
      },
      {
        question: "Why is honesty important?",
        options: ["It makes life easier", "It helps build trust", "It avoids punishment", "It makes you rich"],
        correctAnswer: 1
      },
      {
        question: "If you lie, how might others feel?",
        options: ["Happy", "Confused and sad", "Excited", "Joyful"],
        correctAnswer: 1
      },
      {
        question: "Which choice shows honesty when you make a mistake?",
        options: ["Hide the truth", "Tell the truth and apologize", "Lie to avoid getting in trouble", "Avoid the person involved"],
        correctAnswer: 1
      }
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

