import React from "react";
import Item from "./item";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    props.todoStore.getTodos();
  }

  render() {
    const { todoStore } = this.props;

    const createItems = todoStore.todos.data.map((item, index) => {
      return (
        <section className="ToDoItem" key={index}>
          <Item
            id={item._id}
            description={item.description}
            deadline={item.deadline}
            done={item.done}
          />
        </section>
      );
    });

    const emptyCheck =
      todoStore.todos.data.length > 0 ? (
        createItems
      ) : (
        <h2> ~ There is nothing to do :) ~ </h2>
      );

    return <div className="ToDoList">{emptyCheck}</div>;
  }
}

export default ItemList;
