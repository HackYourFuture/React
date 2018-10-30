import React from "react";
import Item from "./item";

class ItemList extends React.Component {
  render() {
    const { Data, handleCheck } = this.props;

    const createItems = Data.map(item => {
      return (
        <section className="ToDoItem">
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            deadLine={item.deadline}
            done={item.done}
            handleCheck={() => handleCheck(item.id)}
          />
        </section>
      );
    });

    const emptyCheck =
      Data.length > 0 ? (
        createItems
      ) : (
        <div className="ToDoList">
          <h2>Your List is EMPTY</h2>
        </div>
      );

    return <div className="ToDoList">{emptyCheck}</div>;
  }
}

export default ItemList;
