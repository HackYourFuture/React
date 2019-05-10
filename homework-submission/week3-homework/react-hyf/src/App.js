import React, { Component } from 'react';
import Spinner from './spinner';
import './App.css';

class App extends Component {
  state = {
    personInfos: [],
    personInfo: {},
    isLoading: true,
  };
  componentDidMount() {
    fetch('http://localhost:4000/fetchAPI')
      .then(fetchedData => fetchedData.json())
      .then(data => {
        this.setState({ personInfos: data, personInfo: data[0], isLoading: false });
      })
      .catch(err => err);
  }

  handleClick = () => {
    const { personInfos } = this.state;
    const randomValue = Math.floor(Math.random() * Math.floor(9));
    const personInfo = personInfos[randomValue];
    this.setState({ personInfo: personInfo });
  };

  render() {
    const personInfo = this.state.personInfo;
    const personInfoValues = Object.values(personInfo);
    return (
      <div className="parent">
        <div className="child">
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <div className="elements">
              <div className="element" key={0}>
                {personInfoValues[0] + ' ' + personInfoValues[1]}
              </div>
              <div className="element" key={1}>
                <span role="img" aria-label="gender">
                  👤{personInfoValues[2]}
                </span>
              </div>
              <div className="element" key={2}>
                <span role="img" aria-label="country">
                  🌐{personInfoValues[3]}
                </span>
              </div>
            </div>
          )}
          <div>
            <button onClick={this.handleClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
