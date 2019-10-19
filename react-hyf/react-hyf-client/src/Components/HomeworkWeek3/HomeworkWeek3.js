import React, { Component } from 'react';
import NameSurname from './NameSurname';
import Container from './Container';
import Info from './Info';

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
    fetch('https://uinames.com/api/?amount=10')
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
            <NameSurname name={items[index].name} surname={items[index].surname} />
            <Info gender={items[index].gender} region={items[index].region} />
          </Container>
        </div>
      );
    }
  }
}

export default HomeworkWeek3;
