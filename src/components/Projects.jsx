import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-wrapper">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </div>
  );
};

export default Projects;
