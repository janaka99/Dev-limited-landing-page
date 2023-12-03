import React, { useContext, useRef } from "react";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Qualities from "./containers/Qualities";
import { ThemeContext } from "./context/ThemeContext";
import Services from "./containers/Services";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { isDefaultTheme } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        isDefaultTheme ? "" : "dark "
      }  bg-background  w-full  overflow-hidden  flex flex-col gap-20`}
    >
      <Hero />
      <About />
      <Qualities />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
