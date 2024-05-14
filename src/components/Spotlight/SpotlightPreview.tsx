import React from "react";
import { cn } from "../../utils/cn";
import { Spotlight } from "./Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] absolute overflow-hidden">
      <Spotlight
        className="-top-50 left-0 md:left-90 md:-top-40"
        fill="white"
      />
    </div>
  );
}
