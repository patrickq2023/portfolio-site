import React from 'react';
import project2Image from "../assets/images/project2.jpg";

const Project2 = () => {
  const projectUrl = "https://pqsclassicclimbs.netlify.app"; // Replace with actual project URL
  const frontendRepoUrl = "https://github.com/patrickq2023/Project-2-Frontend"; // Replace with actual frontend repo URL
  const backendRepoUrl = "https://github.com/patrickq2023/Project-2-Backend"; // Replace with actual backend repo URL

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
    <div className="project2-container">
      <div className="project2-content">
        <h3>Classic Climbs</h3>
        <p>My second project was to create a Full Stack Web Application with full (CRUD) 
            Create, Read, Update and Delete functionality using MongoDB, Express, 
            Vue and Node. This was my first full stack app and a massive learning 
            curve. I chose a subject close to my heart and built an app to display 
            my favourite cycling climbs in Europe. Each climb has a photograph, 
            location, elevation, category and description. Users can login in 
            and view, add, comment and delete climbs.</p>
        <button onClick={handleProjectClick}>Project</button>
        <button onClick={handleFrontendRepoClick}>FE Repo</button>
        <button onClick={handleBackendRepoClick}>BE Repo</button>
      </div>
      <div className="project2-image" onClick={handleProjectClick}>
        <img src={project2Image} alt="Project 2" />
      </div>
    </div>
  );
};

export default Project2;
