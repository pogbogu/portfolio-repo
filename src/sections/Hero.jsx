import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "..";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const size = calculateSizes(isSmall, isTablet, isMobile);

  return (
    <section className="min-h-screen w-full flex flex-col relative ">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text2xl font-medium text-white text-center font-generalsans">
          Hello I&apos;m Paul <span className="waving-hand">👋 </span>
        </p>
        <p className="hero_tag text-gray_gradient">A Web Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // scale={0.05}
                position={size.deskPosition}
                rotation={[0, Math.PI, 0]}
                scale={size.deskScale}
              />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <group></group>
            <Target position={size.targetPosition} />
            <ReactLogo position={size.reactLogoPosition} />
            <Cube position={size.cubePosition} />
            <Ring position={size.ringPosition} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 c-space w-full right-0 left-0">
        <a href="#about" className="w-full">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
