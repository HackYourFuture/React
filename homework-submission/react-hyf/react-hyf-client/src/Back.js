import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Back = () => {
  return (
    <div>
      <Link to='/'>
        <Button color='secondary' block>
          Back
        </Button>
      </Link>
    </div>
  );
};

export default Back;
