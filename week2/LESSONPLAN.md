# Lesson Plan Week 2

The purpose of this class is to teach the student about:

-   What is `state`?
-   How to make `HTTP Requests` within a React component
-   Working with `forms`

## Core concepts

## 1. What is state?

### Explanation

State is all the data in the application, that can change because of user interaction. It's defined using a special React function, called `useState`.

This `useState` function provides the state value, and a function that allows us to modify the state value.

All state values must be declared at the top function, ideally in the parent component.

Whenever we want to pass a state value down into a component, we assign it to a custom named `prop`. It can then be accessed as part of the `props` within that child component.

### Example

```jsx
const Counter = () => {
	// State value, state modifier, initial state
	const [count, setCount] = useState(0);

	// Handler to change state
	const handleClick = () => {
		setCount((prevState) => prevState + 1);
	};

	return (
		<div>
			<Count count={count} />
			<button onClick={handleClick}>+ 1</button>
		</div>
	);
};

const Count = ({ count }) => {
	return <p>Count is: {count}</p>;
};
```

### Exercise

Ask students to remake aforementioned by themselves.

### Essence

Having state allows our application to handle 'dynamic data': data that can change. Using the React defined `useState` function we can define and modify all pieces of state that need to change

## 2. Making HTTP requests within a React component

### Explanation

Making HTTP requests is an essential task of the frontend. Within React, we make these requests at specific points: (1) after a user action (like a button click), or (2) at a certain point in the component lifecycle.

### Example

```jsx
// 1. After a user action
const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();

		setUsers(users);
	};

	return (
		<div>
			{
				// Do something with users...
			}
			<button onClick={fetchUsers}>Get users!</button>
		</div>
	);
};
```

Sometimes we also want to make HTTP requests before or after a component has been rendered/updated:

```jsx
// 2. At a certain point in the component lifecycle
const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();

		setUsers(users);
	};

	useEffect(() => {
		// Fetches users after component has rendered
		fetchUsers();
	}, []);

	return (
		<div>
			{
				// Do something with users...
			}
		</div>
	);
};
```

### Exercise

Ask students to write a component that uses `useEffect` to fetch data and populate state:

-   Use `useEffect` & `useState` hook
-   Wrap the HTTP Request in a function
-   Populate the state
-   Display the `title` property
-   Use the following API endpoint: https://jsonplaceholder.typicode.com/todos/1

After, ask 2 students to explain what they did.

### Essence

We send HTTP requests in React as a consequence of user interaction (like a button click) or when the component is rendered/updated. We do this is a separate function that we execute, either on an event (like `onClick`) or after a component has been rendered/updated (with `useEffect`).

## 3. Forms

### Explanation

In HTML, forms have a default behavior. They store the data and automically want to refresh the page. In React we're trying to stop this default behavior and bring the data under our control: by putting it into `state`!

We bring form data into state by listening to it, using the `onChange` and `value` attribute. We are controlling our `<input>` fields, thereby creating `controlled inputs`. Then when we want to submit it, we can use the `onSubmit` attribute.

### Example

```jsx
const Form = () => {
	const [formValues, setFormValues] = useState({ title: '' });

	const inputHandler = (event) => {
		setFormValues();
	};

	return (
		<form onSubmit={}>
			<input type="text" onChange={inputHandler} value={formValues.title} />
		</form>
	);
};
```

### Exercise



### Essence
