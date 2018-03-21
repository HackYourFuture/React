import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import TodoItems from "./stores/TodosStore";

ReactDOM.render(<App todoItems={TodoItems}/>, document.getElementById("root"));
