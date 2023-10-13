import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectSectionRef = useRef(null);

  return (
    <div className="project-section" ref={projectSectionRef}>
      {/* Render your project sections */}
      <div className="main-panel">
        {projects.map((project, index) => (
          <div id={`project-${index}`} key={index} className="project">
            <h2>{projects[currentProjectIndex].title}</h2>
            <p>{project.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
