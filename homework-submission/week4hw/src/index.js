import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import TodoListStore from "./stores/TodoListStore";

const AppRoot = (
  <Provider todoListStore={TodoListStore}>
    <App />
  </Provider>
);

ReactDOM.render(AppRoot, document.getElementById("root"));
registerServiceWorker();
