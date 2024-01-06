import { useState, useEffect, useDebugValue } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useDebugValue(`width: ${windowSize.width}, height: ${windowSize.height}`);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => document.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const useSizeRange = (minWidth, maxWidth) => {
  const { width } = useWindowSize();

  const isSizeInRange = width >= minWidth && width <= maxWidth;
  useDebugValue(
    isSizeInRange
      ? `Width between ${minWidth}px and ${maxWidth}px`
      : "Not in range",
  );

  return isSizeInRange;
};

export { useWindowSize, useSizeRange };
