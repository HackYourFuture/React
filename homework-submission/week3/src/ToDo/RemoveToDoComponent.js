import React from 'react';
import Button from './Button';

export default class NewToDoComponent extends React.Component {

  state = { counter: 0 }

  removeToDo = indexToDo => {
    console.log(indexToDo);
    this.props.handleRemoveToDo(indexToDo);

  }
  render() {
    return (
      <div>
        <Button text='Remove' index={this.props.index} onClickFunction={this.removeToDo} />

      </div>

    );
  }
}