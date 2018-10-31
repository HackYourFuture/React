import React from "react";
import Item from "./item";
import Data from "./data/data";

class ItemList extends React.Component {
  render() {
    const createItems = Data.map(item => {
      return (
        <section className="ToDoItem">
          <Item
            key={item.id}
            name={item.name}
            deadLine={item.deadline}
            check={item.situation}
          />
        </section>
      );
    });

    return <div className="ToDoList">{createItems}</div>;
  }
}

export default ItemList;
