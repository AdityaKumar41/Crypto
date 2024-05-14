"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
import DarkModeContext from "../../store/DarkModeContext";
export function HeroHighlightDemo() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 ${darkMode ? 'text-white': ''} dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
        <Highlight className={`text-black ${darkMode ? 'text-white': ''}  dark:text-white`}>
          Ger In Touch
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
