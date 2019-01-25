import React from 'react';

export default class Description extends React.Component {

  state = {
    description: this.props.todo
  }
  onValueChange = (e) => {
    this.props.onValueChange(e, this.props.mode);
    this.setState({ description: e.target.value });
  }

  onFormSubmit = (e) => {
    this.setState({ description: this.state.description, deadline: this.props.deadline });
    this.props.handleUpdate(this.state.description, this.props.mode);
    //this.setState({ description: '', deadline: '' });
    e.preventDefault();
  }
  handleCancel = (e) => {

    this.props.handleCancel(this.props.todo, this.props.mode);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {(this.props.mode === -1 || this.props.mode !== this.props.index) ?
          < p > {this.props.todo}, {this.props.deadline}</p > :
          <div>
            <form onSubmit={this.onFormSubmit}>
              <input name='description' type='text' value={this.props.todo} onChange={this.onValueChange} />
              <input type='submit' value='Update' />
              <input type='button' value='Cancel' onClick={this.handleCancel} />
            </form>
          </div>
        }
      </div>
    );
  }
}