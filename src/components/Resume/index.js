import React from "react";

function Resume() {
    return(
    <div class="container" id ="maincontent">
    <h1 class="homepagename">Resume</h1>
    <h2 class= "sabinebio" style="display : inline-block">Connect with Sabine on LinkedIn : </h2>
    <a href="https://www.linkedin.com/in/sabinehutter/" style="display : inline-block; padding-top: 13px;" class="fa fa-linkedin-square"></a>

    <iframe src="/Assets/SabineHutterResume.pdf" width="100%" height="1100px">
    </iframe>
    
</div>
    )
}
export default Resume