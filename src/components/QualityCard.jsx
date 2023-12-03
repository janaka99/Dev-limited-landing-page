import React from "react";

const QualityCard = ({ quality }) => {
  return (
    <div className="w-full flex flex-col gap-10">
      <h3 className="text-2xl text-accent-2 font-normal ">{quality.title}</h3>
      <p className="text-base font-normal text-text-secondary">
        {quality.text}
      </p>
    </div>
  );
};

export default QualityCard;
