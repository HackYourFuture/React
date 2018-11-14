import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Calender from "./Components/Calender";
import { inject, observer } from 'mobx-react';

@inject("BooksStore")
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const todo = this.newBook.value; 
    this.props.BooksStore.addBook(todo);
    this.newBook.value = "";
  };

  renderTodos = () => {
    if (this.props.BooksStore.Todos.length === 0)
      return <p className="noItems">No items...</p>;
    const textStyle = {
      textDecoration: "line-through",
      backgroundColor: "#0455d8"
    };

    return (
      <ul>
        {this.props.BooksStore.Todos.map((todo, id) => {
          return (
            <li key={id}>
              <input
                checked={todo.done}
                type="checkbox"
                onChange={() => this.isTaskDone(todo)}
              />
              <span style={todo.done ? textStyle : null}>
                {todo.description} , {todo.deadline}
              </span>
              <button onClick={event => this.deleteTodo(id)} className="remove">
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div className="App">
        <Header />
    <div className='data'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Description : <input placeholder="Type a description..." type="text" ref={input => (this.newBook = input)} />{" "}
          </label>
          <label>
            Deadline <input type="date" />{" "}
          </label>
          {/* <button> add</button> */}
          <input type="submit" value="Add" className="add" />
        </form>

        <div className="items">{this.renderTodos()}</div>
        <Calender />
        </div>
      </div>;
  }
}

export default App;

// ============================


// import React, { Component } from 'react';
// import './App.css';
// import Header from './Components/Header';
// import Calender from "./Components/Calender";
// import { inject, observer } from 'mobx-react';

// @inject('BooksStore')
// @observer

// class App extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     const book = this.newBook.value;
//     const newDat = this.newDate.value;
//     this.props.BooksStore.addBook(book);
//     this.props.BooksStore.addBook(book);

//     this.newDate.value = '';
//     this.newBook.value = '';
//   };

//   render() {
//     const { BooksStore } = this.props;

//     return <div className="App">
//       <Header />
//       <Calender />

//       <div>
//         <h2>You have {BooksStore.numberOfBooks} books</h2>

//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Enter Description :
//               <input placeholder="Type a description..." type="text" ref={input => (this.newBook = input)} />
//           </label>

//           <label>
//             Deadline
//             <input type="date" ref={input => (this.newDate = input)} />
//           </label>
//           <button> Add Book</button>
//         </form>

//         <ul>
//           {this.state.Todos.map((todo, id) => {
//             return (
//               <li key={id}>
//                 <input
//                   checked={todo.done}
//                   type='checkbox'
//                   onChange={() => this.isTaskDone(todo)}
//                 />
//                 <span style={todo.done ? textStyle : null}>
//                   {todo.description} , {todo.deadline}
//                 </span>
//                 <button onClick={event => this.deleteTodo(id)} className='remove'>
//                   Remove
//               </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>;
//   }
// }

// export default App;
