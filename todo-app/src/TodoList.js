import React from 'react';
import TodoItem from './TodoItem';

const todoItems = [{
        id: '1',
        description: "Get out of bed.",
        deadline: new Date("12-03-2015")

    },
    {
        id: '2',
        description: "Brush teeth.",
        deadline: new Date("12-03-2015")

    },
    {
        id: '3',
        description: "Eat breakfast.",
        deadline: new Date("12-03-2015")

    }
];

export default class TodoList extends React.Component {

    render() {
        return ( 
            <div className="TodoList">
                <ul>
                    {todoItems.map((todoItem, i) => (
                        <React.Fragment key={todoItem.id}>
                            <TodoItem todoItem = {todoItem}/>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }

    // renderList() {
    //     return (
    //       <ul>
    //         {TodoItem.map((todoItem,index) => (
    //           <React.Fragment key={todoItem.id}>
    //                <TodoItem todoItem={todoItem}/>
    //             </React.Fragment>
    //         ))}
    //       </ul>
    //     )
    //   }
}


// export default class CommentList extends React.Component {
    
//       render() {
//         return (
//           <div className="CommentList">
//             {this.renderList()}
//           </div>
//         )
//       }
    
//       renderList() {
//         return (
//           <ul>
//             {comments.map((comment, index) => (
//               <React.Fragment key={comment.id}>
//                 {index > 0 && <li className="CommentList-separator"/>}
//                 <Comment comment={comment}/>
//               </React.Fragment>
//             ))}
//           </ul>
//         )
//       }
    
//     }