# Lesson Plan - Thinking in react

- [Thinking the react way](https://reactjs.org/docs/thinking-in-react.html)
  - What was the initial problem React solves?
- Components
  - Understanding the component model
    - Break down a site into components
  - Reusable blocks of JavaScript & HTML
  - Each component instance can be given different data
  - Can display JavaScript values in the HTML, using the { } symbols
  - Class component vs. functional component
  - Always returns HTML (in the form of JSX)
  - Render an array in `.map`
  - [Exercise](#working-with-component-trees)
- JSX
  - A way to write dynamic HTML code with JavaScript
  - It is a more intuitive version of the function `createElement()`
    - show https://babeljs.io/repl write `<div></div>` converted to `"use strict"; React.createElement("div", null);`
  - A component should always return JSX
  - These are the parts that will build the DOM structure
  - `ReactDOM.render`
- Props
  - Props is short for property (like a regular HTML attribute)
  - It is (dynamic) data that can be given to child components
  - Passed down using an identifier, a self-defined attribute name
  - Can be given to multiple instances of components
  - [Code inspiration](#userlist-components-jsx-and-props)
  - [Exercise](#useritemexpanded)
- State
  - State holds all the dynamic data of the app
  - [Code inspiration](#counter-example)
  - [Exercise](#counter)

Both props and state are plain JavaScript objects/values.

Teacher suggestion:

- Make a jquery app first and then change it into dom
- "Why react comes" - video - all students should watch this.

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/React/blob/master/week1/preparation.md#flipped-classroom-videos)

### Get started with React and parcel.js

- https://github.com/senner008/react-min-boilerplate-parcel

## Coding inspiration

### UserList (Components, jsx and props)

```js
import React from "react";
import ReactDOM from "react-dom";

function UserItem(props) {
  return (
    <li>
      <h3>
        {props.name}: {props.age}
      </h3>
    </li>
  );
}

function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => {
        return <UserItem name={user.name} age={user.age} key={user.id} />;
      })}
    </ul>
  );
}

const users = [
  {
    id: 0,
    name: "Benjamin",
    age: 32,
  },
  {
    id: 1,
    name: "Peter",
    age: 43,
  },
];

ReactDOM.render(<UserList users={users} />, document.getElementById("root"));
```

### Counter example

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [counterState, setCounterState] = useState(0);

  const increment = () => {
    setCounterState((prev) => prev + 1);
  };

  return <button onClick={increment}>{counterState}</button>;
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

## Exercises

### Working with component trees

Write the component tree for these two sites. NO CODE!

- [www.youtube.com](https://www.youtube.com/)
- https://github.com/HackYourFuture-CPH

Example:

```
<FancyHeader>
    <Logo src="logoPath" />
    <Navigation links={arrayOfLinks}>
</FancyHeader>
```

### UserItemExpanded

Create a new component called `UserItemExpanded`. Render these user attributes:

- Full name
- Address
- Age
- Height
- Spoken languages

### Counter

Expanding the Counter example, add two new buttons:

1. Reset button. Clicking this button will reset the counter to 0 (zero).
2. Increment double. Clicking this button will double the counter (multiply by 2).

### UserItemList

Create a component that renders a list of UserItemExpanded using the users array below

```js
const users = [
  {
    fullname: "testy mc testy face",
    address: "test alley",
    age: 35,
    height: 185,
    languages: ["danish", "arabic"],
  },
  {
    fullname: "Ahmad Hansen",
    address: "test alley 2",
    age: 89,
    height: 167,
    languages: ["english", "polish"],
  },
  {
    fullname: "Peter Petersen",
    address: "alley 2",
    age: 19,
    height: 176,
    languages: ["english", "danish"],
  },
];
```

## Extra (optional) exercise

### Fibonacci Counter

Count the fibonacci row instead. Log each new count as an expanding list of numbers:

![Fibonacci Counter](assets/fibo_counter.png)

You can start with this code and add the needed functionality:

```js
import React, { useState } from "react";

export function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);

  // ... some code here

  return (
    <div>
      {counterState.map((counter) => (
        <div>{counter}</div>
      ))}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
