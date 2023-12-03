import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);

  const changeTheme = () => {
    setIsDefaultTheme(!isDefaultTheme);
  };
  return (
    <ThemeContext.Provider value={{ isDefaultTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
