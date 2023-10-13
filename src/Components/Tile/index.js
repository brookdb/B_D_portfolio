//libraries
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useLayoutEffect
} from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import { getInitialPosition, map, getDistance } from "./motionUtil";
import selectedContext from "../../Context/Selected";

//style
import "./styles.css";

gsap.registerPlugin(Flip);

const Tile = ({ isMobile, setIsMobile, content, index }) => {
  const TileRef = useRef(null);

  const {
    activeTile,
    setActiveTile,
    gridOpen,
    setGridOpen,
    setPanelContent,
    ctx
  } = useContext(selectedContext);

  const animationSettings = {
    duration: 1,
    ease: "expo.inOut"
  };
  const showTile = (tile) => {
    //console.log("Show tile");
    if (tile !== activeTile) {
      const backButton = tile.querySelector(".tile--header--back");
      const { x, y } = getInitialPosition(tile);
      const delay = map(getDistance(tile), 0, 1000, 0, 0.4);
      let initialConfig = {
        xPercent: x,
        yPercent: y,
        opacity: 0
      };
      backButton.setAttribute("disabled", true);
      //setAnimation(tile, initialConfig, 0);
      let animation = gsap.to(tile, {
        duration: animationSettings.duration,
        ease: "expo",
        xPercent: 0,
        yPercent: 0,
        delay: delay,
        opacity: 1
      });
      //addAnimation(animation, 0.4);
      let buttonConfig = {};

      ctx.add(() => {
        gsap.set(tile, initialConfig, index * 0.1);
      });
      ctx.add(animation, index * 0.2);
    }
  };
  const hideTile = (tile) => {
    if (tile !== activeTile) {
      //console.log("hiding: " + tile.id + ", activetile: " + activeTile.id);
      const { x, y } = getInitialPosition(tile);
      //console.log(`x: ${x}, y: ${y}`);
      const delay = map(getDistance(tile), 0, 1000, 0.4, 0);

      let animation = gsap.to(tile, {
        duration: animationSettings.duration,
        ease: animationSettings.ease,
        xPercent: x,
        yPercent: y,
        opacity: 0,
        delay: delay
      });
      //clear the time line and rerun it
      //addAnimation(animation, 0.9);
      //console.log(`x2: ${x}, y2: ${y}`);
      ctx.add(animation);
    }
    //clearAnimation();
  };

  const openTile = (tile) => {
    //clearAnimation();
    setActiveTile(tile);
    let panel_data = { id: content.id, items: content.items };
    setPanelContent(panel_data);
    //activeTile && console.log("openTile --> active tile: " + activeTile.id);
    if (gridOpen) {
      let header = tile.querySelector(".tile--header");
      let headerImg = header.querySelector(".tile--header-img");
      let headerTitle = header.querySelector(".tile--header--txt");
      let backButton = tile.querySelector(".tile--header--back");
      //let panel = document.querySelector(".tile--details");

      const imgState = Flip.getState([headerImg, backButton]);
      const tileState = Flip.getState(tile, {
        props: "backgroundColor"
      });
      const headerState1 = Flip.getState(headerTitle, {
        props: "color,fontSize"
      });

      const animation = () => {
        tile.classList.add("open");
        backButton.setAttribute("disabled", true);

        Flip.from(
          tileState,
          {
            duration: animationSettings.duration,
            ease: animationSettings.ease,
            nested: true
          },
          0
        );
        Flip.from(headerState1, animationSettings, 0);
        Flip.from(imgState, animationSettings, 0);
      };

      //addAnimation(animation, "start+=0.4");
      ctx.add(animation, 0);
      setGridOpen(false);
      //ctx.add(txtAnimation, 0.3);
    }
  };

  const closeTile = () => {
    //console.log(activeTile.id);
    if (activeTile && !gridOpen) {
      //console.log("close tile fired on" + activeTile.id);
      let header = activeTile.querySelector(".tile--header");
      let headerImg = header.querySelector(".tile--header-img");
      let headerTitle = header.querySelector(".tile--header--txt");
      let close = activeTile.querySelector(".tile--header--back");
      const imgState = Flip.getState([headerImg, close]);
      const tileState = Flip.getState(activeTile, {
        props: "backgroundColor"
      });
      const headerTitleState = Flip.getState(headerTitle, {
        props: "color, fontSize"
      });

      const animation = () => {
        activeTile.classList.remove("open");

        Flip.from(
          tileState,
          {
            duration: 0.5 * animationSettings.duration,
            ease: animationSettings.ease,
            nested: true
          },
          0
        );
        Flip.from(
          headerTitleState,
          {
            duration: 0.5 * animationSettings.duration,
            ease: animationSettings.ease
          },
          0
        );
        Flip.from(
          imgState,
          {
            duration: 0.5 * animationSettings.duration,
            ease: animationSettings.ease
          },
          0
        );
      };

      ctx.add(animation);

      setGridOpen(true);

      //setActiveTile(null);
      //console.log(`ActiveTile: ${activeTile.id}, gridOpen: ${gridOpen}`);
    }
  };

  //animation
  useLayoutEffect(() => {
    const tile = TileRef.current;
    gridOpen ? showTile(tile) : hideTile(tile);
  }, [gridOpen, ctx]);

  return (
    <div
      id={content.id}
      className="tile--wrapper"
      ref={TileRef}
      onClick={(e) => openTile(e.currentTarget)}
    >
      {/** tile header element*/}
      <div className={`tile--header`}>
        <div
          className={`tile--header-img ${content.classNames}`}
          style={{
            backgroundImage: `url(${content.imgURL})`
          }}
        ></div>
        <h3 className="tile--header--txt">{content.title}</h3>
        <div className="tile--header--back">
          <button
            className="button-back unbutton"
            onClick={(e) => {
              e.stopPropagation();
              closeTile(e.currentTarget);
            }}
          >
            <svg width="100px" height="18px" viewBox="0 0 50 9">
              <path
                vectorEffect="non-scaling-stroke"
                d="m0 4.5 5-3m-5 3 5 3m45-3h-77"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tile;
