import React from 'react';

import TodoItem from './TodoItem';
import {
  List,
  Card,
  CardContent,
  CardHeader,
  Box,
  colors
} from '@material-ui/core';

export default () => (
  <Card>
    <Box bgcolor={colors.lightBlue[50]}>
      <CardContent>
        <Box textAlign="center" padding="0">
          <CardHeader title="Static List" />
        </Box>
        <List>
          <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </List>
      </CardContent>
    </Box>
  </Card>
);
