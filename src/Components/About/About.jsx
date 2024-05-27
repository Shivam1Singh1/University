import React from 'react';
import './about.css';
import aboutImg from '../../assets/about.png';
import playIcon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={aboutImg} alt="About" className='about-img' />
                <img src={playIcon} alt="Play Icon" className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>A future-focused college empowers students to dream big and achieve greatness. With innovative programs and inspiring faculty, it nurtures the potential within each student to become a leader in their field.</p>
                <p>Embracing change and driving progress, the college motivates students to tackle global challenges with creativity and resilience. It instills a belief that they can shape a better, more sustainable future for all.</p>
                <p>Through a vibrant community and endless opportunities, the college encourages students to pursue their passions and make meaningful contributions. Graduates leave confident, capable, and ready to make their mark on the world.</p>
            </div>
        </div>
    );
}

export default About;
