import React from 'react';
// import myImage from '../assets/images/pq.jpg';
import pq1Image from '../assets/images/pq1.jpg';
import pq2Image from '../assets/images/pq2.jpg';
import pq5Image from '../assets/images/pq5.jpg';

const About = () => {
  return (
    <div className="about-heading-container">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="paragraph-container">
          <div className="image-container">
            <img src={pq5Image} alt="Myself" />
          </div>
          <div>
          <p>
            Hello! My name is Patrick, my friends call me pq, I'm a London based Junior Software Engineer.  </p>    
            <p>               
            Transitioning from a lifelong career as a professional photographer and business owner, I sought a change of direction. 
            Prompted by a friend to explore the Software Engineering Course at General Assembly, I enrolled to embark on a new journey. 
            I was immediately intrigued by software engineering, and the opportunity that gave me to acquire new skills and implement 
            them in conjunction with my existing ones in an ever evolving sector. My aspiration is to contribute as part of a collaborative 
            team dedicated to working on exciting projects, creating web applications and software that are both innovative and offer a 
            positive user experience. With a background in the creative industry, I bring a keen eye for detail that positions me well for success as a software engineer. 
            Whether taking direction or leading a team, I am dedicated to delivering solid results that satisfy clients. My ability 
            to adapt and contribute is complemented by a friendly and easy going manner. Motivated and hungry to build my skill set, I am 
            enthusiastic about roles that foster both personal growth and meaningful contribution.
          </p>
          <hr />
          <p>
            Please take a look at my projects and if you like what you see please feel free to get in touch.
          </p>                   
        </div>
        </div>
      </div>
      <div className="about-container">
        <div className="paragraph-container">
          <div className="image-container">
            <img src={pq1Image} alt="Cycling" />
          </div>
          <p>
            Originally from South Africa, I came to London after graduation for a working holiday. The plan was to stay for a year, do some work, 
            see a bit Europe over the summer, come back to London, earn a bit more cash and be back home for Christmas. I never went back and have 
            been in London ever since. I found work as a photographic assistant and within a few years had set up my own photographic business.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="paragraph-container">
          <div className="image-container">
            <img src={pq2Image} alt="Instagram" />
          </div>
          <p>  Outside of work I have plenty of other interests including travelling, enjoying great food, Formula1 and snowboarding. 
            I love to keep fit and am a very keen triathlete, but my one true love is cycling. I serve as Road Captain on the 
            committee of my local cycling club, coordinating and planning club rides, and ride out with them at least twice a week. 
            My favourite pastime has got to be travelling abroad with my bike, exploring new places and challenges, sampling local delicacies 
            and pastries along the way, not to mention stopping to take some beautiful photographs (a bicycle can take you to some amazing 
            places). I have competed in 4 Ironmans in Europe and loads of smaller races here at home and scaled some of the iconic climbs 
            of the Tour de France and the Giro d’Italia.
            <hr />
            Feel free to have a look at my personal Instagram to view a few of my adventures.
          </p>
        </div>
      </div>
      <div className="about-container">         
      </div>
    </div>
  );
};

export default About;
