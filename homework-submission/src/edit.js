import React, { Component } from 'react';

class edit extends Component{
  render(){
    return(
      <div>
      <form onSubmit={(e)=>this.onUpdate(e)}>
      <label>
        description
      </label>
      <input type="text" placeholder="enter description" onChange={(e)=>this.props.onUpdateDescription()} value={this.props.description}/>
      <label>
        deadline
      </label>
      <input type="text" placeholder="enter deadline" onChange={(e)=>this.props.onUpdateDeadline(e)} value={this.props.deadline}/>
      <button onClick={(e)=>this.onUpdate(e)}>update</button>
      </form>
      </div>
    )
  }
}
export default edit;
