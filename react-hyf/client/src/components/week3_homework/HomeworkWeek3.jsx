import React, { Component } from 'react';

// COMPONENTS
import Navbar from './navbar/Navbar';
import User from './user/User';
import Help from './help_share/Help';
import Footer from './footer/Footer';
import Spinner from './spinner/Spinner';

export class HomeworkWeek3 extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
    };
  }

  // COMPONENT DID MOUNT
  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(users => this.setState({ users, isLoading: false }))
      .catch(err => console.log(err.message));
  }

  render() {
    const { users, isLoading } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        {isLoading ? <Spinner /> : <User users={users} />}
        <Help />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeworkWeek3;
