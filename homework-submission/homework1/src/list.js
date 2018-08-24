import React, { Component } from 'react';

class  List extends Component {
  render(){
    return(
      <ul style={this.props.textDecorationLine}>{this.props.description},{this.props.deadline}</ul>
    )
  }
}
export default List;
