import React, { Component } from "react";
import List from "./List";
import Checkbox from "./Checkbox";
import RemoveTodo from "./RemoveTodo";

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, id) => (
            <div key={id} className={item.done? 'checked' : ''}>
            <Checkbox 
              toggle = {this.props.toggle}
              item = {item}
             />

            <List 
              description = {item.description} 
              deadline = {item.deadline}
             />
             <RemoveTodo
             remove = {this.props.remove}
             i = {id}
             />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todos;
