import React from 'react';

import TodoItem from './TodoItem';
import {
  List,
  Card,
  CardHeader,
  CardContent,
  Box,
  colors
} from '@material-ui/core';

const DynamicComponent = ({ array }) => {
  return (
    <Card>
      <Box bgcolor={colors.lime[100]}>
        <CardContent>
          <Box textAlign="center" padding="0">
            <CardHeader title="Dynamic List" />
          </Box>
          <List>
            {array.map(item => (
              <TodoItem
                key={item.id}
                description={item.description}
                deadline={item.deadline}
                done={item.done}
              />
            ))}
          </List>
        </CardContent>
      </Box>
    </Card>
  );
};

export default DynamicComponent;
