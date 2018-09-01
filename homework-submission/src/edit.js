import React, { Component } from 'react';

class edit extends Component{
  render(){
    return(
      <div>
      <label>
        description
      </label>
      <input type="text" value={this.props.description} onChange={(e)=>this.props.handleDeadlineChange(e.target.value)}/>
      <label>
        deadline
      </label>
      <input type="text" value={this.props.deadline} onChange={(e)=>this.props.handleDeadlineChange(e.target.value)}/>
      <button onClick={this.props.onUpdate}>update</button>
      </div>
    )
  }
}
export default edit;
