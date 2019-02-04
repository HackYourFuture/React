import React from 'react';
// import GetInfo from '../services/GetInfo';

class HomeScreen extends React.Component {
  render() {
    return this.props.mainInfo.map(info => {
      return (
        <div className="items" key={info.id}>
          <img src={info.photoUrl} alt="" />
          <p>{info.description}</p>
        </div>
      );
    });
  }
}
export default HomeScreen;
