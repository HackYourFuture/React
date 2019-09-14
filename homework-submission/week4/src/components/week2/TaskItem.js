import React from 'react';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Delete,
  CheckCircle,
  FiberManualRecordOutlined
} from '@material-ui/icons';

export default ({ task, onRemove, onToggleMarked }) => (
  <ListItem
    style={{ cursor: 'pointer' }}
    onClick={() => onToggleMarked(task.id)}
    tabIndex="0">
    <ListItemIcon>
      {task.done ? (
        <CheckCircle color="primary" />
      ) : (
        <FiberManualRecordOutlined />
      )}
    </ListItemIcon>
    <ListItemText
      style={task.done ? { textDecoration: 'line-through' } : {}}
      primary={task.description}
      secondary={task.deadline}
    />
    <ListItemSecondaryAction>
      <IconButton onClick={() => onRemove(task.id)}>
        <Delete color="error" />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
