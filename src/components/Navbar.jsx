import "./Navbarstyle.css";
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../Assets/img/logo.png'

const sectionIds = ["home", "about", "skills", "project", "contact"];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    const handleScroll = () => {
      let current = "home";
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="#home">
        {/* <h1>Portfolio</h1> */}
        <img id="logo" src={logo} alt="logo" />
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#home" onClick={handleClick} className={activeSection === "home" ? "active-section" : ""}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleClick} className={activeSection === "about" ? "active-section" : ""}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={handleClick} className={activeSection === "skills" ? "active-section" : ""}>Skills</a>
        </li>
        <li>
          <a href="#project" onClick={handleClick} className={activeSection === "project" ? "active-section" : ""}>Project</a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick} className={activeSection === "contact" ? "active-section" : ""}>Contact</a>
        </li>
      </ul>
      <div className="hamburg" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "white" }} /> :
          <FaBars size={20} style={{ color: "white" }} />
        }
      </div>
    </div>
  )
}

export default Navbar
