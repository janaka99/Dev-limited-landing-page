import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-12 bg-accent-2 pt-28">
      <div className="max-w-7xl mx-auto w-10/12 flex flex-col md:flex-row gap-12">
        <div className="flex-grow flex flex-col gap-4  items-center md:items-start">
          <Logo />
          <h3 className="text-2xl text-text-primary font-bold ">Dev Limited</h3>
        </div>
        <div className="flex gap-12 flex-col sm:flex-row items-center sm:items-start sm:justify-between text-center sm:text-left">
          <div className="w-fit flex flex-col gap-6">
            <h3 className="text-base capitalize font-bold text-text-primary">
              Address
            </h3>
            <div className="flex flex-col gap-3 text-text-primary">
              <p className="text-base font-light">No 500, Fake Street</p>
              <p className="text-base font-light">Downtown</p>
              <p className="text-base font-light">Fake Country</p>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-6">
            <h3 className="text-base capitalize font-bold text-text-primary">
              Legal
            </h3>
            <div className="flex flex-col gap-3 text-text-primary">
              <p className="text-base font-light">Privacy & Policy</p>
              <p className="text-base font-light">Terms & Conditions</p>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-6">
            <h3 className="text-base capitalize font-bold text-text-primary">
              Company
            </h3>
            <div className="flex flex-col gap-3 text-text-primary">
              <a className=" text-base text-text-primary font-light" href="/">
                Home
              </a>
              <a className=" text-base text-text-primary font-light" href="/">
                Blog
              </a>
              <a className=" text-base text-text-primary font-light" href="/">
                Careers
              </a>
              <a className=" text-base text-text-primary font-light" href="/">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-screen text-center font-light text-text-primary mb-4">
        Copyright © 2023 Dev Limited. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
