import React, { Component } from 'react';

class edit extends Component{
  render(){
    return(
      <div>
      <label>
        description
      </label>
      <input type="text" value={this.props.description} onChange={this.props.handleDescriptionChange}/>
      <label>
        deadline
      </label>
      <input type="text" value={this.props.deadline} onChange={this.props.handleDeadlineChange}/>
      </div>
    )
  }
}
export default edit;
