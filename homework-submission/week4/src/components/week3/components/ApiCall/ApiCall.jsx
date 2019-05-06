import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #8fc06b;
  color: #fff;
  cursor: default;
  height: 94.9vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  margin: 0 auto;
  padding: 10px 15px;
  text-align: left;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.6rem;
  font-size: 90%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const StyledH1 = styled.h1`
  margin-top: 3%;
  margin: 0 auto;
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 600;
  line-height: 100%;
  display: table;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  :hover {
    cursor: ${props => (props.text ? 'default' : 'none')};
    background: ${props => (props.text ? 'rgba(255, 255, 255, 0.2)' : 'none')};
  }
`;

const StyledLi = styled.li`
  list-style: none;
  font-size: 14px;
`;

const StyledSpan = styled.span`
  :hover {
    cursor: ${props => (props.text ? 'default' : 'none')};
    background: ${props => (props.text ? 'rgba(255, 255, 255, 0.2)' : 'none')};
  }
  margin: 5px;
  font-size: 16px;
  font-weight: 300;
`;

class ApiCall extends React.Component {
  render() {
    const data = this.props.data;
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    const date = new Date(+new Date(1989, 1, 1) - Math.floor(Math.random() * 10000000000));
    return (
      <StyledDiv>
        <div>
          {
            data.map(item => {
              return (
                <div key={item.surname}>
                  <StyledH1 text>
                    {item.name} {item.surname}
                  </StyledH1>
                  <div>
                    <StyledUl>
                      <StyledLi>
                        <span role="img" aria-label="person-emoji">
                          👤
                        </span>
                        <StyledSpan text>{item.gender}</StyledSpan>
                      </StyledLi>
                      <StyledLi>
                        <span role="img" aria-label="world-emoji">
                          🌐
                        </span>
                        <StyledSpan text>{item.region}</StyledSpan>
                      </StyledLi>
                      <StyledLi>
                        <span role="img" aria-label="phone-emoji">
                          📞
                        </span>
                        <StyledSpan text>{randomNumber}</StyledSpan>
                      </StyledLi>
                      <StyledLi>
                        <span role="img" aria-label="birthday cake-emoji">
                          🎂
                        </span>
                        <StyledSpan text>{date.toISOString().slice(0, 10)}</StyledSpan>
                      </StyledLi>
                      <StyledLi>
                        <span role="img" aria-label="mail-emoji">
                          ✉️
                        </span>
                        <StyledSpan text>
                          {item.name}-{item.surname}@example.com
                        </StyledSpan>
                      </StyledLi>
                      <StyledLi>
                        <span role="img" aria-label="key-emoji">
                          🔑
                        </span>
                        <StyledSpan text>
                          {item.name}-{date.toISOString().slice(2, 4)}
                        </StyledSpan>
                      </StyledLi>
                    </StyledUl>
                  </div>
                </div>
              );
            })[Math.floor(Math.random() * 10)]
          }
        </div>
      </StyledDiv>
    );
  }
}

export default ApiCall;
