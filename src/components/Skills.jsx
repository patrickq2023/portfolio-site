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
        </div>
        <div className="skills-container">
        <div className="skill">
            <img src={html5Icon} alt="HTML5" />
            <span>HTML5</span>
          </div>
          <div className="skill">
            <img src={css3Icon} alt="CSS3" />
            <span>CSS3</span>
          </div>
          <div className="skill">
            <img src={javascriptIcon} alt="JavaScript" />
            <span>JavaScript</span>
          </div> 
          <div className="skill">
            <img src={nodejsIcon} alt="NodeJS" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <img src={vuejsIcon} alt="Vue.js" />
            <span>Vue.js</span>
          </div> 
          <div className="skill">
            <img src={expressIcon} alt="Express.js" />
            <span>Express.js</span>
          </div>
          <div className="skill">
            <img src={mongodbIcon} alt="MongoDB" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <img src={postmanIcon} alt="Postman" />
            <span>Postman</span>
          </div>
          <div className="skill">
            <img src={reactIcon} alt="React" />
            <span>React</span>
          </div> 
          <div className="skill">
            <img src={pythonIcon} alt="Python" />
            <span>Python</span>
          </div>           
          <div className="skill">
            <img src={djangoIcon} alt="Django" />
            <span>Django</span>
          </div>
          <div className="skill">
            <img src={djanorestIcon} alt="DjangoRestFramework" />
            <span>Django Rest</span>
          </div>
          <div className="skill">
            <img src={postgresqlIcon} alt="PostgreSQL" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill">
            <img src={bootstrapIcon} alt="Bootstrap" />
            <span>Bootstrap</span>
          </div>    
          <div className="skill">
            <img src={githubIcon} alt="GitHub" />
            <span>GitHub</span>
          </div>                       
          <div className="skill">
            <img src={npmIcon} alt="NPM" />
            <span>npm</span>
          </div>    
          <div className="skill">
            <img src={netlifyIcon} alt="Netlify" />
            <span>Netlify</span>
          </div>                
          <div className="skill">
            <img src={railwayIcon} alt="Railway" />
            <span>Railway</span>
          </div>          
      </div>
      </div>
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-container">
        <div className="experience-section">
          <div className="additional-paragraph-container">
            <h5>General Assembly SEB</h5>
            <p>
              I have recently completed the General Assembly Software Engineering Bootcamp. 
              The SEB is an intensive 12-week programme split into four separate modules, 
              comprising two weeks of content followed by a one-week project. The content 
              weeks consisted of morning “stand ups”, live lessons, video classes, exercise 
              labs, and code-alongs.
            </p>       
          </div>
        </div>
        <div className="experience-section">
          <div className="additional-paragraph-container">  
          <h5>Unit 1 Front End Fundamentals</h5>
            <p>
              In this unit we started with a brief recap of HTML and CSS, (the pre-course 
              ensured that we already had a solid foundation in HTML, CSS, and basic JavaScript) 
              then we dived headlong into JavaScript. Project One was a grid-based browser 
              game made predominantly with JavaScript and minimal HTML and CSS.
            </p>   
            <hr />       
            <h5>Unit 2 Full-Stack Development (MEVN)</h5>
            <p>
              This unit was all about understanding full-stack development and working for 
              the first time with Node.js, Vue, Express, MongoDB, 3rd Party APIs, and 
              understanding how a full-stack application works. Project Two was to build 
              a full-stack MEVN application, with full CRUD functionality deployed with 
              Netlify.
            </p>
            <hr />
            <h5>Unit 3 React Full Stack Development (MERN)</h5>
            <p>
              Unit Three consisted of learning to use React for the front end of our full 
              stack, again combined with MongoDB, Express, and Node.js on the back end. 
              Project Three was a collaboration project, we were split into teams of 
              three and again had to produce a MERN full stack single page application 
              with full CRUD functionality, deployed with Netlify.
            </p>
            <hr />
            <h5>Unit 4  Python and Django</h5>  
         <p>In the final module were introduced to Python, Django, SQL Databases and Amazon 
          S3. My final project was again to make a full stack application with a Python/Django 
          back end connected to a PostgreSQL Database and an Amazon S3 Bucket with a front 
          end running on React, this was deployed with Railway.</p>
          
          </div>
        </div>
        <div className="experience-section">
          <div className="additional-paragraph-container">
            
            <h5>Patrick Quayle Photography</h5>
          <p>Prior to embarking on my software engineering journey, I ran a successful photographic 
            business for over 20 years, where I worked for a broad range of clients many of which 
            developed into long standing relationships. Some of my clients included Argos, Dunelm, 
            eve Sleep, Fortnum and Mason, Habitat, Homebase, innocent Drinks, Sainsbury’s, 
            Wrong for Hay and many smaller brands and individuals.</p>
            {/* Repeat similar structure for the third section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;