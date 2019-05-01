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
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(items =>
        this.setState(
          {
            isLoaded: true,
            items,
          },
          () => console.log(items),
        ),
      );
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {this.state.items.map((item, i) => (
              <div>
                <div>
                  <List
                    key={i}
                    name={'Name:' + item.name + ' ' + item.surname}
                    gender={item.gender}
                    region={item.region}
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default HomeworkWeek3;
