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
                frameborder= {videoSrc.frameborder}
                allow= {videoSrc.allow}
                referrerpolicy={videoSrc.referrerpolicy} 
                allowfullscreen
                />
        </div>
        </div>
    );
}

export default Video;