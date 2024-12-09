import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function Q1() {
    const quizData = [
      // Your quiz questions
    {
        question: "The way in which somebody behaves (acts in a particular way); the way a person or group responds to a certain set of conditions",
      options: ["Behavior", "Morals", "Ethics", "Etiquette"],
      correctAnswer: 0
    },
    {
      question: "Involve right and wrong; relates to issues of right and wrong and how individual people should behave",
      options: ["Behavior", "Morals", "Ethics", "Etiquette"],
      correctAnswer: 2
    },
    {
      question: "Code of morals of a particular person, group, or profession ",
      options: ["Behavior", "Morals", "Ethics", "Etiquette"],
      correctAnswer: 2
    },
    {
      question: "Governs the usage or redistribution of copyright protected software ",
      options: ["Software Licence", "Site Licence", "Shareware", "Free ware"],
      correctAnswer: 0
    },
    {
      question: "A license to use software on multiple computers (like in a school lab or a business) ",
      options: ["Software Licence", "Site Licence", "Shareware", "Free ware"],
      correctAnswer: 1
    },
    {
      question: "The author (owner) will let you download it, and if you like it and want to use it, you are expected to pay a fair price for it   ",
      options: ["Software Licence", "Site Licence", "Shareware", "Free ware"],
      correctAnswer: 2
    },
    {
      question: "Software you can download and use for free ",
      options: ["Software Licence", "Site Licence", "Shareware", "Free ware"],
      correctAnswer: 3
    },
    {
      question: "Illegal or improper use of software—no license to use it ",
      options: ["Unauthorized Use", "Software Piracy", "Plagiarism", "Fair Use"],
      correctAnswer: 1
    },
    {
      question: "Copying and using commercial software purchased by someone else ",
      options: ["Unauthorized Use", "Software Piracy", "Plagiarism", "Fair Use"],
      correctAnswer: 1
    },
    {
      question: "Using a portion or piece of writing that has been copied from someone else and presenting it as your own work ",
      options: ["Unauthorized Use", "Software Piracy", "Plagiarism", "Fair Use"],
      correctAnswer: 2
    },
    {
      question: "If you use copyrighted material in a report or project you should always give credit to the author or illustrator of work you are using (examples—when you use a photograph from the internet, a quote from a book)",
      options: ["Unauthorized Use", "Software Piracy", "Plagiarism", "Fair Use"],
      correctAnswer: 3
    },
    {
      question: "State of not being identified (this is nearly impossible online)",
      options: ["Anonymity", "Software Piracy", "Plagiarism", "Fair Use"],
      correctAnswer: 0
    },
    {
      question: "The exclusive privilege that allows an author or owner to print or sell his/her own work ",
      options: ["Fair Use", "Copyright", "Shareware", "Unauthorized Use"],
      correctAnswer: 1
    }
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

