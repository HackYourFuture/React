import React, { Component } from "react";
// import React from "react";

class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={() => {
            console.log("clicked");
            this.props.handleChange(this.props.id);
          }}
        />
        <h2 className={this.props.todo.done ? "done" : null}>
          {this.props.todo.description}
        </h2>
        <p className={this.props.todo.done ? "done" : null}>
          {this.props.todo.deadline}
        </p>
      </li>
    );
  }
}

// function Item(props) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={props.Data.done}
//         onChange={() => props.handleChange(props.Data.id)}
//       />
//       <h2 className={props.Data.done ? "done" : null}>
//         {props.Data.description}
//       </h2>
//       <p className={props.Data.done ? "done" : null}>{props.Data.deadline}</p>
//     </li>
//   );
// }

// class Item extends Component {
//   render() {
//     return (
//       <li>
//         <input
//           type="checkbox"
//           checked={this.props.done}
//           onChange={() => this.props.handleChange(this.props.id)}
//         />
//         <h2>{this.props.description}</h2>
//         <p>{this.props.deadline}</p>
//       </li>
//     );
//   }
// }
export default Item;
