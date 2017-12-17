//jshint esnext: true

import React from 'react';
import Todos from './components/Todos/List-todos';


export default class App extends React.Component {
  render() {
    return (
      <Todos />
    );
  }
}