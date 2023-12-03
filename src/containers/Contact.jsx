import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="max-screen">
      <Title text="Reach us" />
      <p className="text-base text-text-secondary">
        Whether you're embarking on a new venture or looking to enhance your
        existing digital footprint, Dev Limited is here to guide you every step
        of the way. Let's collaborate, innovate, and build a future where your
        digital aspirations become a reality.
      </p>
      <button className="bg-accent w-fit mx-auto text-base  px-12 py-5 text-text-primary rounded-full font-bold hover:opacity-90 transition-all duration-200">
        Get in touch now
      </button>
    </div>
  );
};

export default Contact;
