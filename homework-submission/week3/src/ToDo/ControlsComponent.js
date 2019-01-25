import React from 'react';
import RemoveToDoComponent from './RemoveToDoComponent';


export default class ControlsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    };
    //this.handleMode = this.handleMode.bind(this);
  }
  handleRemoveToDo = (indexToDo) => {
    this.props.handleRemove(indexToDo);
  }

  handleEdit = (indexToDo) => {
    //console.log(indexToDo);
    //console.log(this.props.mode);

    this.props.handleEdit(indexToDo);
  }

  handleUpdate = () => {
    console.log('handleUpdate');
  }

  handleCancel = () => {
    console.log('handleCancel');
  }

  render() {
    return (
      <div>
        {
          (this.props.mode === -1 || this.props.mode !== this.props.index) ?
            <button onClick={() => this.handleEdit(this.props.index)}>Edit</button> :
            <div>
            </div>}
        <RemoveToDoComponent handleRemoveToDo={() => this.handleRemoveToDo(this.props.index)} ></RemoveToDoComponent>
      </div>

    );
  }
}