import React from 'react';
  
class Table extends React.Component {
  render() {
    const description = this.props.description;
    const deadline = this.props.deadline;
    const done = this.props.done;

    return (
      <table className="todo-app-table">
        <tbody>
          <tr>
            <td className="todo-app-row">{description}</td>
            <td className="todo-app-row">{deadline}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class StaticList extends React.Component {
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <Table description="Get out of bed" deadline="Wed Sep 13 2017" />
        <Table description="Brush teeth" deadline="Thu Sep 14 2017" />
        <Table description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </div>
    );
  }
}

export default StaticList;