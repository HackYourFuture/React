import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "mobx-react";
import TodosStore from "./Stores/TodosStore";

const MobxIntegratedApp = (
  <Provider TodosStore={TodosStore}>
    <App />
  </Provider>
);

ReactDOM.render(MobxIntegratedApp, document.getElementById("root"));
registerServiceWorker();
