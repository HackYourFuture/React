import React, { Component } from 'react';
class addTodo extends Component {
  render(){
    return(
      <form>
          <input type="text"
            description={this.props.description}
            value={this.props.description}
            onChange={(e)=>this.props.handleDescriptionChange(e.target.value)}
            placeholder="Enter description"/>
          <input type="text" deadline={this.props.deadline}
          value={this.props.deadline}
          onChange={(e)=>this.props.handleDeadlineChange(e.target.value)}
          placeholder="enter dead line"/>
        <button onClick={this.props.handlesubmit}>Add</button>
      </form>

    )
  }
}
export default addTodo;
