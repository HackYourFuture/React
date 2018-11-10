import React from "react";
import "./TodoLists.css";



export default class TodoLists extends React.Component {

  render() {

    let { description, deadline, done, id, handleClick, removeItem } = this.props;

    // console.log(data[2].deadline)

    return (
      <div className="list">

        <ul>
          <li>

            <input type="checkbox" defaultChecked={done} onChange={handleClick} />


            <label>{description} / {deadline} {done}/
              {/* < Edit /> */}
            </label>
            <button id='removeBtn' type='submit' onClick={removeItem}> X</button>

          </li>
        </ul>

      </div>
    );
  }
}
