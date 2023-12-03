import React from "react";

const Title = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-5xl font-medium relative text-text-secondary after:absolute after:h-1 after:w-28 after:bg-accent-2 after:top-full after:left-0">
      {text}
    </h1>
  );
};

export default Title;
