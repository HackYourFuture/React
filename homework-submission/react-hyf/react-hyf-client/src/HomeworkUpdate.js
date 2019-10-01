import React, { Component } from 'react';
import axios from 'axios';
import Name from './Name';
import InfoUpdate from './InfoUpdate';
import ProfilePicture from './ProfilePicture';
import Back from './Back';

class HomeworkUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }

  componentDidMount = e => {
    axios
      .get('https://uinames.com/api/?ext')
      .then(({ data }) => {
        this.setState({ apiData: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillMount = () => {
    window.addEventListener('keypress', e => {
      if (e.charCode === 32) {
        axios
          .get('https://uinames.com/api/?ext')
          .then(({ data }) => {
            this.setState({ apiData: data });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const { name, surname, photo } = this.state.apiData;
    return (
      <div>
        <div>
          <Back />
        </div>
        {this.state.apiData && this.state.apiData.length !== 0 ? (
          <div className='container'>
            <ProfilePicture image={photo} />
            <Name name={name} surname={surname} />
            <InfoUpdate data={this.state.apiData} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default HomeworkUpdate;
