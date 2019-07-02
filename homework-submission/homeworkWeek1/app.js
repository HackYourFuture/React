const TodoList = (props) => {
    return (
        <li>
            {props.id} {props.description}, {props.deadline} {props.done} 
        </li>
    )
}

const StaticList = () => {
    return (
        <div>
            <ul>
               <TodoList description="Get out of bed" deadline="Wed Sep 13 2017" />
               <TodoList description="Brush teeth" deadline="Thu Sep 14 2017" />
               <TodoList description="Eat breakfast" deadline="Fri Sep 15 2017"/>
            </ul>
        </div>
    )
}

const Todos = [
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

const DynamicList = () => {
    return (
        <div>
            <ul>
               {Todos.map(({id, description, deadline, done}) => (
                <TodoList key={id} description={description} 
                deadline={deadline} 
                done={done}
                />
                ))
               } 
            </ul>   
        </div>
    )
}

class App extends React.Component {
    name = "Todos"
    render () {
        return (
            <div>
                <h1>React {this.name}</h1>
                <StaticList />    
                <DynamicList />
            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('thisIsWhereReactIsInjected')
);