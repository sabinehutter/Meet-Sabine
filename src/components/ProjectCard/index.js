import React from "react";
import "./style.css";

function ProjectCard(props) {   
            return (
            
            <div className="col projectcard" style = {{width: "30%"}}>
                <div className="card" style={{ width: "17rem", display: "inline" }}>
                    <div className="card-img-top" style={{ backgroundImage: `url(${props.project.projectImg})` }}></div>
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