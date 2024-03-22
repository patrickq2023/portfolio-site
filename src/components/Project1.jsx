import React from 'react';
import project1Image from "../assets/images/project1.jpg";


const Project1 = () => {
  const projectUrl = "https://patrickq2023.github.io/Snake-Game/"; // Replace with actual project URL

  const handleProjectClick = () => {
    window.open(projectUrl, "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/patrickq2023/patrickq2023", "_blank"); // Replace with actual GitHub URL
  };

  return (
    <div className="project1-container">
      <div className="project1-content">
        <h3>Snake</h3>
        <p>My first ever coding project was our first assignment on the General Assembly Software Engineering 
            Immersive Course. We were tasked to create a grid-based browser game. I chose “SNAKE” the 
            game made popular by Nokia phones from the late nineties. Most of the game was created in JavaScript 
            with some CSS and minimal HTML. This was a brilliant way to implement our newly acquired skills 
            in and a great way to learn DOM manipulation through JavaScript, and to use a little bit of CSS 
            to add some style. The aim of the game is to direct the snake around the board eating fruit. The 
            more the snake eats the longer he gets, crash into a wall or himself and its, “Game Over”.</p>
        <button onClick={handleProjectClick}>Visit Project</button>
        <button onClick={handleGithubClick}>GitHub Repo</button>
      </div>
      <div className="project1-image" onClick={handleProjectClick}>
        <img src={project1Image} alt="Project 1" />
      </div>
    </div>
  );
};

export default Project1;
