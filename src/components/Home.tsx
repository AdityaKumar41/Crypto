import React from "react";
import { GridBackgroundDemo } from "./GridBackgroundDemo";
import "./Home.css";
// import { TextGenerateEffectStyle } from "./TextEffect/TextGenerateEffect";
// import ButtonsMore from "./buttons/Buttons2";
import { TypewriterEffect } from "./TextEffect/TypewriterEffect";
import { BentoGridSecondDemo } from "./BentoGrid/BentoGrid";
// import { GlowingStarsBackgroundCardPreview } from "./Glowcard/GlowingStarsBackgroundCardPreview";
// import { SpotlightPreview } from "./Spotlight/SpotlightPreview";
import { TracingBeamDemo } from "./TracingBeam/TracingBeam";
// import { SparklesPreview } from "./TextEffect/SparklesPreview";
import { Lamp } from "./StyleEffect/LampEffect";
// import { GoogleGeminiEffectD } from "./StyleEffect/GoogleGeminiEffect";
const Home = () => {
  const handleGoto = () => {
    console.log("Go to the next page");
  };
  return (
    <>
      <div className="">
        <GridBackgroundDemo>
          <div className="HomeContainer">
          <div>
            <TypewriterEffect />
          </div>
          <div>
            {/* <GlowingStarsBackgroundCardPreview /> */}
          </div>
          </div>
        </GridBackgroundDemo>
      </div>
      <BentoGridSecondDemo />
      <TracingBeamDemo/>
      <Lamp/>
    </>
  );
};

export default Home;
