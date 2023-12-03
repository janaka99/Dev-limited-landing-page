import React, { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDefaultTheme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={changeTheme}
      className={`ml-10 w-16 h-8 bg-background px-[2px] rounded-2xl flex items-center  relative  transition-all duration-500 ${
        isDefaultTheme ? "bg-gray-200" : "bg-gray-200"
      } `}
    >
      {" "}
      <div className="absolute w-10/12  left-0 right-0 mx-auto h-hull flex justify-between items-center">
        <CiDark size={25} />
        <CiLight size={25} />
      </div>
      <div
        className={` h-7 w-7 relative  rounded-full transition-all duration-300 ${
          isDefaultTheme ? "ml-[50%] bg-white" : "ml-[0%] bg-black"
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
