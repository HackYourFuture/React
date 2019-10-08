import uuid from 'uuid';
export const todoList = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2019-09-11',
    done: false,
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2019-09-10',
    done: false,
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2019-09-09',
    done: false,
  },
];

export const initialState = {
  id: uuid.v4(),
  description: '',
  deadline: '',
  done: false,
};
