//libraries
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import {
  getInitialPosition,
  map,
  getDistance
} from "../../Components/Tile/motionUtil";
import areImagesLoaded from "../../Util/preloadImg";

//context
import selectedContext from "../../Context/Selected";

//style
import "./styles.css";

//components
import Tile from "../../Components/Tile";
import Panel from "../../Components/Panel";

gsap.registerPlugin(Flip);

const Landing = ({ isMobile, setIsMobile, content }) => {
  const ContainerRef = useRef(null);
  const animationSettings = {
    duration: 1,
    ease: "expo.inOut"
  };

  const [gridOpen, setGridOpen] = useState(true);
  const [activeTile, setActiveTile] = useState(null);
  const [panelContent, setPanelContent] = useState();
  const ctx = gsap.context(() => {});

  useEffect(() => {
    return () => ctx.revert();
  }, []);

  const showText = (letters) => {
    letters.forEach((letter, index) => {
      const { x, y } = getInitialPosition(letter);
      //console.log(`x: ${x}, y: ${y}`);
      const delay = map(getDistance(letter), 0, 1000, 0.4, 0);
      let initialConfig = {
        xPercent: x,
        yPercent: y,
        opacity: 0
      };
      //setAnimation(tile, initialConfig, 0);
      let animation = gsap.to(letter, {
        duration: animationSettings.duration,
        ease: "expo",
        xPercent: 0,
        yPercent: 0,
        delay: delay,
        opacity: 1,
        visibility: "visible"
      });
      //addAnimation(animation, 0.4);

      ctx.add(() => {
        gsap.set(letter, initialConfig, 0);
      });

      ctx.add(animation, index * 0.2);
    });
  };
  const hideText = (letters) => {
    letters.forEach((letter, index) => {
      const { x, y } = getInitialPosition(letter);
      //console.log(`x: ${x}, y: ${y}`);
      const delay = map(getDistance(letter), 0, 1000, 0.4, 0);
      let animation = gsap.to(letter, {
        duration: animationSettings.duration,
        ease: animationSettings.ease,
        xPercent: x,
        yPercent: y,
        opacity: 0,
        delay: delay
      });

      ctx.add(animation, 0.2);
      ctx.add(() => {
        gsap.to(letter, {
          visibility: "hidden",
          delay: 1
        });
      });
    });
  };

  useLayoutEffect(() => {
    let container = ContainerRef.current;
    let letters = container.querySelectorAll(".landing-text");

    gridOpen ? showText(letters) : hideText(letters);
  }, [gridOpen, ctx]);

  return (
    <selectedContext.Provider
      value={{
        gridOpen,
        setGridOpen,
        activeTile,
        setActiveTile,
        panelContent,
        setPanelContent,
        ctx
      }}
    >
      <div className="grid--wrapper" ref={ContainerRef}>
        <Tile content={content[0]} />
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-1" : "desktop-text-1"}
        >
          B
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-2" : "desktop-text-2"}
        >
          R
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-3" : "desktop-text-3"}
        >
          O
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-4" : "desktop-text-4"}
        >
          O
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-5" : "desktop-text-5"}
        >
          K
        </span>

        <Tile content={content[1]} />
        <Tile content={content[2]} />
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-6" : "desktop-text-6"}
        >
          D
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-7" : "desktop-text-7"}
        >
          A
        </span>

        <span
          className="landing-text"
          id={isMobile ? "mobile-text-8" : "desktop-text-8"}
        >
          B
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-9" : "desktop-text-9"}
        >
          A
        </span>

        <span
          className="landing-text"
          id={isMobile ? "mobile-text-10" : "desktop-text-10"}
        >
          P
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-11" : "desktop-text-11"}
        >
          O
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-12" : "desktop-text-12"}
        >
          R
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-13" : "desktop-text-13"}
        >
          T
        </span>
        <Tile content={content[3]} />
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-14" : "desktop-text-14"}
        >
          F
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-15" : "desktop-text-15"}
        >
          O
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-16" : "desktop-text-16"}
        >
          L
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-17" : "desktop-text-17"}
        >
          I
        </span>
        <span
          className="landing-text"
          id={isMobile ? "mobile-text-18" : "desktop-text-18"}
        >
          O
        </span>
      </div>
      <Panel />
    </selectedContext.Provider>
  );
};

export default Landing;
