import React from "react";
import Iframe from 'react-iframe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume() {
    const resumeStyle = {
        width: "100%", 
        height: "1100px",
        border: ".5px solid lightgrey",
        backgroundColor: "white",
        borderRadius: "25px",
        padding: "40px",
        margin: "auto",
        marginBottom: "20px",
        backgroundImage: "url('https://github.com/sabinehutter/sabinehutter.github.io/blob/master/Assets/Images/backgrounf.jpg')",
        backgroundSize: "cover"

    };
    return (
        <div className="container" id ="maincontent" style = {{resumeStyle}}>
        <h1 className="homepagename">Resume</h1>
        <h4 classNamee= "sabinebio" style={{display : "inline-block"}} >Connect with Sabine on LinkedIn : </h4>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        {/* <FontAwesomeIcon href="https://www.linkedin.com/in/sabinehutter/" icon={["fab", "apple"]} /> */}
        <FontAwesomeIcon icon="coffee" />


        <Iframe url="https://github.com/sabinehutter/sabinehutter.github.io/blob/master/Assets/SabineHutterResume.pdf"
        width="100%"
        height="450px"
        position="relative"/>
        
    </div>
    )

}

export default Resume;