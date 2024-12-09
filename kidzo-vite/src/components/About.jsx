import React from 'react';
import './About.css'
function About() {
    return (
        <>
            <div className='site-section bg-light '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mb-5 mb-md-0'>
                        <img  className = 'img-fluid' src="/kid_learning.jpg" alt="image" />
                        </div>
                        <div className='col-md-5 ml-auto pl-md-5'>
                            <span className="text-cursive h5 text-red">About Us</span>
                            <h3 className="text-black">Bring Fun Life To Your Kids</h3>
                            <p>
                                <span>Learn about many things and expand your horizons through this platform!</span>
                                <span>Learn and have fun with interactive games, quizzes, articles and many more!! </span>
                            </p>
                            <p className='mt-5'>
                            <a href="#" className="btn btn-warning py-4 btn-custom-1">More About Us</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default About;