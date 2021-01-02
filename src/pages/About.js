import React from "react";
import AboutSabine from "../components/AboutContainer"
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"
import Image from "../Assets/sabine.jpg"

function About() {
  return (
    <div>
    <BackgroundComponent backgroundImage = {Background} style = {{height : "2000px"}}></BackgroundComponent>
    <AboutSabine backgroundImage = {Image}/>
    <div>

    </div>
    </div>
  );
}

export default About;
