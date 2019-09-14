import React from 'react';
import { Link } from 'react-router-dom';
const Public = () => {
  return (
    <div>
      It's public page. Go back <Link to="/">Home</Link>
    </div>
  );
};

export default Public;
