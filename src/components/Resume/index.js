import React from "react";
import "./style.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SabineResume(props) {
    return(
    <div className="container" id ="resume">
    <h1 className="homepagename">Resume</h1>
    <h2 className= "sabinebio" style={{display : "inline-block"}}>Connect with Sabine on LinkedIn : </h2>
    <a href="https://www.linkedin.com/in/sabinehutter/" className = "fa">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
    <iframe src={props.SabineResume} title="title">
</iframe>
    
</div>
    )
}
export default SabineResume