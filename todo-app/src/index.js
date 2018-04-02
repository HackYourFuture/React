import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import TodosStore from "./stores/TodosStore";
import App from "./App";
import "./index.css";

const TodoApp = () => (
    <Provider todosStore={TodosStore}>
        <App />
    </Provider>
);

ReactDOM.render(<TodoApp />, document.getElementById("root"));
