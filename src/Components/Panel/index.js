import React, { useRef, useState, useContext, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import selectedContext from "../../Context/Selected";

//style
import "./styles.css";

//component
import Contact from "./Contact";

gsap.registerPlugin(Flip);

const Panel = () => {
  const [sideBarText, setSideBarText] = useState();
  const { panelContent, gridOpen, ctx, activeTile } = useContext(
    selectedContext
  );
  console.log(panelContent);
  const PanelRef = useRef(null);
  //const tile = document.querySelector(".grid--wrapper");

  const animationSettings = {
    duration: 1,
    ease: "expo.inOut"
  };

  const openPanel = (panel) => {
    //console.log(panelContent.items);
    const panelState = Flip.getState(panel);

    const animation2 = () => {
      panel.classList.add("open--panel");
      // set the final state

      Flip.from(panelState, {
        duration: 1.75,
        delay: 0.8,
        ease: animationSettings.ease,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0 }
          )
        //top: "248px",
        //scale: true,
        //onComplete: () => gsap.set(panel, { overflow: "auto" }) // to permit scrolling if necessary
      });
    };
    ctx.add(animation2);
  };

  const closePanel = (panel) => {
    //console.log("close panel fired");
    const panelState = Flip.getState(panel);

    const animation = () => {
      //const panelState = Flip.getState(panel);
      panel.classList.remove("open--panel");
      Flip.from(panelState, {
        duration: 0.75,
        ease: animationSettings.ease,
        absolute: true,
        onLeave: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 1, yPercent: 0 },
            { opacity: 0, yPercent: 100 }
          )
        //top: "248px",
        //scale: true,
        //onComplete: () => gsap.set(panel, { overflow: "auto" }) // to permit scrolling if necessary
      });

      //gsap.set(panel, { display: "none", visibility: "hidden" });
    };
    ctx.add(animation);
  };

  useLayoutEffect(() => {
    const panel = PanelRef.current;
    !gridOpen ? openPanel(panel) : closePanel(panel);
  }, [gridOpen, ctx]);

  return (
    <div
      id={panelContent && panelContent.id}
      className="tile--details"
      ref={PanelRef}
    >
      <div className="details--wrapper">
        {panelContent &&
          panelContent.items.map((item, index) => (
            <div key={index} className="details--item">
              {item.title && <h3>{item.title}</h3>}
              {item.subtitle && <h4>{item.subtitle}</h4>}
              {item.img && (
                <div
                  className="details--item--img"
                  style={{
                    backgroundImage: `url(${item.img})`
                  }}
                ></div>
              )}
              {item.links && (
                <div className="details--item--links">
                  {item.links.map((link) => (
                    <a target="_blank" rel="noreferrer" href={link.href}>
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
              {item.form && <Contact />}

              <p>{item.paragraph}</p>
              {item.ul &&
                item.ul.map((item, index) => <li key={index}>{item}</li>)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Panel;
