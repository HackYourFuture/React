import React, { useContext } from 'react';
import './Navbar.css';
import NavbarButton from './NavbarButton';
import { NavContext } from '../contexts/UserContext';
import { randomURL } from '../contexts/UserContext';

const Navbar = () => {
  const [state, dispatch] = useContext(NavContext);

  const handleClick = e => {
    const targetClass = e.target.classList;
    if (targetClass.contains('fa-mars')) {
      dispatch({ type: 'SELECT', gender: 'male', url: randomURL + '&gender=male' });
    }
    if (targetClass.contains('fa-venus')) {
      dispatch({ type: 'SELECT', gender: 'female', url: randomURL + '&gender=female' });
    }
    if (targetClass.contains('fa-venus-mars')) {
      dispatch({ type: 'SELECT', gender: 'random', url: randomURL });
    }
  };
  return (
    <div className="Navbar" onClick={handleClick}>
      <NavbarButton class={`fas fa-venus-mars ${state[0] === 'random' && 'active'}`} />
      <NavbarButton class={`fas fa-mars ${state[0] === 'male' && 'active'}`} />
      <NavbarButton class={`fas fa-venus ${state[0] === 'female' && 'active'}`} />
    </div>
  );
};

export default Navbar;
