//this gonna be a functional component because we don't need state inside this one we registered the state over App.js and we pass those down into todos.js component
import React from 'react';
//we can access todos inside here so we need to accept props, so an object represent the props, and we grabbing todos of that props object
//because we getting a list here we need to map through that list and return some jsx for each individual item in that list and then output that list, we do that before return statement because we like to do it outside the return statement to keep everything separate
const Todos = ({ todos }) => {
  //we receive todos as a prop here, we want length to see if we have not todo show a message and if we have todo then we want to show todo list
  // so this gonna to be a ternary operator to check but its true or false, false if its zero and true if we have some todos
  const todoList = todos.length ? (
    todos.map(todo => {
      //we need to cycle trough todos and return some JSX for each one, so inside return we have a div with a class of collection-item(because its gonna sit inside the collection , and this is another materialize CSS class to just style list a little bit better , inside span tag we need our actual todos>> because we have a property called "content" on each todo)
      // we need output id as a key because we need a unique key for each
      return (
        <div className="collection-item" key={todo.id}>
          <ul>
            {todo.content} : {todo.deadline}
          </ul>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );

  return (
    //class names, there is a materialized CSS class and could style nicely
    //also we have to could pass todos from App component to this component
    <div className="todos collection">{todoList}</div>
  );
};

export default Todos;
//we have to export the component
