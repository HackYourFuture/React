import React from "react";
import Description from "./components/Description";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul className="list">
          <h1>ToDo Checklist</h1>
          <li>
            <Description todo={"Get out of bed"} deadline={"Wed Sep 13 2017"} />
          </li>
          <li>
            <Description todo={"Brush teeth"} deadline={"Thu Sep 14 2017"} />
          </li>
          <li>
            <Description todo={"Eat breakfast"} deadline={"Fri Sep 15 2017"} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
