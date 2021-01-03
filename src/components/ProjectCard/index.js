import React from "react";
import "./style.css";


function ProjectCard(props) {


        // props.projectData.projects.forEach(element => {
        //     console.log(element);
            // Return the element. Also pass key     
            return (

            
            
            <div className="col col-sm-12 col-md-4" id="projectcard ">

                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="/Assets/Images/eMeets.jpg" alt="Card cap" />
                    <div className="card-body">
                        <h4 className="card-text1">{props.project.projectTitle}</h4>
                        <p className="card-text">{props.project.projectDesc}</p>
                        <a href={props.project.ProjectLink} className="btn btn-primary">Check Out Directory</a>
                        <a href={props.project.ProjectCode} className="btn btn-primary">Check Out Code</a>


                    </div>
                </div>
            </div>)
        }

export default ProjectCard;