import React from "react";
import { InputContext } from "./InputContext";
import { useContext } from "react";
import useCopy from "./hooks/useCopy";

const Button = () => {
  const { input } = useContext(InputContext);
  const handleCopy = useCopy();
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleCopy(input);
        }}
      >
        Copy To Clipboard
      </button>
    </div>
  );
};

export default Button;
