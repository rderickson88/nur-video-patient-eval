import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from "./Video";



function PatientEvalForm() {
    const [video, setVideo] = React.useState({
        src: "https://www.youtube.com/embed/aBE9EQ7gXKI",
        title: "Patient Evaluation #1",
        frameborder: "1",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true
        
    });
    const formData = {
        patientProfile: {
            name: "", 
            gender: "",
            caregiver: "", 
            presentingConcern: "", 
            relevantHistory: ""
        }, 
        assessmentSummary: {
            physical: "", 
            psychosocial: "", 
            environmental: "",
            developmental: ""
        }, 
        nursingDiagnosis: {
            goalOne: "", 
        }
    }


    return(
        <>
            <div class = "container-fluid">
                <div class = "row">
                    <div class = "col">
                        <Video videoSrc = {video}/>
                    </div>
            <div class = "col">
                <div class = "container-fluid" style = {{height: '90vh', overflowY: "auto"}}>
                <div class = "row">
                <h1 className = "display-3 text-center">Patient Evaluation Form</h1>
                </div>
                <div class = "row mt-4 text-center">
                    <h3>Patient Profile</h3>
                </div>
                <div class = "row">
                    <div class = "col-4">
                        <h5>Patient Name: </h5>
                    </div>
                    <div class = "col-8">
                        <input type = "text" class = "form-control" placeholder = "Enter Patient Name" />
                    </div>
                    <div class = "col-4">
                        <h5>Patient Gender: </h5>
                    </div>
                    <div class = "col-8">
                        <input type = "text" class = "form-control" placeholder = "Enter Patient Gender" />
                    </div>
                    <div class = "col-4">
                        <h5>Patient Caregiver(s): </h5>
                    </div>
                    <div class = "col-8">
                        <textarea class = "form-control" placeholder = "Enter Patient Caregiver(s)" />
                    </div>
                    <div class = "col-4">
                        <h5>Relevant History: </h5>
                    </div>
                    <div class = "col-8">
                       <textarea class = "form-control" placeholder = "Enter Relevant History" />
                    </div>
                    <div className = "row mt-4 text-center">
                        <h3>Assessment Summary</h3>
                    </div>
                    <div className = "row">
                        <div className = "col-4">
                            <h5>Physical Health</h5>
                        </div>
                        <div className = "col-8">
                            <textarea class = "form-control" placeholder = "Enter Physical Health" />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-4">
                            <h5>Psychosocial Health</h5>
                        </div>
                        <div className = "col-8">
                            <textarea class = "form-control" rows = "4" placeholder = "Enter Psychosocial Health" />
                        </div>
                    </div>
                        <div className = "row">
                            <div className = "col-4">
                                <h5>Environment / Safety Factors</h5>
                            </div>
                            <div className = "col-8">
                                <textarea class = "form-control" rows = "4" placeholder = "Enter any relevant Environment / Safety factors" />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-4">
                                <h5>Nursing Diagnoses</h5>
                            </div>
                            <div className = "col-8">
                                <textarea class = "form-control" rows = "4" placeholder = "Enter Nursing Diagnoses (minimum 2)" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
        
    )

}
export default PatientEvalForm;