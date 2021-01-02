import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

function AboutSabine(props) {

    return (

        <div id="aboutcontainer" >
            <h1 className="homepagename">Sabine Hutter</h1>
            <img className="sabinepic" src={props.backgroundImage} alt="Sabine" />
            <h2 className="sabinebio" style={{ textAlign: "center" }}>Welcome.</h2>
            <p className="sabinebio1"> Sabine works as a Senior Data Scientist and Consultant for IBM in Chicago, IL. Sabine has a Bachelors of Science in Information Analytics from the University of Michigan, Certificate of Sales and Marketing from the Ross School of Business - University of Michigan, and is currently pursuing a certificate from Columbia Engineering in Full-Stack Development. Sabine enjoys traveling, cooking, learning new things, and binge watching tv (specifically Netflix). Front-end development is Sabine's passion, she enjoys working in Vue, Javascript, React, Angular, and helping design interactive ui's for clients. This website highlights Sabine's accompliments, and showcases her most recent projects! Look around and get to know Sabine, and make sure to connect :)  </p>

            <h1 className="homepagename">Let's Connect!</h1>
            <div>
            <a href="https://www.facebook.com/huttersa"  className = "fa">
            <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://twitter.com/sabine_hutter" className = "fa">
            <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="https://www.linkedin.com/in/sabinehutter/" className = "fa">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://www.instagram.com/sabine_hutter/" className = "fa">
            <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://github.com/sabinehutter" className = "fa">
            <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="tel:7348123659" className = "fa">
            <FontAwesomeIcon icon={faPhone} />
            </a>

            <a href="mailto:SabineAHutter@gmail.com" className = "fa">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
        </div>
    );
}

export default AboutSabine