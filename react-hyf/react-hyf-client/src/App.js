import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeworkRouter from './Router/HomeworkRouter';
import NotFound from './Router/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeworkRouter} />
          <Route path="/week1" component={HomeworkRouter} />
          <Route path="/week2" component={HomeworkRouter} />
          <Route path="/week3" component={HomeworkRouter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
