"use client";
import React from "react";
import { MaskContainer } from "./svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-screen w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className=" mx-auto text-slate-800 text-center  text-4xl font-bold">
            Our community is a gathering place for blockchain enthusiasts, developers, investors, and innovators who share a common goal: to explore, learn, and collaborate in this exciting field.
          </p>
        }
        // className="h-[40rem] border rounded-md"
      >
        Our <span className="text-red-500">community</span> is a gathering place for  <span className="text-red-500">blockchain</span> enthusiasts, developers, investors, and innovators who share a common goal: <span className="text-red-500">to explore, learn, and collaborate </span>in this exciting field.
      </MaskContainer>
    </div>
  );
}
