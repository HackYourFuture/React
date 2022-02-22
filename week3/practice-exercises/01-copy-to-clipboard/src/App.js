import "./App.css";
import UserInput from "./components/UserInput";
import { InputContext } from "./components/InputContext";
import { useState, useMemo } from "react";

function App() {
  const [input, setInput] = useState("");
  const providerValue = useMemo(() => ({ input, setInput }), [input, setInput]);

  return (
    <div className="App">
      <InputContext.Provider value={providerValue}>
        <UserInput />
      </InputContext.Provider>
    </div>
  );
}

export default App;
