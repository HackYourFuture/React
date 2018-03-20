import React from 'react';
import { observer } from "mobx-react";

//Animation
import Fade from 'react-reveal/Fade';

// Component
import TodosItem from './TodosItem';

@observer
export default class TodosList extends React.Component {

	render() {
		const {
			todos,
			handelCheck,
			handelDeleteItem,
		} = this.props

		const todoList = todos.map((item) => {
			return (
				<Fade key={item.id} collapse bottom>
					<li className="todoList"  >
						<TodosItem todo={item}
							isDone={item.done}
							handelCheck={handelCheck}
							handelDeleteItem={handelDeleteItem}
						/>
					</li>
				</Fade>
			)
		})
		return (
			<ul className="todosItem">
				{todoList}
			</ul>
		);
	}
}

