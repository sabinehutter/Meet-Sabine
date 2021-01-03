import React from 'react';
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"
import ProjectData from "../Data/projects.json"
import ProjectContaier from "../components/ProjectCard"
import Background2 from "../components/Background2"

function Portfolio() {
  return (
    <div>
      <BackgroundComponent backgroundImage={Background} style={{ height: "2000px" }}/>
      <Background2 backgroundImage={Background} style={{ height: "4000px" }}/>

      <div className="container" id="maincontent">
        <div className="row" id="mainheader">
          <h1>
            Portfolio
                </h1>
        </div>
        {ProjectData.projects.map((projects) => (
          <ProjectContaier project={projects} />
        )
        )}
      </div>

    </div>
  );
}

export default Portfolio;
