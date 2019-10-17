import { useState, useEffect } from 'react';

const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState(0);

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.keyCode === 32) {
        setKeyPressed(keyPressed + 1);
      }
    };
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [keyPressed]);

  return keyPressed;
};

export default useKeyPress;
