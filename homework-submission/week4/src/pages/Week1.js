import React from 'react';
import { Grid } from '@material-ui/core';
import StaticComponent from '../components/week1/StaticComponent';
import DynamicComponent from '../components/week1/DynamicComponent';

const staticList = [
  'Get out of bed, Wed Sep 13 2017',
  'Brush teeth, Thu Sep 14 2017',
  'Eat breakfast, Fri Sep 15 2017'
];

const dynamicList = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

const Week1 = () => (
  <Grid
    style={{ height: '100%' }}
    justify="center"
    alignItems="center"
    container
    spacing={2}>
    <Grid item md={4} sm={6} xs={12}>
      <StaticComponent array={staticList} header="Static Todo List" />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DynamicComponent array={dynamicList} header="Dynamic Todo List" />
    </Grid>
  </Grid>
);

export default Week1;
