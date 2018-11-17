import React from "react";
import Item from "./item";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class ItemList extends React.Component {
  render() {
    const { todoStore } = this.props;

    const createItems = todoStore.Data.map((item, id) => {
      return (
        <section className="ToDoItem" key={id}>
          <Item
            id={item.id}
            name={item.name}
            deadLine={item.deadline}
            done={item.done}
          />
        </section>
      );
    });

    const emptyCheck =
      todoStore.Data.length > 0 ? (
        createItems
      ) : (
        <h2> ~ There is nothing to do :) ~ </h2>
      );

    return <div className="ToDoList">{emptyCheck}</div>;
  }
}

export default ItemList;
