import React, { Fragment } from 'react';
import DynamicList from './components/DynamicList';
import StaticList from './components/StaticList';

const App = () => (
  <Fragment>
    <DynamicList title="Dynamic Todo List" />
    <StaticList title="Static Todo List" />
  </Fragment>
);

export default App;
