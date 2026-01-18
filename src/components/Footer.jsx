import React from "react";
import "./Footerstyle.css";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const handleBackToHome = (e) => {
    e.preventDefault();
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="left">
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              harshdeos7@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I'm a B.Tech pursuing student who loves to make web pages and have a
            strong intrest in computer science.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/harsh-sharma-010355256/"
              target="_blank "
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/harshsharma-02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="#" target="_blank">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
          <button
            className="footer-home-btn"
            onClick={handleBackToHome}
            title="Back to Top"
          >
            <span>
              <FiChevronUp size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
