import React from 'react'
import './programs.css'

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src="src\assets\program-1.png" alt="" />
                <div className="captain">
                    <img src="src\assets\program-icon-1.png" alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src="src\assets\program-2.png" alt="" />
                <div className="captain">
                    <img src="src\assets\program-icon-2.png" alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src="src\assets\program-3.png" alt="" />
                <div className="captain">
                    <img src="src\assets\program-icon-3.png" alt="" />
                    <p>Post Graduation Degree</p>
                </div>
            </div>
        </div>

    )
}

export default Programs
