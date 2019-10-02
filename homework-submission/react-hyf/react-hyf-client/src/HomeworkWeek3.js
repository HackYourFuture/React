import React, { Component } from 'react';
import axios from 'axios';
import Name from './Name';
import Info from './Info';
import ProfilePicture from './ProfilePicture';
import Back from './Back';

class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      randomPerson: {},
      picture: '',
    };
  }

  componentDidMount = e => {
    axios
      .get('https://uinames.com/api/?amount=10')
      .then(({ data }) => {
        this.setState({ apiData: data });
      })
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        this.randomPerson();
      })
      .then(response => {
        this.getPicture();
      });
  };

  getPicture = e => {
    axios
      .get('https://randomuser.me/api/')
      .then(({ data }) => {
        let pictureGender = data.results[0].gender;
        let userGender = this.state.randomPerson.gender;
        if (pictureGender === userGender) {
          let ProfilePicture = data.results[0].picture.large;
          this.setState({ picture: ProfilePicture });
        } else {
          this.getPicture();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  randomPerson() {
    const randomNumber = Math.floor(Math.random() * this.state.apiData.length);
    const randomPerson = this.state.apiData[randomNumber];
    this.setState({ randomPerson });
  }

  componentWillMount = () => {
    window.addEventListener('keypress', e => {
      if (e.charCode === 32) {
        const randomNumber = Math.floor(Math.random() * this.state.apiData.length);
        const randomPerson = this.state.apiData[randomNumber];
        this.setState({ randomPerson });
        this.getPicture();
      } else {
        console.log('error');
      }
    });
  };

  render() {
    const { name, surname, gender, region } = this.state.randomPerson;
    return (
      <div>
        <div>
          <Back />
        </div>
        {this.state.randomPerson && this.state.randomPerson.length !== 0 ? (
          <div className='container'>
            {this.state.picture && this.state.picture.length !== 0 ? (
              <ProfilePicture image={this.state.picture} />
            ) : null}
            <Name name={name} surname={surname} />
            <Info gender={gender} region={region} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default HomeworkWeek3;
