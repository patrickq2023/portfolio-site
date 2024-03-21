import React from 'react'
import bootstrapIcon from '../assets/icons/bootstrap-5-1.svg'
import css3Icon from '../assets/icons/css3.svg'
import djangoIcon from '../assets/icons/django.svg'
import githubIcon from '../assets/icons/github.svg'
import html5Icon from '../assets/icons/html5.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import nodejsIcon from '../assets/icons/nodejs.svg'
import npmIcon from '../assets/icons/npm.svg'
import postgresqlIcon from '../assets/icons/postgresql.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import vuejsIcon from '../assets/icons/vuejs.svg'

const Skills = () => {
  return (
    <div className="skills-container">
      <img src={bootstrapIcon} alt="Bootstrap" />
      <img src={css3Icon} alt="CSS3" />
      <img src={djangoIcon} alt="Django" />
      <img src={githubIcon} alt="GitHub" />
      <img src={html5Icon} alt="HTML5" />
      <img src={javascriptIcon} alt="JavaScript" />      
      <img src={mongodbIcon} alt="MongoDB" />
      <img src={nodejsIcon} alt="Node.js" />
      <img src={npmIcon} alt="npm" />
      <img src={postgresqlIcon} alt="PostgreSQL" />
      <img src={pythonIcon} alt="Python" />
      <img src={reactIcon} alt="React" />
      <img src={vuejsIcon} alt="Vue.js" />
    </div>
  );
};

export default Skills;
