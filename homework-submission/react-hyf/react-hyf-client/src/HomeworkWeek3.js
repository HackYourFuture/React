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
      .then(response => {
        this.setState({ apiData: response.data });
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
      .then(response => {
        let pictureGender = response.data.results[0].gender;
        let userGender = this.state.randomPerson.gender;
        if (pictureGender === userGender) {
          let ProfilePicture = response.data.results[0].picture.large;
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
    this.setState({ randomPerson: randomPerson });
  }

  componentWillMount = () => {
    window.addEventListener('keypress', e => {
      if (e.charCode === 32) {
        const randomNumber = Math.floor(Math.random() * this.state.apiData.length);
        const randomPerson = this.state.apiData[randomNumber];
        this.setState({ randomPerson: randomPerson });
        this.getPicture();
      } else {
        console.log('error');
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <Back />
        </div>
        <div>
          <ProfilePicture image={this.state.picture} />
          <Name name={this.state.randomPerson.name} surname={this.state.randomPerson.surname} />
          <Info gender={this.state.randomPerson.gender} region={this.state.randomPerson.region} />
        </div>
      </div>
    );
  }
}

export default HomeworkWeek3;
