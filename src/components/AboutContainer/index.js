import React from "react";
import "./style.css";

function AboutSabine() {
    return (
        <div className="container" id="maincontent">
            <h1 className="homepagename">Sabine Hutter</h1>
            <img className="sabinepic" src="/Assets/Images/sabine.jpg" alt="Sabine" />
            <h2 className="sabinebio" style={{ textAlign: "center" }}>Welcome.</h2>
            <p className="sabinebio1"> Sabine works as a Senior Data Scientist and Consultant for IBM in Chicago, IL. Sabine has a Bachelors of Science in Information Analytics from the University of Michigan, Certificate of Sales and Marketing from the Ross School of Business - University of Michigan, and is currently pursuing a certificate from Columbia Engineering in Full-Stack Development. Sabine enjoys traveling, cooking, learning new things, and binge watching tv (specifically Netflix). Front-end development is Sabine's passion, she enjoys working in Vue, Javascript, React, Angular, and helping design interactive ui's for clients. This website highlights Sabine's accompliments, and showcases her most recent projects! Look around and get to know Sabine, and make sure to connect :)  </p>

            <h1 className="homepagename">Let's Connect!</h1>
        </div>
    );
}

export default AboutSabine