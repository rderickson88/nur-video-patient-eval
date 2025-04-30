import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Video from "./Video";
import PatientEvalForm from "./PatientEvalForm";


function App() {
    
    const videos = [
        {
            id: 0,
            src: "",
            title: "Select a Video",
        }, 
        {
            id: 1,
            src: "https://www.youtube.com/embed/aBE9EQ7gXKI",
            title: "Patient Evaluation #1",
            
        },
        {
            id: 2,
            src: "https://youtu.be/uKZGxW5BAe8",
            title: "Patient Evaluation #2",
            
        },
        {
            id: 3,
            src: "https://youtu.be/kfVsfOSbJY0",
            title: "Patient Evaluation #3",
            
        },
    ];

    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    const handleVideoChange = (video) => {
        setCurrentVideo(video);
    }
    

    return (
      <>
        <div className = "container-fluid">

          {/* Header Section */}
            <div className = "row border-6 p-3 bg-dark text-white">
              <div className = "col-sm-4">
                <h3 className = "display-6">Nursing Evaluation Demo</h3>
              </div>
              <div className = "col-lg-8 text-center align-self-center">
                <h5 className = "text-light">Menu will go here</h5>
              </div>
            </div>
          {/* End header Section */}
          

           {/* Dropdown Menu */}
           <div className="row mt-3 mb-3">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id="videoDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Video
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="videoDropdown">
                            {videos.map((video) => (
                                <li key={video.id}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleVideoChange(video)}
                                    >
                                        {video.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
          

          {/* Video Section */}
          <div className = "row mt-3">
            <div className = "col-sm-4 border border-1">
              <Video videoSrc = {currentVideo} />
            </div>
            <div className = "col-lg-8 border border-6" style = {{height: "70vh", overflowY: "scroll"}}>
              <PatientEvalForm />
            </div>
          </div>
          
        </div>
      </>
    )
  }

  export default App;