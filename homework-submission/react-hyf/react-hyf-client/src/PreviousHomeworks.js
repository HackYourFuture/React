import React from 'react';
import AppTodoW1 from '../src/React_HW1/todoApp';
import AppTodoW2 from '../src/React_HW2/todoApp2';

class PreviousHomeworks extends React.Component {
  render() {
    return (
      <div>
        <AppTodoW1 />
        <AppTodoW2 />
      </div>
    );
  }
}

export default PreviousHomeworks;
