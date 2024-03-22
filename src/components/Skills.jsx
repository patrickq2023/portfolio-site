import React from 'react';
import bootstrapIcon from '../assets/icons/bootstrap-5-1.svg';
import css3Icon from '../assets/icons/css3.svg';
import djangoIcon from '../assets/icons/django.svg';
import githubIcon from '../assets/icons/github.svg';
import html5Icon from '../assets/icons/html5.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import npmIcon from '../assets/icons/npm.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';
import vuejsIcon from '../assets/icons/vuejs.svg';
import railwayIcon from '../assets/icons/railway.png'
import expressIcon from '../assets/icons/express.svg'
import postmanIcon from '../assets/icons/postman.svg'

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>
          Here are some of the skills I've acquired so far
        </p>
      </div>
      <div className="skills-container">
        <img src={html5Icon} alt="HTML5" />
        <img src={css3Icon} alt="CSS3" />
        <img src={javascriptIcon} alt="JavaScript" />  
        <img src={nodejsIcon} alt="Node.js" />  
        <img src={vuejsIcon} alt="Vue.js" />  
        <img src={expressIcon} alt="Express" />
        <img src={mongodbIcon} alt="MongoDB" />
        <img src={postmanIcon} alt ="Postman" />
        <img src={reactIcon} alt="React" />  
        <img src={pythonIcon} alt="Python" />             
        <img src={djangoIcon} alt="Django" />
        <img src={postgresqlIcon} alt="PostgreSQL" /> 
        <img src={bootstrapIcon} alt="Bootstrap" />      
        <img src={githubIcon} alt="GitHub" />                     
        <img src={npmIcon} alt="npm" />                   
        <img src={railwayIcon} alt="Railway" />
       
      </div>
    </div>
  );
};

export default Skills;

