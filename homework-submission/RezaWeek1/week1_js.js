'use strict';

try {
  const ToDoItem = ({ description, deadline, done }) => {
    const color = done ? 'red' : 'none';
    // const decoration = {
    //   'text-decoration': 'line-through',
    // };
    return (
      <li style={{ color }} className="item">
        {description}, {deadline}, {done}
      </li>
    );
  };
  // The goal of this component is to insert a list item in the to-do list.

  const ToDoListStatic = () => (
    <div className="list">
      <p>This is a static todo list:</p>
      <ul>
        {' '}
        <ToDoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ToDoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ToDoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />{' '}
      </ul>
    </div>
  );
  // The goal of this component is to create a static to-do list with items from previous component .

  fetch('todos.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      console.log(jsonResponse);
      const ToDoListDynamic = () => (
        <div className="list">
          <p>This is a dynamic todo list:</p>
          <ul>
            <ToDoItem
              description={jsonResponse[0].description}
              deadline={jsonResponse[0].deadline}
              done={jsonResponse[0].done}
            />
            <ToDoItem
              description={jsonResponse[1].description}
              deadline={jsonResponse[1].deadline}
              done={jsonResponse[1].done}
            />
            <ToDoItem
              description={jsonResponse[2].description}
              deadline={jsonResponse[2].deadline}
              done={jsonResponse[2].done}
            />
          </ul>
        </div>
      );
      // {jsonResponse.forEach(function(element) {
      //   <ToDoItem description={element.description} deadline={element.deadline} />;
      //   <li> hi </li>;
      //   console.log('hi');
      //   // element[0].description, ',', element[0].deadline;
      // })}
      class ToDoSDynamic extends React.Component {
        render() {
          return <ToDoListDynamic />;
        }
      }
      ReactDOM.render(
        <div>
          <ToDoStatic />
          <ToDoSDynamic />
        </div>,
        document.getElementById('toDo'),
      );
    });

  // The goal of this component is to create a dynamic to-do list with items from previous component .

  class ToDoStatic extends React.Component {
    render() {
      return <ToDoListStatic />;
    }
  }

  console.log('The local host ref is: ', window.location.href);
} catch (error) {
  console.error('Error: ', error);
}
