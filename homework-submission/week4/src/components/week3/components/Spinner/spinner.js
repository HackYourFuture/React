import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDiv1 = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingspin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledDiv2 = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: 2.5em;
  height: 2.5em;
  border: 0.4em solid transparent;
  border-color: #eee;
  border-top-color: #3e67ec;
  border-radius: 50%;
  animation: ${loadingspin} 1s linear infinite;
`;

class Spinner extends React.Component {
  render() {
    return (
      <StyledDiv1>
        <StyledDiv2 />
      </StyledDiv1>
    );
  }
}

export default Spinner;
