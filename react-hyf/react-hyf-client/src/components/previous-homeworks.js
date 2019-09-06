import React from 'react';
import PreviousHomework2 from './previous-homework2';
import PreviousHomework1 from './previous-homework1';
import './styles/previous-homeworks.css';

class PreviousHomeworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'none', text: 'SHOW PREVIOUS HOMEWORK' };
  }
  changeClass = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'block',
        text: 'HIDE PREVIOUS HOMEWORKS',
      });
    } else {
      this.setState({ display: 'none', text: 'SHOW PREVIOUS HOMEWORKS' });
    }
  };
  render() {
    const { display, text } = this.state;
    return (
      <div>
        <div className={display}>
          <PreviousHomework1 />
          <PreviousHomework2 />
        </div>
        <button className="show-hide-button" onClick={this.changeClass}>
          {text}
        </button>
      </div>
    );
  }
}

export default PreviousHomeworks;
