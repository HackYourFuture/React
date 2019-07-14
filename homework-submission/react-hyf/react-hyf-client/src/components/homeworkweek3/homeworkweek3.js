import React from 'react';
import './homeworkweek3.css';

import { getUsers } from './services/getUsers';

class HomeworkWeek3 extends React.Component {
  state = {};

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.users ? (
          this.state.users.map(({ name, surname, gender, region }, index) => (
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
      </React.Fragment>
    );
  }
}

export default HomeworkWeek3;
