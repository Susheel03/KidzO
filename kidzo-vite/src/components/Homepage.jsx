import React from 'react';
import Header from './Header'
import Events from './Events';
import About from './About';


function Homepage(){
  return(
    <div>
      <Header />
      <Events />
      <About />
    </div>
  )
}
export default Homepage;