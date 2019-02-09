

import React from 'react';

const Login = props => {
  return (
    <form onSubmit={props.onLogin} className="login-form">
      <input type="text" name="userName" required />
      <input type="submit" value="Login" />
    </form>
  );
}
export default Login;