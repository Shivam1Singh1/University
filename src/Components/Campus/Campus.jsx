import React from 'react';
import './Campus.css';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';
import whiteArrow from '../../assets/white-arrow.png';

const Campus = () => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src={gallery1} alt="Gallery Image 1" />
                <img src={gallery2} alt="Gallery Image 2" />
                <img src={gallery3} alt="Gallery Image 3" />
                <img src={gallery4} alt="Gallery Image 4" />
            </div>
            <button className="botn">
                See More <img src={whiteArrow} alt="White Arrow" />
            </button>
        </div>
    );
};

export default Campus;
