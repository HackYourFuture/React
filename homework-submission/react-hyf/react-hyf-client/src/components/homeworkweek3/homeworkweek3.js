import React from 'react';
import './homeworkweek3.css';
import Table from './components/table';
import { getUsers } from './services/getUsers';

class HomeworkWeek3 extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    return (
      <React.Fragment>
        <h2>HomeworkWeek3</h2>
        <div className="container week3">
          <Table users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default HomeworkWeek3;
