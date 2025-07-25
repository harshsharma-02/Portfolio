import React from 'react';
import '../components/SkillsContent.css';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGit,
  FaGithub
} from 'react-icons/fa';
import {  SiC, SiCplusplus } from 'react-icons/si';

const SkillsContent = () => {
  const skills = [
      { name: 'C', icon: <SiC />, color: '#3178C6' },
      { name: 'C++', icon: <SiCplusplus />, color: '#339933' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'GIT', icon: < FaGit/>, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },

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