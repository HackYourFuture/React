import React, { Fragment } from 'react';
import TodoItem from '../TodoItem';
import { staticList } from '../../todoList';
import Title from '../Title';

const StaticList = ({ title }) => (
  <Fragment>
    <Title title={title} />
    <div className="flex container mx-auto justify-center">
      <div className="box m-4 w-2/3 ">
        <ul className="shadow-lg rounded-lg overflow-hidden">
          {staticList.map((todo, i) => {
            const [description, deadline] = todo.split(',');
            return <TodoItem key={`todo-${i}`} description={description} deadline={deadline} />;
          })}
        </ul>
      </div>
    </div>
  </Fragment>
);

export default StaticList;
