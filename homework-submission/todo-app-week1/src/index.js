import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const INIT_ITEMS = [
	{
		name: 'Todo item 1',
		color: '',
		checked: false,
		edit: false,
		id: 1
	},
	{
		name: 'Todo item 2',
		color: 'pink',
		checked: false,
		edit: false,
		id: 2
	},
	{
		name: 'Todo item 3',
		color: 'purple',
		checked: false,
		edit: false,
		id: 3
	}
];

const COLORS = [
	{
		name: 'red',
		checked: true,
		id: 1,
	},
	{
		name: 'pink',
		checked: false,
		id: 2,
	},
	{
		name: 'purple',
		checked: false,
		id: 3,
	},
	{
		name: 'blue',
		checked: false,
		id: 4,
	},
	{
		name: 'green',
		checked: false,
		id: 5,
	},
	{
		name: 'yellow',
		checked: false,
		id: 6,
	}
];

ReactDOM.render(<App initialItems={INIT_ITEMS} colors={COLORS} />, document.getElementById('root'));