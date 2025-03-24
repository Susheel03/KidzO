import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function JusticeQuiz() {
    const quizData = [
        {
            question: "What does justice mean?",
            options: ["Being fair to everyone", "Ignoring rules", "Punishing people", "Keeping secrets"],
            correctAnswer: 0
          },
          {
            question: "Which choice shows fairness?",
            options: ["Giving everyone the same chance", "Ignoring other people's needs", "Taking unfair advantages", "Cheating to win"],
            correctAnswer: 0
          },
          {
            question: "If your friend is unfair to someone, what should you do?",
            options: ["Ignore it", "Tell a teacher", "Get angry", "Cheer them on"],
            correctAnswer: 1
          },
          {
            question: "What should you do if someone breaks the rules?",
            options: ["Pretend nothing happened", "Tell an adult", "Join them", "Run away"],
            correctAnswer: 1
          },
          {
            question: "How can you show justice at school?",
            options: ["Take other kids' toys", "Share and take turns fairly", "Make fun of other students", "Ignore conflicts"],
            correctAnswer: 1
          },
          {
            question: "Why is fairness important?",
            options: ["Because everyone deserves to be treated equally", "Because unfairness is fun", "Because it solves arguments quickly", "Because it causes no trouble"],
            correctAnswer: 0
          },
          {
            question: "How can you solve an unfair situation with friends?",
            options: ["Talk and share feelings", "Ignore it", "Cheat to win", "Fight about it"],
            correctAnswer: 0
          },
          {
            question: "What does it mean to give someone equal opportunities?",
            options: ["Always let the strongest win", "Let everyone try the same tasks fairly", "Cheat in games", "Punish mistakes only"],
            correctAnswer: 1
          },
          {
            question: "How should you handle situations where you witness unfair behavior?",
            options: ["Tell someone in authority", "Ignore it", "Support unfair behavior", "Take part in unfair behavior"],
            correctAnswer: 0
          },
          {
            question: "Why should we follow rules at school?",
            options: ["They are fun", "To make sure everyone is treated equally", "To make learning harder", "To get more attention"],
            correctAnswer: 1
          }
              
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

