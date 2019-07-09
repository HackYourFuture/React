
class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todos : [
                {
                    "id" : 1,
                    "description" : "Get out of bed",
                    "deadline" : "2017-09-11",
                    "done" : true
                },
                {
                    "id" : 2,
                    "description" : "Brush teeth",
                    "deadline" : "2017-09-10",
                    "done" : false
                },
                {
                    "id" : 3,
                    "description" : "Eat breakfast",
                    "deadline" : "2017-09-09",
                    "done" : false
                },
                {
                    "description" : "add some damn css :)",
                    "done" : false
                },
            ]
            
        };
    }

    createToDo = () => {
        const todos = this.state.todos;
        todos.push({"description":"seriously, add some css! :)"});
        this.setState({todos:todos});    
    }
    removeToDo = () => {
        const todos = this.state.todos;
        todos.pop();
        this.setState({todos:todos});    
    }  
    submitFormHandler = event => {
        event.preventDefault();
        const newItem = this.refs.todo.value
        const todos = this.state.todos;
        todos.push({"description":newItem,"done":false});
        this.setState({todos:todos});   
    }

    markAsDone = () => {
        event.preventDefault();
        const markasdoneIndex = this.refs.markasdone.value-1
        const todos = this.state.todos;
        todos[markasdoneIndex].done = true;
        this.setState({todos:todos});
    }
        
    render(){
        const todos = this.state.todos;
        return (
            <div>
            <ol>
            {todos.map((item,index)=>
                {return <li>
                <pre id={index} ref={index} style={{textDecoration: item.done ? 'line-through' : 'none'}} 
                onClick={()=>{}}>{item.description}</pre></li>})}
            </ol>

            <button onClick={()=> {this.createToDo()}}>Add Demo Todo</button>
            <button onClick={()=> {this.removeToDo()}}>Remove Last Item</button>
            <p>----------------------------------------------</p>
            <form onSubmit={this.submitFormHandler}>
            <pre>Enter the description of the new todo item you want to add:</pre><input type="text" name="todo" ref="todo"/>
            <input type="submit" value="Submit"/>
            </form>
            <form onSubmit={this.markAsDone}>
            <pre>Enter the index of todo item you want to mark as done:</pre><input type="text" name="markasdone" ref="markasdone"/>
            <input type="submit" value="Mark As Done"/>
            </form>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoForm/>,
    document.getElementById("root")
)
