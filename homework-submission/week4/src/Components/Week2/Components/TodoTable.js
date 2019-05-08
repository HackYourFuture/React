import React, { Component } from 'react';

 class Table extends Component {
  render() {
    const { description, deadline } = this.props;
   
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

export default Table;