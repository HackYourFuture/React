import React from 'react';
import Week1 from '../week1-homework/week1';
import Week2 from '../week2-homework/week2';
import Week3 from '../week3-homework/week3';

import './style.css';
const Container = props => {
  const weekId = +props.match.params.id;
  if (weekId === 1) {
    return <Week1 />;
  } else if (weekId === 2) {
    return <Week2 />;
  } else if (weekId === 3) {
    return <Week3 />;
  }
};

export default Container;
