"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Access the power of Blockchain
        </h2>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
