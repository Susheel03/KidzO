import React from "react";
import QuizTemplate from "./QuizTemplate";
import "./Q1.css"

export default function Q2() {
    const quizData = [
        {
            question: "How can you show respect when someone is talking to you?",
            options: ["Ignore Them", "Give Them A Hug", "Make Eye Contact", "Interrupt Them With Questions"],
            correctAnswer: 2
          },
          {
            question: "Which of these is an example of treating people how you’d want to be treated?",
            options: [
              "Luisa Sits With The New Girl At Lunch Because She Knows Starting At A New School Must Feel Lonely.",
              "Mark Can’t Find His Favorite Sweatshirt, So He Checks His Brother’s Closet To See If He Borrowed It.",
              "Ike Pretends Not To Notice Theo In The Hall Because He Doesn’t Feel Like Talking.",
              "Harriet Is In A Bad Mood, So She Kicks The Ball As Hard As She Can."
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following shows integrity?",
            options: [
              "Sally Accidentally Dropped Her Math Binder. You Look At It And Walk Away.",
              "You Pick It Up And Give It To Sally.",
              "You Step On It And Keep On Walking.",
              "You Ignore The Math Binder On The Floor."
            ],
            correctAnswer: 1
          },
          {
            question: "Integrity is when you do the right thing when no one is watching.",
            options: ["True", "False"],
            correctAnswer: 0
          },
          {
            question: "Talking behind your friend's back is an example of integrity.",
            options: ["True", "False"],
            correctAnswer: 1
          },
          {
            question: "Which of the following is NOT an example of integrity?",
            options: [
              "Keeping Promises.",
              "Going Back To A Store And Paying For Something You Forgot To Pay For.",
              "Giving Back A Bracelet Someone Dropped.",
              "Gossiping"
            ],
            correctAnswer: 3
          },
          {
            question: "Keeping money you found on the floor is an example of integrity.",
            options: ["True", "False"],
            correctAnswer: 1
          },
          {
            question: "Your mom said you could play on the tablet for 30 minutes and has set the timer. What should you do when the time is almost up?",
            options: [
              "You Secretly Add More Time On The Timer So You Can Keep Playing.",
              "You Stop Playing When The Timer Rings."
            ],
            correctAnswer: 1
          },
          {
            question: "You broke the table. Your mom asked who broke the table. What should you do?",
            options: [
              "You Tell Her You Did It.",
              "You Tell Her That You Don't Know What's Happened.",
              "You Blame It On Your Brother/Sister."
            ],
            correctAnswer: 0
          },
          {
            question: "Chris totally forgot to do his homework assignment. When it was time to turn it in, he told his teacher he was sick and hadn't been able to do the work. Is this behavior honest or dishonest?",
            options: ["Honest", "Dishonest"],
            correctAnswer: 1
          },
          {
            question: "What does honesty mean?",
            options: ["To Be Truthful", "To Tell People What They Want To Hear", "To Make People Happy"],
            correctAnswer: 0
          },
          {
            question: "What is a good example of honesty?",
            options: [
              "When You Return A Pen Which You Like To A Friend (The Pen Was Your Friend's).",
              "When You Lie To Your Teacher About Your Homework Which You Have Not Done.",
              "When You Lie To Your Mother About Finishing Your Studies."
            ],
            correctAnswer: 0
          },
          {
            question: "The quality of being truthful and straightforward in words and actions is known as what?",
            options: ["Integrity", "Honesty", "Love", "Disregard"],
            correctAnswer: 1
          }
    ];
  
    return (
      <div className="quiz-prompt">
        <QuizTemplate questions={quizData} />
      </div>
    );
  }

