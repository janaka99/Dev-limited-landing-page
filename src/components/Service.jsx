import React from "react";

const Service = ({ service }) => {
  return (
    <div className="bg-bg-primary p-5 flex flex-col items-center gap-6 hover:bg-accent-2 transition-all duration-200 ">
      <img className="w-14 h-14 object-cover " src={service.src} alt="" />
      <h3 className="text-text-primary text-center text-base font-bold tracking-wider">
        {service.title}
      </h3>
      <p className="text-text-primary text-base tracking-wide text-center font-light">
        {service.description}
      </p>
    </div>
  );
};

export default Service;
