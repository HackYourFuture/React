import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation">
      <span>eCOMMERCE</span>
      <div className="links">
        <Link to="/">Products</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
