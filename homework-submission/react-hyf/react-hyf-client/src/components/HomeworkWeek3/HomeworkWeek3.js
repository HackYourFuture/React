import React, { Component } from 'react';
import Profile from './Profile';

const url = 'https://uinames.com/api/?amount=10';

class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(json => 
        json.map((elem)=>
          this.setState({
            data: elem,
          })
        ) 
    );
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  onKeyPressed(e) {
      if (e.keyCode === 32) {
        this.componentDidMount();
    };
  }

  render() {
    const { data } = this.state;
   
    return (
      <div>
        <Profile
          name={data.name}
          surname={data.surname}
          gender={data.gender}
          region={data.region}
        />
      </div >
    )
  }
}

export default HomeworkWeek3;
