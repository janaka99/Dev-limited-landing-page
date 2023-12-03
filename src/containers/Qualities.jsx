import React from "react";
import Title from "../components/Title";
import { qualities } from "../data";
import QualityCard from "../components/QualityCard";

const Qualities = () => {
  return (
    <div className="max-screen">
      <Title text="What sets us apart" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {qualities.map((quality, i) => (
          <QualityCard key={i} quality={quality} />
        ))}
      </div>
    </div>
  );
};

export default Qualities;
