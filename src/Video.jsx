import React from "react";
import './Video.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Video({videoSrc}) {
    return (
        <div className="container">
        <h1 className = "display-3 text-center">{videoSrc.title}</h1>
        <div className = "video-container">
        <iframe 
            className = "embed" 
            src= {videoSrc.src} 
                title={videoSrc.title}
                allowfullscreen
                width ="100%"
                />
        </div>
        </div>
    );
}

export default Video;