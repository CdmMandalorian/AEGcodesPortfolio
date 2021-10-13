import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "MERN Stack Developer",
          "Efficient Team Leader Advocate",
          "Software Developer",
          "Professional Content Creator",
          "Explorer of Life", 
          "Scholar of Wisdom",
          "Computer Engineer Programmer",
          "Youth Football Coach",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
