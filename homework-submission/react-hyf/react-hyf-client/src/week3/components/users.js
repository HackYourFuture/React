import React from 'react';
import { API } from '../apiCalls/apiCalls';
//import male from '../logos/male.jpg';
//import female from '../logos/female.jpg';
import './styles.css';

const UserName = ({ name }) => {
  return <h2>{name}</h2>;
};
const UserSurname = ({ surname }) => {
  return <h4>{surname}</h4>;
};

/*const UserGender = ({ gender }) => {
  console.log({ gender });
  if ({ gender } === 'male') {
    return <img src={male} alt="male_logo" />;
  } else if ({ gender } === 'female') {
    return <img src={female} alt="female_logo" />;
  }
};
*/

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
      <div className="container">
        {this.state.result ? (
          this.state.result.map(({ name, surname /*gender*/ }, i) => {
            return (
              <div key={i}>
                <div className="name-surname">
                  <UserName name={name} />
                  <UserSurname surname={surname} />
                </div>
                {/* <div className="logo">
                  <UserGender gender={gender} />
                </div> */}
              </div>
            );
          })
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    );
  }
}

export default Users;
