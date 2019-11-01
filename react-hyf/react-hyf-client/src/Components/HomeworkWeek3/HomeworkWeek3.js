import React, { Component } from 'react';
import NameSurname from './NameSurname';
import Container from './Container';
import Info from './Info';
import Image from './Image';
import RandomButton from './RandomButton';

class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.fetchingData();
  }

  fetchingData = () => {
    fetch('https://uinames.com/api/?ext')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <Image photo={items.photo} />
            <RandomButton click={this.fetchingData} />
            <NameSurname name={items.name} surname={items.surname} />
            <Info gender={items.gender} region={items.region} phone={items.phone} />
          </Container>
        </div>
      );
    }
  }
}

export default HomeworkWeek3;
