import React, { Component } from "react";
// import List from "./List";
import Checkbox from "./Checkbox";
import RemoveTodo from "./RemoveTodo";

class Todos extends Component {
  render() {
    return (
        <div>
          <ul>
          {this.props.items.map((item, id) => (
            <li key={id} className={item.done? 'checked' : ''}>
            <Checkbox 
              toggle = {this.props.toggle}
              item = {item}
             />
        
            <span>{item.description}, {item.deadline}</span>
              
             <RemoveTodo
             remove = {this.props.remove}
             todoIndex = {item._id}
             />
            </li>
          ))}
          </ul>
        </div>
    );
  }
}
export default Todos;
