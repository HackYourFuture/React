import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Home() {
  return (
    <div className='App'>
      <Link to='week1'>
        <Button outline color='danger' size='lg' block>
          Week 1
        </Button>
      </Link>
      <Link to='/week2'>
        <Button color='danger' size='lg' block>
          Week 2
        </Button>
      </Link>
      <Link to='/week3'>
        <Button outline color='danger' size='lg' block>
          Week 3
        </Button>
      </Link>
      <Link to='/update'>
        <Button outline color='danger' size='lg' block>
          Homework update
        </Button>
      </Link>
    </div>
  );
}

export default Home;
