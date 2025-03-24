import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function CompassionQuiz() {
    const quizData = [
        {
            question: "What does compassion mean?",
            options: ["Being kind and caring for others", "Stealing their things", "Ignoring their feelings", "Avoiding them"],
            correctAnswer: 0
          },
          {
            question: "Which of these shows compassion?",
            options: ["Ignoring someone in need", "Helping a friend when they fall", "Taking their toys", "Cheating to win"],
            correctAnswer: 1
          },
          {
            question: "How can you show compassion to someone sad?",
            options: ["Pretend nothing happened", "Talk to them and listen", "Ignore them", "Force them to smile"],
            correctAnswer: 1
          },
          {
            question: "Why should we care about others' feelings?",
            options: ["Because kindness is important", "Because it makes life better for everyone", "Because it makes others scared", "Because it will make you rich"],
            correctAnswer: 1
          },
          {
            question: "Which action is an act of compassion?",
            options: ["Sharing your lunch", "Ignoring someone who is lonely", "Keeping secrets", "Lying to protect yourself"],
            correctAnswer: 0
          },
          {
            question: "What should you do if a classmate is feeling upset?",
            options: ["Avoid them", "Ask if they need help", "Laugh at them", "Take their belongings"],
            correctAnswer: 1
          },
          {
            question: "Which of these shows kindness?",
            options: ["Sharing a toy", "Stealing a toy", "Ignoring a friend", "Making fun of someone"],
            correctAnswer: 0
          },
          {
            question: "How can kindness change someone's day?",
            options: ["It can make them feel happy", "It makes everyone sad", "It doesn't change anything", "It creates problems"],
            correctAnswer: 0
          },
          {
            question: "What can you do to help someone feeling left out?",
            options: ["Make them feel welcome", "Avoid them", "Laugh at them", "Make them feel worse"],
            correctAnswer: 0
          },
          {
            question: "Which choice shows compassion toward animals?",
            options: ["Feeding and caring for them", "Ignoring their needs", "Being rough with them", "Taking their food"],
            correctAnswer: 0
          }
          
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

