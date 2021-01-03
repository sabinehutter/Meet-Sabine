import React from "react";
import "./style.css";


function ProjectCard(props) {


        // props.projectData.projects.forEach(element => {
        //     console.log(element);
            // Return the element. Also pass key     
            return (

            
            
            <div className="col projectcard" style = {{width: "30%"}}>

                <div className="card" style={{ width: "18rem", display: "inline-block" }}>
                    <img className="card-img-top" src={props.project.projectImg} alt= "" />
                    <div className="card-body">
                        <h4 className="card-text1">{props.project.projectTitle}</h4>
                        <p className="card-text">{props.project.projectDesc}</p>
                        <a href={props.project.projectLink} className="btn btn-primary">Check Out Directory</a>
                        <a href={props.project.projectCode} className="btn btn-primary">Check Out Code</a>


                    </div>
                </div>
            </div>)
        }

export default ProjectCard;