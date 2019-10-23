import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';

function NavBarPAge() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="font-italic text-bold text-danger">
        Abdullah
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/week1">Week1</Nav.Link>
          <Nav.Link href="/week2">Week2</Nav.Link>
          <Nav.Link href="/week3">Week3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarPAge;
