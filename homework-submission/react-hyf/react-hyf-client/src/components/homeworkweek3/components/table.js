import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Gender</th>
              <th scope="col">Region</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users ? (
              this.props.users.map(({ name, surname, gender, region }, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{surname}</td>
                  <td>{gender}</td>
                  <td>{region}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Data Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
