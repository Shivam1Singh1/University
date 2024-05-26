import React from 'react';
import './Campus.css';

const Campus = () => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src="src\assets\gallery-1.png" alt="" />
                <img src="src\assets\gallery-2.png" alt="" />
                <img src="src\assets\gallery-3.png" alt="" />
                <img src="src\assets\gallery-4.png" alt="" />
            </div>
            <button className="botn">See More <img src="src\assets\white-arrow.png" alt="" /></button>
        </div>
    );
};

export default Campus;
