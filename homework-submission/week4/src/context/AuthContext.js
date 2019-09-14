import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [user, setAuth] = useState({
    username: 'hyf',
    password: 'hyf',
    authenticated: false
  });

  function login() {
    setAuth({ ...user, authenticated: true });
  }

  function logout() {
    setAuth({ ...user, authenticated: false });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
