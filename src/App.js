import React, { useState, useEffect } from "react";

import "./styles.css";

import Landing from "./Routes/Landing";

//data
import content from "./Data/content";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadImage = (image) => {
      setTimeout(200);
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.imgURL;
        loadImg.onload = () => {
          setLoadedCount((prevCount) => prevCount + 1);
          resolve(image.imgURL);
        };
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(content.map((image) => loadImage(image)))
      .then(() => {
        setTimeout(3000);
        setImagesLoaded(true);
      })
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  const loadingPercentage = Math.floor(
    (loadedCount / (content.length * 2)) * 100
  );

  return (
    <div className="App">
      {imagesLoaded ? (
        <Landing isMobile={isMobile} content={content} />
      ) : (
        <div className="loading-spinner">
          Loading: {loadingPercentage}% {/* Display loading progress */}
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${loadingPercentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
