import React from "react";
import BackgroundImage from "../assets/bg.jpg";
import Header from "../components/Header";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-[768px] relative flex flex-col">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={BackgroundImage}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full  h-full bg-bg-header"></div>
      <Header />
      <div className="flex-grow max-w-7xl w-10/12 mx-auto flex justify-start items-center relative">
        <div className="flex w-full flex-col gap-10">
          <h1 className="text-5xl md:text-7xl font-light text-text-primary">
            Hi, We are a
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
            Software Company
          </h1>
          <h2 className="text-2xl font-light text-text-primary">
            Transforming Ideas into Digital Reality
          </h2>
          <button className="w-fit  uppercase  text-text-primary text-base px-5 py-3 bg-accent outline-offset-0 hover:outline-offset-[5px] outline outline-2 outline-accent transition-all duration-200">
            See more
          </button>
          <div className="text-text-primary flex items-center gap-10">
            <FaFacebook
              size={35}
              className="hover:scale-110 transition-all duration-200 cursor-pointer"
            />
            <FaInstagram
              size={35}
              className="hover:scale-110 transition-all duration-200 cursor-pointer"
            />
            <FaLinkedin
              size={35}
              className="hover:scale-110 transition-all duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
