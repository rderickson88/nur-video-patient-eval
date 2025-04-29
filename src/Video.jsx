import React from "react";
import './Video.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Video({videoSrc}) {
    return (
        <div className="container">
        <h1>Video</h1>
        <div className = "video-container">
        <iframe 
            className = "embed" 
            src= {videoSrc} 
                title="Spanish Flea" 
                frameborder="1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                />
        </div>
        </div>
    );
}

export default Video;