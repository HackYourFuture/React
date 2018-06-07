import React from "react";
import { Description } from "./Description";

export class App extends React.Component {
  render() {
    const divStyle = {
      display: "flex",
      justifyContent: "center",
      margin: 0,
      padding: 0
    };

    const ulStyle = {
      listStyleType: "none",
      padding: "0",
      margin: "40",
      fontSize: "20px",
      textAlign: "center"
    };

    return (
      <div style={divStyle}>
        <ul style={ulStyle}>
          <h1>Todos</h1>
          <li style={{ color: "green" }}>
            <Description todo={"Get out of bed"} deadline={"Wed Sep 13 2017"} />
          </li>
          <li style={{ color: "red" }}>
            <Description todo={"Brush teeth"} deadline={"Thu Sep 14 2017"} />
          </li>
          <li style={{ color: "blue" }}>
            <Description todo={"Eat breakfast"} deadline={"Fri Sep 15 2017"} />
          </li>
        </ul>
      </div>
    );
  }
}
