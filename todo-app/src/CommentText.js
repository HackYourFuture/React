import React from 'react';

export default class CommentText extends React.Component {
  state = {
    editingText: ''
  };

  onEditClick = () => {
    this.props.onStartEdit();

    this.setState({
      editingText: this.props.text
    });
  };

  onCancelClick = () => {
    this.props.onStopEdit();
  };

  onTextChange = (event) => {
    this.setState({
      editingText: event.target.value
    });
  };

  onUpdateClick = () => {
    this.props.onUpdate(this.state.editingText);
    this.setState({
      editingText: ''
    });
  };

  render() {
    if (this.props.editing) {
      return (
        <div>
          <input type="text" value={this.state.editingText} onChange={this.onTextChange} />
          <button onClick={this.onUpdateClick}>update</button>
          <button onClick={this.onCancelClick}>cancel</button>
        </div>
      );
    }

    return (
      <div>
        {this.props.text}
        <button onClick={this.onEditClick}>edit</button>
      </div>
    );
  }
}
