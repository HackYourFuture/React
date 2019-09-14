import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Welcome from '../components/Welcome';
import Login from '../components/Login';

const Home = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {user.authenticated ? (
        <Welcome user={user} logout={logout} />
      ) : (
        <Login user={user} login={login} />
      )}
    </>
  );
};

export default Home;
