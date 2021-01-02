import React from "react";
import AboutSabine from "../components/AboutContainer"
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"
import Image from "../Assets/sabine.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(props) {
  return (
    <div>
    <BackgroundComponent backgroundImage = {Background} style = {{height : "2000px"}}></BackgroundComponent>
    <AboutSabine backgroundImage = {Image}/>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    </div>
  );
}

export default About;
