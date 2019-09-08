import React from 'react';

const Image = ({ image }) => {
  return <img src={image} className="profile-photo" alt="profile" />;
};

const FullName = ({ name, surname }) => {
  return (
    <h1 className="full-name">
      {name} {surname}
    </h1>
  );
};

const Users = ({ user }) => {
  return (
    <ul className="user-data-list">
      <li>
        <span role="img" aria-label="gender">
          👤 {user.gender}
        </span>
      </li>
      <li>
        <span role="img" aria-label="region">
          🌐 {user.region}
        </span>
      </li>
      <li>
        <span role="img" aria-label="phone">
          📞 {user.phone}
        </span>
      </li>
      <li>
        <span role="img" aria-label="birthday">
          🎂 {user.birthday.dmy}
        </span>
      </li>
      <li>
        <span role="img" aria-label="email">
          ✉️ {user.email}
        </span>
      </li>
      <li>
        <span role="img" aria-label="password">
          🔑 {user.password}
        </span>
      </li>
    </ul>
  );
};

class HomeworkWeek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loaded: false,
      users: [],
      userIndex: 0,
    };
  }

  handleKeyUp = event => {
    if (event.which === 32 || event.code === 'Space') {
      this.setState({ userIndex: Math.floor(Math.random() * 10) });
    }
  };

  async componentDidMount() {
    try {
      window.addEventListener('keyup', this.handleKeyUp);
      const response = await fetch('https://uinames.com/api/?ext&amount=10');
      const data = await response.json();      

      this.setState({ users: data, loaded: true });
    } catch (error) {      
      this.setState({ error: true });
    }
  }

  render() {
    const { users, userIndex, loaded } = this.state;   
    if (!loaded) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="week3">
          <Image image={users[userIndex].photo} />
          <FullName name={users[userIndex].name} surname={users[userIndex].surname} />
          <Users user={users[userIndex]} />
        </div>
      );
    }
  }
}
export default HomeworkWeek3;
