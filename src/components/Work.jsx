import React from "react";
import "./WorkCardstyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-cont">
      {/* <h1 className="pr-heading"></h1> */}
      <div className="pr-cont">
        {WorkCardData.map((val,ind) => {
            return(
                <WorkCard 
                key = {ind} 
                imgsrc = {val.imgsrc}
                title = {val.title}
                text = {val.text}
                project = {val.project}
                source = {val.source}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
