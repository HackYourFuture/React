import React, { useState } from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CheckCircle, FiberManualRecordOutlined } from '@material-ui/icons';

const TodoItem = props => {
  const [state, setState] = useState({ done: props.done });

  const toggleDone = () => setState({ done: !state.done });

  const { description, deadline } = props;

  return (
    <ListItem style={{ cursor: 'pointer' }} onClick={toggleDone} tabIndex="0">
      <ListItemIcon>
        {state.done ? <CheckCircle /> : <FiberManualRecordOutlined />}
      </ListItemIcon>
      <ListItemText
        style={state.done ? { textDecoration: 'line-through' } : {}}
        primary={description}
        secondary={deadline}
      />
    </ListItem>
  );
};

export default TodoItem;
