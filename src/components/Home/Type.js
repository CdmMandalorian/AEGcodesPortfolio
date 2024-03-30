import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "MERN Stack Developer",
          "Full Stack Web Developer",
          "Efficient Team Leader Advocate",
          "Explorer of Life", 
          "Scholar of Wisdom",
          "Proficient Front End Developer",
          "Adept Back End Developer",
          "Youth Football Coach",
          "Computer Engineer Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
