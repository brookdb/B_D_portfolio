//libraries
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";

//style
import "./styles.css";

gsap.registerPlugin(Flip, ScrollTrigger);

const Project = ({ project }) => {
  return <div className="project--wrapper"></div>;
};

export default Project;
