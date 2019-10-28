import { useState } from 'react';

export default (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};
