import { InputContext } from "./InputContext";
import { useContext } from "react";
import Button from "./Button";

const UserInput = () => {
  const { input, setInput } = useContext(InputContext);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <input type="text" value={input} onChange={updateInput} />
      <Button />
    </form>
  );
};

export default UserInput;
