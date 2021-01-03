import React from "react";
import "./style.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Document, Page } from 'react-pdf';
import Resume from "../../Assets/SabineHutterResume.pdf"


function SabineResume(props) {
    return(
    <div className="container" id ="resume">
    <h1 className="homepagename">Resume</h1>
    <h2 className= "sabinebio" style={{display : "inline-block"}}>Connect with Sabine on LinkedIn : </h2>
    <a href="https://www.linkedin.com/in/sabinehutter/" className = "fa">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
    {/* <iframe src={props.SabineResume} title="title">
</iframe> */}

    <Document file={Resume}>
      <Page pageNumber={1} />
    </Document>
    
</div>
    )
}
export default SabineResume