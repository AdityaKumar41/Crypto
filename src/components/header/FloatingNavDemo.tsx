// FloatingNavDemo.js
import React, { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import { FloatingNav } from "./floating-navbar";
import { IconHome, IconMessage, IconUser,IconBrandCohost,IconMoonStars   } from "@tabler/icons-react";

const FloatingNavDemo = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <IconHome
          className={`h-4 w-4 ${darkMode ? "text-white" : "text-neutral-500"}`}
        />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <IconUser
          className={`h-4 w-4 ${darkMode ? "text-white" : "text-neutral-500"}`}
        />
      ),
    },
    {
      name: "Community",
      link: "/community",
      icon: (
        <IconBrandCohost
          className={`h-4 w-4 ${darkMode ? "text-white" : "text-neutral-500"}`}
        />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage
          className={`h-4 w-4 ${
            darkMode ? "text-white" : "text-neutral-500"
          }`}
        />
      ),
    },
  ];

  return (
    <div className={`relative w-full ${darkMode ? "dark" : ""}`}>
      {/* <button
        className="fixed top-5 right-5 z-50 rounded-full p-2 bg-gray-200 dark:bg-gray-800"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        )}
      </button> */}
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default FloatingNavDemo;
