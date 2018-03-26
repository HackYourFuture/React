import React from 'react';

import stores from './stores';
import { Provider } from 'mobx-react'

// Components
import Header from "./component/Header";
import Todos from "./component/Todos";

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <React.Fragment>
          <Header />
          <Todos />
        </React.Fragment>
      </Provider>
    );
  }
}
