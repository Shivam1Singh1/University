import React, { useRef } from 'react';
import './Video.css';
import videoFile from '../../assets/video.mp4'; // Ensure the correct path to your video file

const Video = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={videoFile} autoPlay muted controls></video>
        </div>
    );
}

export default Video;
