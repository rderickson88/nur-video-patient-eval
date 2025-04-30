import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function PatientEvalForm() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: "", 
        age: "",
        gender: "",
        caregivers: "", 
        presentingConcern: "", 
        relevantHistory: "", 
        physicalHealth: "", 
        psychosocialHealth: "",
        environmentalHealth: "",
        developmentalHealth: "",
        nursingDiagnosis: "", 
        goals: "", 
        interventions: "", 
        familyEducation: "", 
        followUpPlan: ""
    });

    // Handler to update form data
    const handleInputChange = (e) => {
        const { id, value } = e.target; // Get the input's id and value
        setFormData((prevData) => ({
            ...prevData,
            [id]: value, // Update the corresponding field in formData
        }));
    };

    return (
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col text-center bg-light">
                    <button className="btn btn-primary m-3">Save Your Progress</button>
                    <button className="btn btn-warning m-3">Export Report</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Patient Profile</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Patient Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Patient Name"
                            value={formData.name} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Patient Age</label>
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            placeholder="Enter Patient Age"
                            value={formData.age} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Patient Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gender"
                            placeholder="Enter Patient Gender"
                            value={formData.gender} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="caregivers" className="form-label">Caregivers</label>
                        <textarea
                            className="form-control"
                            id="caregivers"
                            placeholder="Enter Caregivers"
                            value={formData.caregivers} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="presentingConcern" className="form-label">Presenting Concern</label>
                        <textarea
                            className="form-control"
                            id="presentingConcern"
                            placeholder="Presenting Concern"
                            value={formData.presentingConcern} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="relevantHistory" className="form-label">Relevant History</label>
                        <textarea
                            className="form-control"
                            id="relevantHistory"
                            placeholder="Relevant History"
                            value={formData.relevantHistory} // Bind the input to formData
                            onChange={handleInputChange} // Update formData on change
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}