import React from 'react';
import './Users.css';
import ErrorHandler from '../Error/Error';
import UsersList from '../UsersList/UsersList';

const Users = ({ data, error }) => (
  <React.Fragment>
    <h2 className="users-header">Online users</h2>
    {error ? <ErrorHandler error={error} /> : <UsersList data={data} />}
  </React.Fragment>
);

export default Users;
