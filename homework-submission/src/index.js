import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import TodoStore from "./Stores/TodoStore";
import { Provider } from "mobx-react";

const MobxProvider = (
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
);

ReactDOM.render(MobxProvider, document.getElementById("root"));
registerServiceWorker();
