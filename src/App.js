// import React, { useState } from "react";
import "./index.css"
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/SkillsContent";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
