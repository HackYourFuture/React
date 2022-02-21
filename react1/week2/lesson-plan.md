# Lesson Plan - Building components

- Stateful logic - Having logic around state
- create-react-app
  - Show students how to install create-react-app. [Getting Started](https://create-react-app.dev/docs/getting-started).
  - Explain the general structure
  - How to run `npm run start`
  - Talk briefly about how the dist folder is generated
- Component tree
  - Transform a todolist sketch into components on white board.
  - _Exercise:_ transform another ui into components in pairs.
- Stateful logic
  - Using destructuring in React
  - State vs. Props
    - Both props and state trigger a render update when they change
    - How to determine if data should be props or state?
      - Props are "configuration options" for components
      - State is completely optional
      - State increases complexity and reduces predictability
      - Use props unless you definitely need to use state
      - State is single-level only. Components can read and set their own state, but cannot read or set the state of their children
    - Later, we are going to be using a state-management tool
- List keys
  - Render list first without adding the key. See the error
  - Assignment of unique key to every item rendered in an array
  - Keys help React identify which items have changed, are added, or are removed
  - [Index should be avoided](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
  - [Code inspiration](#todolist-updating-state-with-list)
- Component life cycles
  - [Using the effect hook](https://reactjs.org/docs/hooks-effect.html)
  - Understand when useEffect is executed
  - Understand how to "clean up" useEffect code
  - Understand when "clean up" is run

[Code inspiration](#counter)

## Flipped classroom videos

[Flipped classroom videos](./preparation.md#flipped-classroom-videos)

## Code inspiration

### todolist (updating state with list)

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "asdllll",
    },
    {
      text: "testsss",
    },
  ]);

  const addTodo = () => {
    const newItem = { text: "lolol" };
    const newList = todos.concat(newItem);
    setTodos(newList);
  };

  return (
    <div className="App">
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
```

## Exercise

### Counter

First understand the code in this component:

```js
function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  });

  return <div>{count}</div>;
}
```

Now extend it with the following features:

- Add a button that decrements the counter. What is observed?
- Add a button that resets the counter to 0
- Add a text input field and start typing in a long story. What is observed?

### Extra

- A button that pauses the counter
  - Clicking it should change the text so it says `start`. Clicking the button now should start the timer again and change the text to `pause`
  - Also, the counter should stop immediately. Hint : you need to return a clean up function from useEffect
- An input field that lets you set the speed of the counter. The speed should be reflected immediately on keypress and the counter should pause when entering invalid input.
