import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeworkWeek3 from "./HomeworkWeek3/HomeWorkWeek3";
import PreviousHomeworks1 from "./PreviousHomeworks/Week1/Week1";
import PreviousHomeworks2 from "./PreviousHomeworks/Week2";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <PreviousHomeworks1 />
    <PreviousHomeworks2 />
    <HomeworkWeek3 />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
