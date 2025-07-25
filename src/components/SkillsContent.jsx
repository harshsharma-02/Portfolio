import React from 'react';
import './SkillsContent.css';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaGit, 

} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiC, SiCplusplus } from 'react-icons/si';

const SkillsContent = () => {
  
  <h1>Skills</h1>
  const skills = [
      { name: 'C', icon: <SiC />, color: '#3178C6' },
      { name: 'C++', icon: <SiCplusplus />, color: '#339933' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Git', icon: <FaGit />, color: '#61DAFB' },
    
  ];

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent; 