import { InputContext } from "../InputContext";
import { useContext } from "react";

const useCopy = () => {
  const { setInput } = useContext(InputContext);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setInput("");
  };
  return handleCopy;
};

export default useCopy;
