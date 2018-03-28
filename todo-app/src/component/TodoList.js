import React from 'react';
import { observer, inject } from 'mobx-react'

// Component
import TodosItem from './TodosItem';

@inject('TodoStore')
@observer
export default class TodosList extends React.Component {

	render() {
		const { todos,
			todoEditingID,
			toggleDone,
			DeleteTodoItem,
			toggleEdit,
		} = this.props.TodoStore;

		return (
			<ul className="todosItem">
				{
					todos.map(todo => (
							<TodosItem
							key={todo._id}
							todo={todo}
							toggleDone={toggleDone}
							DeleteTodoItem={DeleteTodoItem}
							toggleEdit={toggleEdit}
							todoEditingID={todoEditingID}
							/>
						))
				}
			</ul>
		);
	}
}
