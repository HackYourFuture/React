import React from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-primary ">
          <Container>
            <NavbarBrand>React homework</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto">
                <NavItem>
                  <Router>
                    <ul className="navbar-nav mr-auto">
                      <li>
                        <Link to={'/'} className="nav-link">
                          {' '}
                          Home{' '}
                        </Link>
                      </li>
                      <li>
                        <Link to={'/week1'} className="nav-link">
                          week1
                        </Link>
                      </li>
                      <li>
                        <Link to={'/week2'} className="nav-link">
                          week2
                        </Link>
                      </li>
                      <li>
                        <Link to={'/week3'} className="nav-link">
                          week3
                        </Link>
                      </li>
                      <li>
                        <NavLink href="https://github.com/alaashhadat" className="nav-link">
                          Github
                        </NavLink>
                      </li>
                    </ul>
                    <hr />
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/week1" component={Week1} />
                      <Route path="/week2" component={Week2} />
                      <Route path="/week3" component={Week3} />
                    </Switch>
                  </Router>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default AppNavbar;
