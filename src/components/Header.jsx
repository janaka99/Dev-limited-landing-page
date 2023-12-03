import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { links } from "../data";
import useIsMobile from "../hooks/useIsMobile";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiLight, CiDark } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ href, text }) => {
  return (
    <li>
      <a
        className="text-text-primary text-base capitalize tracking-widest"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  const isMobile = useIsMobile();

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div className="w-full h-20 flex justify-center relative ">
      <div className="max-w-7xl w-10/12 h-full flex items-center">
        <Logo />
        <ul
          className={`flex z-10 gap-10 items-center flex-grow justify-end ${
            isMobile &&
            "absolute top-0 right-0 h-screen w-80 flex-col justify-around items-center bg-bg-primary py-20 transition-all duration-300 ease-in-out"
          }
          ${isMobile && (isNavActive ? "translate-x-0" : "translate-x-96")}
          `}
        >
          {links.map((link, i) => (
            <NavLink key={i} href={link.href} text={link.text} />
          ))}
        </ul>
        <div className={`${isMobile && "flex-grow flex justify-end mr-10"}`}>
          <ThemeToggle />
        </div>

        {isMobile && (
          <button
            className="z-20 "
            onClick={() => {
              setIsNavActive(!isNavActive);
            }}
          >
            {isNavActive ? (
              <RxCross1 size={35} className="text-text-primary " />
            ) : (
              <RxHamburgerMenu size={35} className="text-text-primary " />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
