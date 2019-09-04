import React from 'react';
import { IconRandom, IconMale, IconFemale } from '../Icons';

const GenderContainer = props => {
  const isActive = gender => (gender === props.gender ? ' active' : '');
  const [randomButton, maleButton, femaleButton] = props.buttons;
  return (
    <div className="gender">
      <button
        ref={randomButton}
        id="random"
        className={`gender__button ${isActive('random')}`}
        onClick={e => props.onGenderSelect(e.target.id)}>
        <IconRandom />
      </button>
      <button
        ref={maleButton}
        id="male"
        className={`gender__button ${isActive('male')}`}
        onClick={e => props.onGenderSelect(e.target.id)}>
        <IconMale />
      </button>
      <button
        ref={femaleButton}
        id="female"
        className={`gender__button ${isActive('female')}`}
        onClick={e => props.onGenderSelect(e.target.id)}>
        <IconFemale />
      </button>
    </div>
  );
};

export default GenderContainer;
