import React from 'react';
import './Events.css'
function Events() {
    return (
        <div className='site-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 blocks'>
                        <div className='block-2 red'>
                            <h2>Quizzes</h2>
                            <p>Participate in fun Quizzes and interactive Sessions!</p>
                        </div>
                    </div>
                    <div className='col-lg-4 blocks'>
                    <div className='block-2 yellow'>
                            <h2>Games</h2>
                            <p>Play games to learn about good morals and ethics!</p>
                    </div>
                    </div>
                    <div className='col-lg-4 blocks'>
                    <div className='block-2 teal'>
                            <h2>Stories</h2>
                            <p>Interested in knowing more? Learn about more things from different articles</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Events;