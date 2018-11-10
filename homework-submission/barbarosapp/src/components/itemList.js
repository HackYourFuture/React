import React from "react";
import Item from "./item";

class ItemList extends React.Component {
  render() {
    const { Data, handleCheck, handleRemove } = this.props;

    const createItems = Data.map((item, id) => {
      return (
        <section className="ToDoItem" key={id}>
          <Item
            id={item.id}
            name={item.name}
            deadLine={item.deadline}
            done={item.done}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        </section>
      );
    });

    const emptyCheck =
      Data.length > 0 ? createItems : <h2> ~ There is nothing to do :) ~ </h2>;

    return <div className="ToDoList">{emptyCheck}</div>;
  }
}

export default ItemList;
