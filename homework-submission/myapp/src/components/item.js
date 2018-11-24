import React from "react";
import CheckBox from "./checkBox";
import RemoveButton from "./removeButton";
import Moment from "react-moment";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class Item extends React.Component {
  render() {
    const { description, deadline, id } = this.props;

    return (
      <section className="ToDos">
        <div className="CheckBoxDiv">
          <CheckBox />
        </div>

        <div className="Info">
          <p>
            Name : <span className="Color1"> {description} </span>
          </p>
          <p>
            Deadline :
            <span className="Color2">
              <Moment format=" DD MMMM YYYY  hh:mm A  ">{deadline}</Moment>
            </span>
          </p>
        </div>

        <div className="removeButtonDiv">
          <RemoveButton id={id} />
        </div>
      </section>
    );
  }
}

export default Item;
