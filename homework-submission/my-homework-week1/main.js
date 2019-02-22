'use strict';

// The goal of the next component is to insert a description row into a to-do table
class TodoDescriptionRow extends React.Component {
  render() {
    const description = this.props.description;
    return (
      <tr>
        <th>Description:</th>
        <td>{description}</td>
      </tr>
    );
  }
}

// The goal of the next component is to insert a deadline row into a to-do table
class TodoDeadlineRow extends React.Component {
  render() {
    const deadline = this.props.deadline;
    return (
      <tr>
        <th>Deadline:</th>
        <td>{deadline}</td>
      </tr>
    );
  }
}

// The goal of the next component is to create a to-do item table
class TodoTable extends React.Component {
  render() {
    const description = this.props.description;
    const deadline = this.props.deadline;

    return (
      <table className={this.props.done}>
        <tbody>
          <TodoDescriptionRow description={description} />
          <TodoDeadlineRow deadline={deadline} />
        </tbody>
      </table>
    );
  }
}

// The goal of the next component is to create a to-do list in which the information is manually filled
class StaticList extends React.Component {
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <TodoTable description="Get out of bed" deadline="Wed Sep 13 2017" />
        <TodoTable description="Brush teeth" deadline="Thu Sep 14 2017" />
        <TodoTable description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </div>
    );
  }
}

// The goal of the next component is to create a to-do list in which the information is dramatically filled
class DynamicList extends React.Component {
  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        {arr.map(obj => (
          <TodoTable
            description={obj.description}
            deadline={obj.deadline}
            done={obj.done ? 'done' : 'notDone'}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <StaticList />
    <DynamicList />
  </div>,
  document.getElementById('thisIsWhereReactIsInjected'),
);
