import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import todoStore from "./stores/todoStore";
import { Provider } from "mobx-react";


const Root = (
  <Provider todoStore={todoStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));

serviceWorker.unregister();
