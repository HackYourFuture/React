import React, { Component } from 'react';
import NameSurname from './NameSurname';
import Container from './Container';
import Info from './Info';
import Image from './Image';

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
    fetch('https://uinames.com/api/?ext')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(this.state.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const index = Math.floor(Math.random() * items.length);
    // console.log(index);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <Image photo={items.photo} />
            <NameSurname name={items.name} surname={items.surname} />
            <Info gender={items.gender} region={items.region} phone={items.phone} />
          </Container>
        </div>
      );
    }
  }
}

export default HomeworkWeek3;
