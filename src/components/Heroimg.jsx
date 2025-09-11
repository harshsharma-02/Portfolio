import "./HeroimgStyle.css";
import React from 'react';
// import { Link } from 'react-router-dom';
import bg2 from "../Assets/img/bg2.jpg"
import { FaDownload } from "react-icons/fa";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img  className = "introImg" src={bg2} alt="introimg"/>
        </div>
        <div className="content">
          <p>Hi, I am a FreeLancer!!</p>
          <h1>React Developer</h1>
          <p className="subtitle">Crafting beautiful, responsive web experiences with modern React</p>
          <p className="description">Passionate about creating intuitive user interfaces and seamless user experiences. Specializing in React.js, JavaScript, and modern web technologies to build scalable applications that make a difference.</p>
          <div className="button-container">
            <a href="/ResHarsh.pdf" download className="resume-btn" target="_blank" >
              <span>Resume <FaDownload /></span> 
            </a>
          </div>
          <div>
            {/* <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link> */}
          </div>

      </div>
    </div>
  )
}

export default Heroimg
