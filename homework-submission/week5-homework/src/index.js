import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import TodoStore from "./stores/TodoStore";
let root = (
    <Provider TodoStore={TodoStore}>
        <App />
    </Provider>
);
ReactDOM.render(root, document.getElementById("root"));
registerServiceWorker();
