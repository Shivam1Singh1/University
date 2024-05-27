import React from 'react';
import './Hero.css';
import darkArrow from '../../assets/dark-arrow.png';

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Unlock your potential with our top-tier college education, where innovation meets opportunity. Join us to shape your future with unparalleled academic excellence and vibrant campus life.</p>
                <button className='btn'>Explore more <img src={darkArrow} alt="Arrow Icon" /></button>
            </div>
        </div>
    );
}

export default Hero;
