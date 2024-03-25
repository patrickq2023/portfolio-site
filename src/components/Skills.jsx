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
import djanorestIcon from '../assets/icons/djangorest.svg'
import netlifyIcon from '../assets/icons/netlify.svg'


const Skills = () => {
  return (
    <div>
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-page">
        <div className="skills-header">
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
        <img src={djanorestIcon} alt="Djangorest" />
        <img src={postgresqlIcon} alt="PostgreSQL" /> 
        <img src={bootstrapIcon} alt="Bootstrap" />      
        <img src={githubIcon} alt="GitHub" />                     
        <img src={npmIcon} alt="npm" />   
        <img src={netlifyIcon} alt="Netlify" />               
        <img src={railwayIcon} alt="Railway" />        
      </div>
      </div>
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-container">
      <div className="additional-paragraph-container">
        <p>I have recently completed the General Assembley Software Engineering 
          Bootcamp. The SEB is an intensive 12-week programme split into four separate 
          modules, comprising two weeks of content followed by a one-week project. 
          The content weeks consisted of morning “stand ups”, live lessons, video 
          classes, exercise labs and code-alongs.
          </p>
          
          <h5>Unit 1 Front End Fundamentals</h5>  
          <p>      
          In this unit we started with a brief recap of HTML and CSS, 
          (the pre course ensured that we already had a solid foundation in HTML, 
          CSS and basic JavaScript) then we dived headlong into JavaScript.
          Project One was a grid based browser game made predominantly with 
          JavaScript and minimal HTML and CSS.
          </p>

          <h5>Unit 2  Full-Stack Development (MEVN)</h5>
          <p>
          This unit was all about understanding full stack development and working 
          for the first time with Node.js, Vue, Express, MongoDB, 3rd Party APIs 
          and understanding how a full stack application works.
          Project Two was to build a full stack MEVN application, with full 
          CRUD functionality deployed with Netlify
          </p>
         <h5> Unit 3  React Full Stack Development (MERN)</h5>
         <p>
          Unit Three consisted of learning to use React for the front end of our 
          full stack, again combined with MongoDB, Express and Node.js on the back end.
          Project Three was a collaboration project, we were split into teams of three 
          and again had to produce a MERN full stack single page application with full 
          CRUD functionality, deployed with Netlify.
          </p>      

         <h5>Unit 4  Python and Django</h5>  
         <p>In the final module were introduced to Python, Django, SQL Databases and Amazon 
          S3. My final project was again to make a full stack application with a Python/Django 
          back end connected to a PostgreSQL Database and an Amazon S3 Bucket with a front 
          end running on React, this was deployed with Railway.</p>
          <h5>Patrick Quayle Photography</h5>
          <p>Prior to embarking on my software engineering journey, I ran a successful photographic 
            business for over 20years, where I worked for a broad range of clients many of which have 
            developed into long standing relationships. Some of my clients included Argos, Dunelm, 
            eve Sleep, Fortnum and Mason, Habitat, Homebase, innocent Drinks, Sainsbury’s, 
            Wrong for Hay and many smaller brands and individuals.</p>
      </div>
    </div>
    </div>
  );
};

export default Skills;

