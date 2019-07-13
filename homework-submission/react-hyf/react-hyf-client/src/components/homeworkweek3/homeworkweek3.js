import React from 'react';
import './homeworkweek3.css';

import { getUsers } from './services/getUsers';

class HomeworkWeek3 extends React.Component {
  state = {};

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  changeUsersList() {
    console.log('text');
  }

  render() {
    return (
      <React.Fragment>
        {this.state.users ? (
          this.state.users.map(({ name, surname, gender, region }, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{gender}</td>
              <td>{region}</td>
            </tr>
          ))
        ) : (
          <h1>Data Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default HomeworkWeek3;
