import React from 'react';
import BackgroundComponent from "../components/Background"
import Background from "../Assets/background.jpg"
import ProjectData from "../Data/projects.json"
import ProjectContaier from "../components/ProjectCard"

function Portfolio() {
  return (
    <div>
    <BackgroundComponent backgroundImage = {Background} style = {{height : "2000px"}}></BackgroundComponent>

      <div className="container" id="maincontent">
            <div className="row" id="mainheader">
                <h1>
                    Portfolio
                </h1>
            </div>
          {/* console.log(ProjectData) */}
          {ProjectData.projects.map((projects) => (
          // console.log(projects)
          <ProjectContaier project={projects} />
        )
        )}


            {/* <ProjectContaier projectData = {ProjectData}/> */}
</div>


            </div>
  );
}

export default Portfolio;
