import { useState, useEffect } from "react";

const useDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({});
  const getWindowDimensions = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowDimensions);
    getWindowDimensions();
  }, []);

  return { windowDimensions };
};

export default useDimensions;
