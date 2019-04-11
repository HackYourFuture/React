import React, { Component } from 'react';

 class Table extends Component {
  render() {
    const { description, deadline } = this.props;
   
    return (
      <table>
        <tbody>
          <tr>
            <td>{description}</td>
            <td>{deadline}</td>
          </tr>
        </tbody>
        </table>
    );
  }
 }

export default Table;