import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A computer science engineering student",
          "Have a solid experience in full-stack Web & Mobile application development",
          "Passionate about cybersecurity and Data science",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
