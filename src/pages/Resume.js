import React from "react";
import SabineResume from "../components/Resume"
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"
import SabResume from "../Assets/background.jpg"


function Resume() {
  return (
    <div>
      <BackgroundComponent backgroundImage = {Background} style = {{height : "2000px"}}></BackgroundComponent>
      <SabineResume resume={SabResume}/>
    </div>
  );
}

export default Resume;
