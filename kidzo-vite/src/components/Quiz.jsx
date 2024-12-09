import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Navbars2 from './Navbar2';
import "./Quiz.css"
import Q1 from "./Q1.jsx"
import Q2 from "./Q2.jsx"

function Quiz() {
     return(
        <div className='fullscreen'>
            <Navbars2 />
            <div className='quiz-options container'>
                <nav>
                    <ul>
                      <li className='btn btn-light'><NavLink to="./quiz1"><p>Quiz 1</p></NavLink></li>
                      <li className='btn btn-light'><NavLink to="./quiz2">Quiz 2</NavLink></li>
                      <li className='btn btn-light'><NavLink to="./quiz1">Quiz 3</NavLink></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/quiz1" element={<Q1 />} />
                <Route path="/quiz2" element={<Q2 />} />
                <Route path="/quiz3" element={<Q1 />} />
                <Route path="/quiz4" element={<Q1 />} />
                <Route path="/quiz5" element={<Q1 />} />
            </Routes>
        </div>
     )
}

export default Quiz;