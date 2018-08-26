import React, { Component } from 'react';

class  List extends Component {
  render(){
    return(
      <ul>{this.props.description},{this.props.deadline}</ul>
    )
  }
}
export default List;
