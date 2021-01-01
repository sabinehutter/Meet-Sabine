import React from "react";
import "./style.css";



function SabineResume() {
    return(
    <div className="container" id ="maincontent">
    <h1 className="homepagename">Resume</h1>
    <h2 className= "sabinebio" style={{display : "inline-block"}}>Connect with Sabine on LinkedIn : </h2>
    {/* <a href="https://www.linkedin.com/in/sabinehutter/" style="display : inline-block; padding-top: 13px;" className="fa fa-linkedin-square"></a> */}

    <iframe src="../../Assets/SabineHutterResume.pdf" title="title">
     Presss me: <a href="../../Assets/SabineHutterResume.pdf">Download PDF</a>
</iframe>
    
</div>
    )
}
export default SabineResume