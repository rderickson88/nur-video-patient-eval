import 'bootstrap/dist/css/bootstrap.min.css'

import Video from './Video.jsx'
import PatientEvalForm from './PatientEvalForm.jsx'
function App() {

  return (
    <>
      <div class = "container-fluid vh-100 d-flex flex-column">
        <div className = "row p-3">
          <h1>This is a website</h1>
        </div>
        <div className = "row border">
          
            <PatientEvalForm />
          
        </div>
        <div className = "row mt-4">
          <div className = "col">
            <button className = "btn btn-primary" type = "button">Submit</button>
          </div>
          <div className = "col">
            <button className = "btn btn-primary" type = "button">Save</button>
          </div>
          <div className = "col">
            <button className = "btn btn-primary" type = "button">Reset</button>
          </div>
         
        </div>
      </div>

    </>
  )
}

export default App
