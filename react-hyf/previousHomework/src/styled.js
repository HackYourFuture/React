import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: {
      main: '#009688',
      dark: '#00675b',
      light: '#52c7b8'
    },
    secondary: {
      main: '#d50000',
      dark: '#9b0000',
      light: '#ff5131'
    },
    grey: {
      main: '#616161',
      dark: '#373737',
      light: '#8e8e8e'
    }
  },
  rounded: '.25rem'
};

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 3vw;
    background-color: ${theme.colors.primary.main};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6rem;
    color: ${theme.colors.grey.dark};
  }

  #root {
    display: flex;
    justify-content: center;
  }

  div,
  button,
  input {
    border-radius: ${theme.rounded && theme.rounded};
  }

  .done {
    text-decoration: line-through;
    color: ${theme.colors.grey.light};

    & i {
      float: left;
      margin-right: 10px;
      color: ${theme.colors.primary.main};
      transform: translateY(1rem);
    }
  }
`;

export const StyledContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 2rem rgba(0, 0, 0, 0.3);
  width: fit-content;
  margin: auto;
`;

export const StyledButton = styled.button`
  background-color: ${props =>
    props.inverse ? `#ffffff` : theme.colors[props.theme].main};
  outline: 0;
  border: 0;
  color: ${props => (props.inverse ? theme.colors.grey.main : `#ffffff`)};
  padding: 0.5rem;
  font-weight: 700;
  width: ${props => props.full && '100%;'};
  border: ${props =>
    props.border && `1px solid ${theme.colors[props.theme].main}`};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props =>
      `${props.inverse ? '#ffffff' : theme.colors[props.theme].dark}`};
    color: ${props =>
      `${props.inverse ? theme.colors[props.theme].light : '#ffffff'}`};
  }
`;

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 2px solid ${theme.colors.grey.light};
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;
  outline: none;
  font-size: 1.6rem;
`;
export const StyledText = styled.p`
  flex-grow: 1;
  font-weight: ${props => props.bold && '700'};
  font-size: ${props => props.small && '1.3rem'};
  cursor: pointer;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 2px solid ${theme.colors.grey.dark};

  & div:first-child {
    flex-grow: 1;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
  margin: 1rem 0;
`;

export const StyledBanner = styled.div`
  padding: 1rem;
  border: 2px solid ${props => theme.colors[props.theme].main};
  background-color: ${props => theme.colors[props.theme].light};
  color: ${props => theme.colors[props.theme].dark};
  text-align: center;
  ${theme.rounded && `border-radius: ${theme.rounded}`}
`;
