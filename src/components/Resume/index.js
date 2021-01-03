import React from "react";
import "./style.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import Resume from "../../Assets/SabineHutterResume.pdf"

function SabineResume(props) {
    return(
    <div className="container" id ="resume">
    <h1 className="homepagename">Resume</h1>
    <h2 className= "sabinebio" style={{display : "inline-block"}}>Connect with Sabine on LinkedIn : </h2>
    <a href="https://www.linkedin.com/in/sabinehutter/" className = "fa">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
    <div id="pdfviewer" style = {{height : "90%"}}>
        <Viewer fileUrl={Resume} /> 
    </div>
    </Worker>
    
</div>
    )
}
export default SabineResume