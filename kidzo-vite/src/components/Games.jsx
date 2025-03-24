import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Navbars2 from './Navbar2';

import honestyQuestions from './games/questions/honesty';
import compassionQuestions from './games/questions/compassion';
import environmentQuestions from './games/questions/environment';
import justiceQuestions from './games/questions/justice';
import respectQuestions from './games/questions/respect';
import responsibilityQuestions from './games/questions/responsibility';

import Choosing_Game from './games/choosing_game';
import Wordle_Game from './games/Wordle_Game';
import GameOfFifteen from './games/GameOfFifteen';
import { Game } from 'phaser';

function Games() {
  const location = useLocation();
  
  // Check if the user is currently in a quiz route or on Wordle
  const isOnQuizRoute = location.pathname.startsWith('/ethics/');
  const isOnWordleRoute = location.pathname.startsWith('/wordle');

  return (
    <div className='fullscreen'>
      <Navbars2 />

      {/* Show Navigation Only if NOT on a quiz route or Wordle route */}
      {!isOnQuizRoute && !isOnWordleRoute && (
        <div className="quiz-options container">
          <nav>
            <ul>
              <li className="btn btn-light">
                <NavLink to="/ethics/honesty">Honesty</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink to="/ethics/compassion">Compassion</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink to="/ethics/environment">Environment</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink to="/ethics/justice">Justice</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink to="/ethics/respect">Respect</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink to="/ethics/responsibility">Responsibility</NavLink>
              </li>
              <li className="btn btn-light">
                <NavLink 
                    to="/wordle" 
                    onClick={(e) => {
                    alert("Wordle is not finished yet!");
                    e.preventDefault(); // Prevent navigation
                    }}
                >
                    Wordle
                </NavLink>
                </li>
                <li className="btn btn-light">
    <                NavLink to="/gameoffifteen">Game of Fifteen</NavLink>
                </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Handle Routes */}
      <Routes>
        {/* Ethics Routes */}
        <Route path="/ethics/honesty" element={<Choosing_Game questions={honestyQuestions} />} />
        <Route path="/ethics/compassion" element={<Choosing_Game questions={compassionQuestions} />} />
        <Route path="/ethics/environment" element={<Choosing_Game questions={environmentQuestions} />} />
        <Route path="/ethics/justice" element={<Choosing_Game questions={justiceQuestions} />} />
        <Route path="/ethics/respect" element={<Choosing_Game questions={respectQuestions} />} />
        <Route path="/ethics/responsibility" element={<Choosing_Game questions={responsibilityQuestions} />} />

        {/* Wordle Route */}
        <Route path="/wordle" element={<Wordle_Game />} />
        <Route path = "/gameoffifteen" element = {<GameOfFifteen />} ></Route>
      </Routes>
    </div>
  );
}

export default Games;
