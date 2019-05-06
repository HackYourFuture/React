import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import StaticTodoList from './week1/App';
import DynamicTodList from './week2/App';
import ApiCall from './week3/App';

const StyledH3 = styled.h3`
  margin-top: 1rem;
  height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3rem;
`;

const RouterContainer = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <StyledH3>TO SEE THE HOMEWORKS PLEASE CLICK THE LINKS IN NAVBAR</StyledH3>}
        />
        <Route exact path="/static-todo-list" component={StaticTodoList} />
        <Route exact path="/dynamic-todo-list" component={DynamicTodList} />
        <Route exact path="/api-call" component={ApiCall} />
      </Switch>
    </Router>
  );
};

export default RouterContainer;
