import React from 'react';
import Button from './Button';

export default class NewToDoComponent extends React.Component {

  state = { counter: 0 }

  /*removeToDo = (indexToDo) => {
    console.log('RemoveToDoComponent: ', indexToDo);
    this.props.handleRemoveToDo(indexToDo);

  }*/
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveToDo}>Remove</button>
      </div>

    );
  }
}
