import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation">
      <span>eCOMMERCE</span>
      <div className="links">
        <a href="/">Products</a>
        <a href="/favorites">Favorites</a>
      </div>
    </div>
  );
};

export default NavigationBar;
