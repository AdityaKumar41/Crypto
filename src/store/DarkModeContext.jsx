import React, { createContext, useState, useEffect } from "react";

const DARK_MODE_KEY = "darkMode"; // Constant for localStorage key

const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem(DARK_MODE_KEY);
    return storedValue === null ? true : JSON.parse(storedValue);
  });

  useEffect(() => {
    // Update localStorage
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const bodyStyle = {
    backgroundColor: darkMode ? "black" : "white", // Set background colors
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div style={bodyStyle}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
