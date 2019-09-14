import React from 'react';
import { Icon } from '@iconify/react';
import genderMale from '@iconify/icons-mdi/gender-male';
import genderFemale from '@iconify/icons-mdi/gender-female';
import genderMaleFemale from '@iconify/icons-mdi/gender-male-female';
import { Fab } from '@material-ui/core';
import styled from 'styled-components';

const MyFab = styled(Fab)`
  margin-right: 1rem !important;

  & * {
    pointer-events: none;
  }

  & svg {
    width: 1.5em;
    height: 1.51em;
  }
`;

const GenderContainer = ({ gender, buttons, onGenderSelect }) => {
  const isActive = gnd => (gnd === gender ? ' active' : '');
  const [randomButton, maleButton, femaleButton] = buttons;
  return (
    <>
      <MyFab
        variant="round"
        size="small"
        aria-label="select random"
        color={isActive('random') ? 'primary' : 'inherit'}
        ref={randomButton}
        onClick={e => onGenderSelect('random')}>
        <Icon icon={genderMaleFemale} />
      </MyFab>
      <MyFab
        variant="round"
        size="small"
        aria-label="select male"
        color={isActive('male') ? 'primary' : 'inherit'}
        ref={maleButton}
        onClick={e => onGenderSelect('male')}>
        <Icon icon={genderMale} />
      </MyFab>
      <MyFab
        variant="round"
        size="small"
        aria-label="select female"
        color={isActive('female') ? 'primary' : 'inherit'}
        ref={femaleButton}
        onClick={e => onGenderSelect('female')}>
        <Icon icon={genderFemale} />
      </MyFab>
    </>
  );
};

export default GenderContainer;
