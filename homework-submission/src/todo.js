import React, { Component } from 'react';
class todo extends Component {
  render(){
    return(
      <div>
        <input type="checkbox" onChange={this.props.onChange}/>
        <label description={this.props.description} deadline={this.props.deadline}>{this.props.description +"  "+this.props.deadline}</label>

      </div>
    )
  }
}
export default todo;
