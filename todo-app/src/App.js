//jshint esnext: true

import React from 'react';
import Todos from './components/Todos/ListTodos';


export default class App extends React.Component {
  render() {
    return (
      <Todos />
    );
  }
}