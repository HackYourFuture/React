import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App";
import TodosStore from "./stores/TodosStore";

ReactDOM.render(<App todos={TodosStore}/>, document.getElementById("root"));
