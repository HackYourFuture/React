// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav className="d-flex justify-content-between my-3 align-items-center border-bottom">
//       <Link to="/">
//         <div className="d-flex">
//           <span>
//             <i className="fa fa-home"></i>
//           </span>
//           <h5 className="ml-2 text-danger font-italic">Abdullah</h5>
//         </div>
//       </Link>
//       <ul className="d-flex justify-content-between">
//         <li className="list-group-item border-0">
//           <Link to="/week1">Week1</Link>
//         </li>
//         <li className="list-group-item border-0">
//           <Link to="/week2">Week2</Link>
//         </li>
//         <li className="list-group-item border-0">
//           <Link to="/week3">Week3</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

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
