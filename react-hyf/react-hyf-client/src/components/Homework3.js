import React from 'react';
import PhotoContainer from './PhotoContainer';
import NameHeader from './NameHeader';
import List from './List';
class Homework3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      isLoading: true,
      error: false,
      randomIndex: 0,
    };
    this.fillData = this.fillData.bind(this);
  }

  async componentDidMount() {
    try {
      window.addEventListener('keyup', this.fillData);
      const response = await fetch('https://uinames.com/api/?amount=10&ext');
      const data = await response.json();
      this.setState({ userData: data, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  }
  fillData(event) {
    if (event.keyCode === 32) {
      this.generateRandom();
    }
  }
  generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * this.state.userData.length);
    this.setState({ randomIndex });
  };

  render() {
    const { userData, error, isLoading, randomIndex } = this.state;
    const randomUser = userData[randomIndex];

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Oops something went wrong</div>;
    }

    return (
      <div className="homework3">
        <NameHeader name={randomUser.name} surname={randomUser.surname}></NameHeader>
        <PhotoContainer photo={randomUser.photo}></PhotoContainer>
        <List {...randomUser}></List>
      </div>
    );
  }
}
export default Homework3;
