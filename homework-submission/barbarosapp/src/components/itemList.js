import React from "react";
import Item from './item';

let data = require('./data/data.json')

class ItemList extends React.Component {

  render() {
    const { name, deadLine, check } = this.props;
    
    return (
      <div className="ToDoList">

        <section className="ToDoItem">
          <Item
            name={data[0].name}
            deadLine={data[0].deadline}
            check={data[0].situation} />
        </section>
        <section className="ToDoItem">
          <Item
            name={data[1].name}
            deadLine={data[1].deadline}
            check={data[1].situation} />
        </section>
        <section className="ToDoItem">
          <Item
            name={data[2].name}
            deadLine={data[2].deadline}
            check={data[2].situation} />
        </section>

      </div>
    );
  }
};

export default ItemList;