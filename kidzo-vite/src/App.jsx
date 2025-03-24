import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider,RedirectToSignIn, SignedIn,SignIn, SignedOut, SignInButton,SignOutButton, UserButton } from '@clerk/clerk-react';
import Homepage from './components/Homepage';
import Games from './components/Games';
import Quiz from './components/Quiz';
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <div className='pages'>
            <div className='app-container'>
              <SignIn />
            </div> 
          </div>
        </SignedOut>
          <SignedIn>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/*' element = {<Games/>} />
              <Route path = '/quizzes/*' element = {<Quiz />} />
            </Routes>
          </SignedIn>
      </header>
    </Router>
  );
}

export default App;