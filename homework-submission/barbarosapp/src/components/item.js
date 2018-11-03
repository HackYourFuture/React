import React from "react";
import CheckBox from "./checkBox";
import RemoveButton from "./removeButton";

class Item extends React.Component {
  render() {
    const { name, deadLine, handleCheck, handleRemove, done, id } = this.props;

    return (
      <section className="ToDos">
        <div className="CheckBoxDiv">
          <CheckBox handleCheck={handleCheck} id={id} done={done} />
        </div>

        <div className="Info">
          <p>
            Name : <span className="Color1"> {name} </span>
          </p>
          <p>
            Deadline : <span className="Color2"> {deadLine} </span>
          </p>
        </div>

        <div className="removeButtonDiv">
          <RemoveButton handleRemove={handleRemove} />
        </div>
      </section>
    );
  }
}

export default Item;
