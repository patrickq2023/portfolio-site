import React, { useEffect, useState } from 'react';
import '../App.css'; // Importing the app.css file for styling

const Home = () => {
  const [nameLetters, setNameLetters] = useState([]);

  useEffect(() => {
    const name = 'patrick quayle';
    const letters = name.split('');
    setNameLetters(letters);
  }, []);

  return (
    <div className="home-container"> {/* Apply container class if needed */}
      <h2 className="home-heading"> {/* Use home-heading class */}
        {nameLetters.map((letter, index) => (
          <span
            key={index}
            className="animated-letter" // Add animated-letter class
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h2>
      <p className="home-paragraph">
        Junior Software Engineer
      </p>
      <p className="home-paragraph">
        Welcome to my site, feel free to have a look around.
      </p>
    </div>
  );
};

export default Home;
