import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import todoItems from "./stores/TodosStore";
import App from "./App";
import "./index.css";

const TodoApp = () => (
    <Provider todoItems={todoItems}>
        <App />
    </Provider>
);

ReactDOM.render(<TodoApp />, document.getElementById("root"));
