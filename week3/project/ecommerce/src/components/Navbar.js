import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
