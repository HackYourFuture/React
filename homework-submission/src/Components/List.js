import React, { Component } from "react";
import Item from "./Item";
import "./list.css";

export default class ListItems extends Component {
  render() {
    const { dataModel, handleChecked } = this.props;
    return (
      <ul>
        {dataModel.length === 0 ? (
          <p className="no-todos">No todos</p>
        ) : (
          dataModel.map((entity, i) => {
            return (
              <React.Fragment key={i}>
                <input
                  type="checkbox"
                  checked={entity.done}
                  onChange={() => handleChecked(entity)}
                />
                <Item todo={entity} />
              </React.Fragment>
            );
          })
        )}
      </ul>
    );
  }
}
