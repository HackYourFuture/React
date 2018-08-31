import React, { Component } from 'react';

class  myList extends Component {
  render(){
    return  <div>
                   <p key={this.props.index}  description={this.props.description} deadline={this.props.deadline}>
                  <input type="checkbox" onChange={this.props.onChange}/>
                    <li>{this.props.description +"  "+this.props.deadline}</li>
                  </p>
                  <button onClick={this.props.ondelete}>Delete</button>
                  <button onClick={this.props.onedit}>Edit</button>
                  <p onError={this.props.errors}></p>

            </div>

  }
}
export default myList;
