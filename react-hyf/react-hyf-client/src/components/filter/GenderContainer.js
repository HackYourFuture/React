import React, { Component } from 'react';
import { IconRandom, IconMale, IconFemale } from '../Icons';

class GenderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  setFilter(gender) {
    this.setState({ selected: gender });
    this.props.onGenderSelect(gender);
  }

  isActive(value) {
    return value === this.state.selected ? ' active' : '';
  }

  render() {
    return (
      <div className="gender">
        <button
          id="random"
          className={`gender__button ${this.isActive('random')}`}
          onClick={e => this.setFilter(e.target.id)}>
          <IconRandom />
        </button>
        <button
          id="male"
          className={`gender__button ${this.isActive('male')}`}
          onClick={e => this.setFilter(e.target.id)}>
          <IconMale />
        </button>
        <button
          id="female"
          className={`gender__button ${this.isActive('female')}`}
          onClick={e => this.setFilter(e.target.id)}>
          <IconFemale />
        </button>
      </div>
    );
  }
}

export default GenderContainer;
