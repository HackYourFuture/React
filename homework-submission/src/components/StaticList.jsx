import React from 'react';
import ListTitle from './ListTitle';
import TodoItem from './TodoItem';
import { staticList } from '../todoLists';

const StaticList = ({ title }) => (
  <div className="container mx-auto">
    <ListTitle text={title} />
    <div className="box m-4 w-2/3 ">
      <ul className="shadow-lg rounded-lg overflow-hidden">
        {staticList.map((todo, i) => {
          const [description, deadline] = todo.split(',');
          return <TodoItem key={`todo-${i}`} description={description} deadline={deadline} />;
        })}
      </ul>
    </div>
  </div>
);

export default StaticList;
