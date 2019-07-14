import React, { Component } from 'react';
import List from './List';

class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const handleErrors = response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    };

    fetch('https://uinames.com/api/?amount=10')
      .then(handleErrors)
      .then(res => res.json())
      .then(items =>
        this.setState(
          {
            isLoaded: true,
            items,
          },
          () => console.log(items),
        ),
      )
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.state.items.map((item, i) => (
            <List
              key={i}
              name={'Name:' + item.name + ' ' + item.surname}
              gender={item.gender}
              region={item.region}
            />
          ))}
        </ul>
      );
    }
  }
}

export default HomeworkWeek3;
