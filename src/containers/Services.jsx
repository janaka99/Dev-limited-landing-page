import React from "react";
import Title from "../components/Title";

import { services } from "../data";
import Service from "../components/Service";

const Services = () => {
  return (
    <div className="max-screen">
      <Title text="What we do" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
