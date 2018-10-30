import React from "react";
import "./TodoLists.css";

export default class TodoLists extends React.Component {
  render() {
    let { description, deadline, done, id, handleClick } = this.props;
    // let xxx = new Date(1 / 11 / 1999)
    // console.log(id);
    return (
      <div className="list">
        <ul>
          <li>
            <input
              type="checkbox"
              defaultChecked={done}
              onChange={handleClick}
            />
            <label>
              {description} /{deadline}/ {done}
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
