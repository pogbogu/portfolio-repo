import React, { Suspense, useState } from "react";
import { myProjects } from "..";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import DemoComputer from "../Components/DemoComputer";
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const projectCount = myProjects.length;
  const navigateProjects = (direction) => {
    setProjectIndex((prev) => {
      if (direction == "previous") {
        return prev === 0 ? projectCount - 1 : prev - 1;
      } else {
        return prev === projectCount - 1 ? 0 : prev + 1;
      }
    });
  };
  const currentProject = myProjects[projectIndex];
  return (
    <section className="c-space my-20">
      <p className="head-text"> My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col relative sm:p-10 py-10 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="sppotlight"
              className="w-full h-9 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img src={currentProject.logo} className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className=" text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText"> {currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => {
                return (
                  <div className="tech-logo" key={index}>
                    <img src={tag.path} alt={tag.name} />
                  </div>
                );
              })}
            </div>
            <a
              className="flex items-center gap-2 text-white cursor-pointer"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="assets/arrow-up.png" className="h-3 w-3"></img>
            </a>
          </div>
          <div className="flex items-center mt-7 justify-between">
            <button
              className="arrow-btn"
              onClick={() => navigateProjects("previous")}
            >
              <img
                className="w-4 h-4"
                src="/assets/arrow-right.png"
                alt="right arrow"
              />
            </button>{" "}
            <button
              className="arrow-btn"
              onClick={() => navigateProjects("next")}
            >
              <img
                className="w-4 h-4"
                src="/assets/arrow-left.png"
                alt="left arrow"
              />
            </button>
          </div>
        </div>
        <div className=" border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 15]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}></Suspense>
              <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer texture={currentProject.texture} />
              </group>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
