import React from "react";
import Item from './item'

class ItemList extends React.Component {

  render() {
    const { name, deadLine, check } = this.props;
    
    return (
      <div className="ToDoList">

        <section className="ToDoItem">
          <Item
            name="Graduation Thesis"
            deadLine="20-10-2018"
            check="Undone" />
        </section>
        <section className="ToDoItem">
          <Item
            name="Payment for Credit Card"
            deadLine="10/10/2018"
            check="Done" />
        </section>
        <section className="ToDoItem">
          <Item
            name="Renovation of House"
            deadLine="01/12/2018"
            check="Undone" />
        </section>

      </div>
    );
  }
};

export default ItemList;