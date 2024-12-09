import React from 'react';
import Navbars from './Navbars';
import "./Header.css"

function Header() {
  return (
    <div className='top'>
      <header>
        <div className='full-header'>
            <div className="header-top">
                <h1>KidzO</h1>
                <span>Let's learn and play at the same time!</span>
            </div>
            <div className='header-bottom'>
            <Navbars />
            </div>
        </div>
      </header>
            <div className='row'>
              <div className='col-md-5 mt-5 header-end' style={{width: '400px'}}>
                <span className='text-cursive'>Welcome to our Gamified Platform!</span>
                <h1 className='mb-3'>Let's Learn and Play at the Same Time!</h1>
                <p>Amazing Virtual Playground for kids!
                  <p className='mt-5'><a className ='btn btn-primary py-4 btn-custom-1' href="#">Learn More</a></p>
                </p>
              </div>
              <div className='col-md-6 img-wrapper' style={{height:'700px'}}>
                <img  className = 'img-fluid'src="/trans_logo.png" alt="image" />
              </div>
            </div>
    </div>
  );
}

export default Header;