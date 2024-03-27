import React from 'react';
import project4Image from "../assets/images/project4.jpg";

const Project4 = () => {
  const projectUrl = "https://project-4-frontend-production.up.railway.app"; // Replace with actual project URL
  const frontendRepoUrl = "https://github.com/patrickq2023/Project-4-Frontend"; // Replace with actual frontend repo URL
  const backendRepoUrl = "https://github.com/patrickq2023/Project-4-Backend"; // Replace with actual backend repo URL

  const handleProjectClick = () => {
    window.open(projectUrl, "_blank");
  };

  const handleFrontendRepoClick = () => {
    window.open(frontendRepoUrl, "_blank");
  };

  const handleBackendRepoClick = () => {
    window.open(backendRepoUrl, "_blank");
  };

  return (
    <div className="project4-container">
      <div className="project4-content">
        <h3>exposure</h3>
        <p>My final project was another weeklong solo endeavour to make a full stack application with 
            a Python/Django back end connected to a PostgreSQL Database and an Amazon S3 Bucket. 
            The frontend was run on React, this was deployed with Railway. On this occasion I chose 
            another passion and created an app where people could upload images. Frustrated with 
            Instagram as it has become less about quality photographs and more about likes and follows. 
            Exposure is all about showcasing still photographs, so no videos, reels or stories here!</p>
        <button onClick={handleProjectClick}>Project</button>
        <button onClick={handleFrontendRepoClick}>FE Repo</button>
        <button onClick={handleBackendRepoClick}>BE Repo</button>
      </div>
      <div className="project4-image" onClick={handleProjectClick}>
        <img src={project4Image} alt="Project 4" />
      </div>
    </div>
  );
};

export default Project4;
