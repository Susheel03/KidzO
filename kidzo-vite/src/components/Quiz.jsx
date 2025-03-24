import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Navbars2 from './Navbar2';
import "./Quiz.css";
import HonestyQuiz from './HonestyQuiz';
import RespectQuiz from './RespectQuiz';
import JusticeQuiz from './JusticeQuiz';
import CompassionQuiz from './CompassionQuiz';
import ResponsibilityQuiz from './ResponsibilityQuiz';
import EnvironmentQuiz from './EnvironmentQuiz';

function Quiz() {
  const location = useLocation();
  const isOnQuizRoute = location.pathname.startsWith('/quiz/'); // New logic to only show quiz content

  return (
    <div className='fullscreen'>
      <Navbars2 />

      {/* Render the main menu unless we're on a quiz route */}
      {!isOnQuizRoute && (
        <div className='quiz-options container'>
          <nav>
            <ul>
              <li className='btn btn-light'>
                <NavLink to="./quiz/honesty">Honesty</NavLink>
              </li>
              <li className='btn btn-light'>
                <NavLink to="./quiz/respect">Respect</NavLink>
              </li>
              <li className='btn btn-light'>
                <NavLink to="./quiz/justice">Justice</NavLink>
              </li>
              <li className='btn btn-light'>
                <NavLink to="./quiz/compassion">Compassion</NavLink>
              </li>
              <li className='btn btn-light'>
                <NavLink to="./quiz/responsibility">Responsibility</NavLink>
              </li>
              <li className='btn btn-light'>
                <NavLink to="./quiz/environment">Environment</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Quiz Routes */}
      <Routes>
        <Route path="/quiz/honesty" element={<HonestyQuiz />} />
        <Route path="/quiz/respect" element={<RespectQuiz />} />
        <Route path="/quiz/justice" element={<JusticeQuiz />} />
        <Route path="/quiz/compassion" element={<CompassionQuiz />} />
        <Route path="/quiz/responsibility" element={<ResponsibilityQuiz />} />
        <Route path="/quiz/environment" element={<EnvironmentQuiz />} />
      </Routes>
    </div>
  );
}

export default Quiz;
