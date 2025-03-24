import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function RespectQuiz() {
    const quizData = [
      // Your quiz questions
      {
        question: "What is a way to show respect to your teacher?",
        options: ["Ignore them", "Listen when they speak", "Steal from them", "Avoid saying anything"],
        correctAnswer: 1
      },
      {
        question: "Which choice shows respect for other people's feelings?",
        options: ["Calling someone a bad name", "Listening carefully to them", "Interrupting them when they speak", "Ignoring their needs"],
        correctAnswer: 1
      },
      {
        question: "What should you do if someone is talking while you want to speak?",
        options: ["Interrupt them", "Wait your turn", "Shout over them", "Walk away"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is an act of respect?",
        options: ["Being quiet in class", "Taking others' belongings", "Ignoring rules", "Not sharing"],
        correctAnswer: 0
      },
      {
        question: "How can you show respect when sharing a toy?",
        options: ["Take it without asking", "Ask if you can share", "Never give it back", "Force the other person"],
        correctAnswer: 1
      },
      {
        question: "Which action shows respect to your parents?",
        options: ["Ignoring their advice", "Listening to their instructions", "Disobeying their rules", "Running away from home"],
        correctAnswer: 1
      },
      {
        question: "Why is respect important?",
        options: ["Because it makes you popular", "Because it helps everyone feel safe and valued", "Because it helps you win games", "Because it makes you rich"],
        correctAnswer: 1
      },
      {
        question: "Which of these shows respect for the environment?",
        options: ["Throwing trash on the ground", "Picking up litter", "Ignoring pollution", "Stealing resources"],
        correctAnswer: 1
      },
      {
        question: "How should you treat someone who is different from you?",
        options: ["Avoid them", "Respect them", "Ignore them", "Make fun of them"],
        correctAnswer: 1
      },
      {
        question: "Which is an example of showing respect during group activities?",
        options: ["Ignoring others' ideas", "Listening to everyone's opinion", "Not following the rules", "Only focusing on yourself"],
        correctAnswer: 1
      }      
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

