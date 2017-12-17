//jshint esnext: true

import React from 'react';
import Todos from './todos/todo-list';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <Todos />
      </div>
    );
  }
}