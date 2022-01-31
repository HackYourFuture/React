import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import RoutingApp from "./1-Routing/RoutingApp";
import { LoggedInUserContextProvider } from "./2-Context/LoggedInUserContext";
import MyProfile from "./2-Context/MyProfile";
import useListState from "./3-useListState";

function App() {
  const { list, addElement, removeElementWithId } = useListState([
    { id: uuidv4(), label: "First item" },
  ]);
  const [newItemLabel, setNewItemLabel] = useState("");

  return (
    <div>
      <RoutingApp />
      <hr />
      <LoggedInUserContextProvider initialUser={{ name: "John" }}>
        <MyProfile />
      </LoggedInUserContextProvider>
      <hr />
      <ul>
        {list.map((item) => {
          return (
            <li onClick={() => removeElementWithId(item.id)}>{item.label}</li>
          );
        })}
      </ul>
      <div>
        <input
          value={newItemLabel}
          onChange={(e) => setNewItemLabel(e.target.value)}
        />
      </div>
      <button onClick={() => addElement({ id: uuidv4(), label: newItemLabel })}>
        Add
      </button>
    </div>
  );
}

export default App;
