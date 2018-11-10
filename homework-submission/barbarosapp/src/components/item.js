import React from "react";
import CheckBox from "./checkBox";
import RemoveButton from "./removeButton";
import Moment from "react-moment";

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
            Deadline :
            <span className="Color2">
              <Moment format=" DD MMMM YYYY  hh:mm">{deadLine}</Moment>
            </span>
          </p>
        </div>

        <div className="removeButtonDiv">
          <RemoveButton handleRemove={handleRemove} id={id} />
        </div>
      </section>
    );
  }
}

export default Item;
