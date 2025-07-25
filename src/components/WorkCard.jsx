import React from "react";
import "./WorkCardstyle.css";

const WorkCard = (props) => {
  return (
    <div className="pr-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="pr-title">{props.title}</h2>
      <div className="pr-details">
        <p>{props.text}</p>
        <div className="pr-btns">
          <a href={props.project} className="btn" target="_blank" rel="noopener noreferrer">
            Project
          </a>
          <a href={props.source} className="btn" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
