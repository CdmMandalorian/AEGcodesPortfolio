import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Scholar of Wisdom",
          "MERN Stack Developer",
          "Efficient Team Leader Advocate",
          "Experienced Professional Creator",
          "Explorer of Life",
          "Youth Football Coach"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
