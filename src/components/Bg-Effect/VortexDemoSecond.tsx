import React from "react";
import { Vortex } from "./vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Access the power of Blockchain
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        From lecture halls to blockchains. Get ahead in finance and tech with Campus to Crypto.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Join now
          </button>
          <button className="px-4 py-2  text-white ">Get in tuch</button>
        </div>
      </Vortex>
    </div>
  );
}
