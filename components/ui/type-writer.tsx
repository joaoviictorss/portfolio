"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={["Desenvolvedor Web", 1000, "Front-end Developer", 1000]}
      wrapper="span"
      speed={50}
      style={{
        display: "inline-block",
        fontWeight: "bold",
        color: "#3b82f6",
      }}
      repeat={Infinity}
      className="typewriter"
    />
  );
};

export default TypeWriter;
