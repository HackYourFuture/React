import React, { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <h4>
          Unfortunately we are done with <span className="badge badge-primary">React</span>.
        </h4>
        <hr className="my-4"></hr>
        <p>This is what we have learned so far:</p>
        <div>
          <ul className="list-group">
            <li className="list-group-item">React Philosophy, Components, JSX, Props</li>
            <li className="list-group-item">State, Unidirectional data flow, Forms</li>
            <li className="list-group-item">
              Lifecycle Hooks, API calls, Connecting Node With React
            </li>
            <li className="list-group-item">
              Client-side Routing, Server-side vs. Client-side Routing, React-Router
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
