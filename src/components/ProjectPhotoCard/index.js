import React from "react";
import "./style.css";

function ProjectPhotoCard(props) {
  return (
    <div className="" style={{ backgroundImage: `url(${props.backgroundImage})` }}>

      {props.children}
    </div>
  );
}

export default ProjectPhotoCard;
