import React, { useContext } from "react";
import DarkModeContext from "../store/DarkModeContext";
import { SpotlightPreview } from "./Spotlight/SpotlightPreview";

export function GridBackgroundDemo({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
    <div className={`h-[50rem] w-full dark:bg-black ${darkMode ? 'bg-black': 'bg-white'}   dark:bg-grid-white/[0.2] ${darkMode ? 'bg-grid-white/[0.2]': 'bg-grid-black/[0.2]'} relative flex items-center justify-center`}>
       {/* Radial gradient for the container to give a faded look */}
       <div className={`absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black ${darkMode ? 'bg-black': 'bg-white'} [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}></div>
       {/* <SpotlightPreview/> */}
       <p className={`text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b ${darkMode ? "from-neutral-500 to-neutral-200 dark" : "from-neutral-200 to-neutral-500"} py-8}`}>
         {children}
       </p>
     </div>
    </>
  );
}