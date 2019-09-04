import React from 'react';
import Icon from './Icon';
import { StyledListItem, StyledText, StyledButton } from '../styled';

const TaskItem = ({ task, onRemove, onToggleMarked }) => (
  <StyledListItem>
    <div
      onClick={() => onToggleMarked(task.id)}
      className={task.done ? 'done' : ''}>
      {task.done && <Icon>check</Icon>}
      <StyledText bold>{task.description}</StyledText>
      <StyledText small>{task.deadline}</StyledText>
    </div>
    <div>
      <StyledButton inverse theme='secondary' onClick={() => onRemove(task.id)}>
        <Icon>delete</Icon>
      </StyledButton>
    </div>
  </StyledListItem>
);

export default TaskItem;
