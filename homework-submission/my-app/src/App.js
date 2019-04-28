import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Link, withRouter, Switch } from 'react-router-dom';

const Home = () => {
  return <div> Content of Home</div>;
};
function About() {
  return <div> this is about</div>;
}

const TopicList = () => {
  return <div> this is a Topic</div>;
};
function Login() {
  return <div>Login in</div>;
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  buttonClick = () => {
    this.setState({ loggedIn: true });

    this.props.history.push('/Login');
  };
  render() {
    console.log(this.props.history);
    return (
      <div className="App">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/TopicList">TopicList</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
            <div>
              <button onClick={this.buttonClick}>Click to go to login</button>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route
                exact
                path="/TopicList"
                render={() => (this.state.loggedIn ? <TopicList /> : <Redirect to="/Login" />)}
              />

              <Route path="/Login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
