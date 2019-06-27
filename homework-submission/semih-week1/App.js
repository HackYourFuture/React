#this function creates a <li> tag and adds description and deadline of the todo item.
const TodoItem = (props) => {
    return (
            <li className={props.className}>
                {props.description} - {props.deadline}
            </li>
    )
}

#this function creates <ul> tags for both static and dynamic todo lists.
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
                <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017"/>
                <TodoItem description="Brush Teeth" deadline="Thu Sep 14 2017"/>
                <TodoItem description="Eat Breakfast" deadline="Fri Sep 15 2017"/>
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
