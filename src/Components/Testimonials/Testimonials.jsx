import React, { useRef } from 'react';
import './Testimonials.css';
import nextIcon from '../../assets/next-icon.png';
import backIcon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={nextIcon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={backIcon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="Sofia Garcia" />
                                <div>
                                    <h3>Sofia Garcia</h3>
                                    <span>Edusity, Chicago</span>
                                </div>
                            </div>
                            <p>Thank you, College, for providing a quality education, invaluable career opportunities, and fostering personal growth. Your support and community have enriched my life through social connections, extracurricular activities, and a strong alumni network.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="Nandre Burger" />
                                <div>
                                    <h3>Nandre Burger</h3>
                                    <span>Edusity, Nevada</span>
                                </div>
                            </div>
                            <p>Thank you for shaping my journey with outstanding education and enriching extracurriculars. Your support and vibrant community have been instrumental in my development. Proud to be an alumnus!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="Emily Johnson" />
                                <div>
                                    <h3>Emily Johnson</h3>
                                    <span>Edusity, Vegas</span>
                                </div>
                            </div>
                            <p>Thank you for the exceptional education, supportive community, and lifelong friendships. Your dedication to student success has profoundly impacted my personal and professional growth. Forever grateful!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="Sam Wilson" />
                                <div>
                                    <h3>Sam Wilson</h3>
                                    <span>Edusity, Miami</span>
                                </div>
                            </div>
                            <p>Thank you for the exceptional education, supportive community, and lifelong friendships. Your dedication to student success has profoundly impacted my personal and professional growth. Forever grateful!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
