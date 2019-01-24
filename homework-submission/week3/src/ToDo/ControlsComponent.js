import React from 'react';
import RemoveToDoComponent from './RemoveToDoComponent';
import Edit from './Edit';


export default class ControlsComponent extends React.Component {

  handleRemoveToDo = (indexToDo) => {
    this.props.handleRemove(indexToDo);
  }



  render() {
    return (
      <div>

        <RemoveToDoComponent index={this.props.index} handleRemoveToDo={this.handleRemoveToDo} ></RemoveToDoComponent>
      </div>

    );
  }
}