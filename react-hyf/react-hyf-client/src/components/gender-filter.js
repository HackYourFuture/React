import React from 'react';
import GenderFilterButton from './sub-components/gender-filter-button';
import './styles/gender-filter.css';

const maleIcon =
  'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/gender-male-circle-blue-2-512.png';
const femaleIcon =
  'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/gender-female-circle-pink-3-512.png';
const randomIcon = 'https://cdn2.iconfinder.com/data/icons/ecommerce-2-7/65/85-512.png';

class GenderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { female: 'passive', male: 'passive', random: 'active' };
  }

  changeGenderAndActiveStatus = async filter => {
    if (filter === 'female') {
      this.setState({ male: 'passive', female: 'active', random: 'passive' });
    } else if (filter === 'male') {
      this.setState({ male: 'active', female: 'passive', random: 'passive' });
    } else if (filter === 'random') {
      this.setState({ male: 'passive', female: 'passive', random: 'active' });
    }
    const { onPress } = this.props;
    onPress(filter);
  };

  render() {
    return (
      <div className="filters">
        <GenderFilterButton
          path={maleIcon}
          onPress={() => this.changeGenderAndActiveStatus('male')}
          activeStatus={this.state.male}
        />
        <GenderFilterButton
          path={femaleIcon}
          onPress={() => this.changeGenderAndActiveStatus('female')}
          activeStatus={this.state.female}
        />
        <GenderFilterButton
          path={randomIcon}
          onPress={() => this.changeGenderAndActiveStatus('random')}
          activeStatus={this.state.random}
        />
      </div>
    );
  }
}

export default GenderFilter;
