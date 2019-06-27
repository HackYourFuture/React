const TodoItem = (props) => {
    return (
            <li className={props.className}>
                {props.description} - {props.deadline}
            </li>
    )
}

const Todos = () => {
    const todoItems = [
        {
          id: 1,
          description: "Get out of bed",
          deadline: "2017-09-11",
          done: true
        },
        {
          id: 2,
          description: "Brush teeth",
          deadline: "2017-09-10",
          done: false
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadline: "2017-09-09",
          done: false
        }
      ];

    return (
        <div>
            <div>
                <h2>Static List</h2>
                <ul>
                <TodoItem description="todo 1" deadline="12.12.2019"/>
                <TodoItem description="todo 2" deadline="01.12.2019"/>
                <TodoItem description="todo 3" deadline="31.12.2019"/>
                </ul>
            </div>

            <div>
                <h2>Dynamic List</h2>
                <ul>
                {
                    todoItems.map(({id, description, deadline, done}) => 
                    (<TodoItem key={id} description={description} deadline={deadline} className={done ? "done" : "undone"}/>))
                }
                </ul>
            </div>
        </div>
    )
}

class App extends React.Component {
    render(){
        return <Todos/>
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
