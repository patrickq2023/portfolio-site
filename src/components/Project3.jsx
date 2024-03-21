import React from 'react';
import project3Image from "../assets/images/project3.jpg";

const Project3 = () => {
  const projectUrl = "https://journee.site/"; // Replace with actual project URL
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
    <div className="project3-container">
      <div className="project3-content">
        <h3>Journée</h3>
        <p>As with our previous project, our primary goal remained centred around achieving a comprehensive 
            CRUD (Create, Read, Update, Delete) functionality. Following deliberation, we collectively 
            decided on developing a personal organiser application, drawing loose inspiration from our team's 
            conventional paper diary/journal. We agreed on a name and set about creating Journée. Our vision 
            encompassed incorporating To-dos and a Schedule feature, along with Daily Check-ins to track 
            essential aspects such as Hydration, Mood, Sleep, and a daily Quote.</p>
        <button onClick={handleProjectClick}>Visit Project</button>
        <button onClick={handleFrontendRepoClick}>Frontend Repo</button>
        <button onClick={handleBackendRepoClick}>Backend Repo</button>
      </div>
      <div className="project3-image" onClick={handleProjectClick}>
        <img src={project3Image} alt="Project 3" />
      </div>
    </div>
  );
};

export default Project3;
