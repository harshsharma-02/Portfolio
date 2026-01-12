import "./HeroimgStyle.css";
import React from 'react';
// import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        {/* <img  className = "introImg" src={bg1} alt="introimg"/> */}
        </div>
        <div className="content">
          <p>Hii, I am a FreeLancer!!</p>
          <h1>React Developer</h1>
          <p className="subtitle">Crafting beautiful, responsive web experiences with modern React</p>
          <p className="description">Passionate about creating intuitive user interfaces and seamless user experiences. Specializing in React.js, JavaScript, and modern web technologies to build scalable applications that make a difference.</p>
          <div className="button-container">
            <a href="/Resume_HS.pdf" download className="resume-btn" target="_blank" >
              <span>Resume <FaDownload /></span> 
            </a>
          </div>
      </div>
    </div>
  )
}

export default Heroimg
