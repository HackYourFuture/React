import React from 'react';
import { observer, inject } from 'mobx-react'

//Animation

// Component
import TodosItem from './TodosItem';


@inject('TodoStore')
@observer
export default class TodosList extends React.Component {

	render() {
		return (
			<div>
				<TodosItem />
			</div>
		)
	}
}

