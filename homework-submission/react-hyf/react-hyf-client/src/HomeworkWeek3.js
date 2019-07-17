import React from "react";

class HomeworkWeek3 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("https://uinames.com/api/?amount=10")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let names = data.map(item => {
          return (
            <li>
              {item.name} {item.surname}
              <br />
              {item.gender} - {item.region}
              <br />
              <br />
            </li>
          );
        });
        this.setState({ data: names });
      });
  }

  render() {
    return (
      <div>
        <ul>{this.state.data}</ul>
      </div>
    );
  }
}

export default HomeworkWeek3;
