# Lesson Plan Week 2

The purpose of this class is to teach the trainee about:

- How to make `HTTP Requests` within a React component
- How to test in React

## Core concepts

## 1. Making HTTP requests within a React component

### Explanation

Making HTTP requests is an essential task of the frontend. Within React, we make these requests at specific points: (1) after a user action (like a button click), or (2) at a certain point in the component lifecycle.

### Example

```jsx
// 1. After a user action
const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

Ask trainees to write a component that uses `useEffect` to fetch data and populate state:

- Use `useEffect` & `useState` hook
- Wrap the HTTP Request in a function
- Populate the state
- Display the `title` property
- Use the following API endpoint: https://jsonplaceholder.typicode.com/todos/1

After, ask 2 trainees to explain what they did.

### Essence

We send HTTP requests in React as a consequence of user interaction (like a button click) or when the component is rendered/updated. We do this is a separate function that we execute, either on an event (like `onClick`) or after a component has been rendered/updated (with `useEffect`).
