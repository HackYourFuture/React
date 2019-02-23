'use strict';

try {
  const ToDoItem = ({ description, deadline, done }) => {
    return (
      <li className={done ? 'done' : 'none'}>
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

      const ToDoListDynamic = () =>
        jsonResponse.map(item => (
          <ul>
            <ToDoItem description={item.description} deadline={item.deadline} done={item.done} />
          </ul>
        ));

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

  // The goal of the component in this part is to create a dynamic to-do list with items from the JSON file .

  class ToDoStatic extends React.Component {
    render() {
      return <ToDoListStatic />;
    }
  }

  console.log('The local host ref is: ', window.location.href);
} catch (error) {
  console.error('Error: ', error);
}
