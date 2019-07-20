import React from 'react';
import Navigation from '../../../Navigation/Navigation';
import { API } from '../apiCalls/apiCalls';
import male from '../logos/for_male.jpg';
import female from '../logos/for_female.jpg';
import './styles.css';

const UserName = ({ name }) => {
  return <h2>{name}</h2>;
};
const UserSurname = ({ surname }) => {
  return <h4>{surname}</h4>;
};

const UserGender = ({ gender }) => {
  if (gender === 'male') {
    return <img src={male} className="logo" alt="male_logo" />;
  } else if (gender === 'female') {
    return <img src={female} className="logo" alt="female_logo" />;
  }
};

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    API().then(info => {
      this.setState({ result: info });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          {this.state.result ? (
            this.state.result.map(({ name, surname, gender }, i) => {
              return (
                <div className="user" key={i}>
                  <div className="name-surname">
                    <UserName name={name} />
                    <UserSurname surname={surname} />
                  </div>
                  <UserGender gender={gender} />
                </div>
              );
            })
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
