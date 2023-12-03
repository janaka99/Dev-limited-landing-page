import React from "react";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="max-screen">
      <Title text="Who are we" />

      <p className="text-base font-normal text-text-secondary">
        At the heart of Dev Limited is a team of highly skilled and dedicated
        professionals who are experts in their respective fields. From software
        development to system integration, mobile applications to web solutions,
        our diverse range of services caters to the unique needs of our clients.
        Whether you're a startup looking to establish your digital presence or
        an enterprise seeking to optimize your operations, we have the expertise
        to turn your vision into reality. Our commitment to expertise extends
        beyond just technical proficiency. At Dev Limited, we understand that
        staying ahead in the dynamic landscape of technology requires continuous
        learning and adaptation.
      </p>
    </div>
  );
};

export default About;
