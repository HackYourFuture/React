# Lesson Plan - Thinking in react

- [Thinking the react way](https://reactjs.org/docs/thinking-in-react.html)
  - What was initial problem react solves?
  
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
  - It is a more intuitive version of the function createElement()
    - show https://babeljs.io/repl write <div></div> converted to `"use strict"; React.createElement("div", null);`
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
  - State can only be defined in class-based components
  - Initialization of state in constructor
  - [Code inspiration](#counter-example)
  - [Exercise](#counter)

Both props and state are plain JavaScript objects

Teacher suggestion: 
- Make a jquery app first and then change it into dom	
- "Why react comes" - video - all students should watch this. 


## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/React/blob/master/week1/preparation.md#flipped-classroom-videos)

### Get started with React and parcel.js
- https://github.com/senner008/react-min-boilerplate-parcel

## Coding inspiration

### UserList (Components, jsx and props)

https://codesandbox.io/s/name-age-simple-react-dz32o

```js
  import React from "react";
  import ReactDOM from "react-dom";

  function UserItem (props) {
    
    return (
        <li>
          <h3>
            {props.name}: {props.age}
          </h3>
        </li>
    );
  }
    
  function UserList (props)  {
      
    return (
        <ul>
            {
              props.users.map(user => {
                return <UserItem name={user.name} age={user.age} key={user.id} />;
              });
            }
        </ul>
    );
  }
    
  const users = [
    {
      id : 0,  
      name: "Benjamin",
      age: 32,
    },
    {
      id : 1,
      name: "Peter",
      age: 43
    }
  ];

  ReactDOM.render(
      <UserList users={users} />, 
      document.getElementById("root")
  );


```

### Counter example

https://codesandbox.io/s/simple-counter-wvgxr

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter () {
    
    const [counterState, setCounterState] = useState(0);
  
    const increment = () => {
      setCounterState(prev => prev +1)
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

- Fullname
- Adress
- Age
- Height
- Spoken languages

### Counter
Expanding the Counter example, Add two new buttons:
1. Reset button. Clicking this button will reset the counter
2. Increment double. Clicking this button will double the counter.


### UserItemList
Create a component that renders a list of UserItemExpanded using the users array below

```js
const users = [
  {
    fullname: 'testy mc testy face',
    adress: 'test alley',
    age: 35,
    height: 185,
    languages: ['danish', 'arabic']
  },
  {
    fullname: 'Ahmad Hansen',
    adress: 'test alley 2',
    age: 89,
    height: 167,
    languages: ['english', 'polish']
  },
  {
    fullname: 'Peter Petersen',
    adress: 'alley 2',
    age: 19,
    height: 176,
    languages: ['english', 'danish']
  }
];
```

## Ekstra:

### Fibonacci Counter
Count the fibonacci row instead. Log each new count as an expanding list of numbers
![alt text](https://github.com/senner008/Class11-React/blob/master/week1/fibo_counter.png "Logo Title Text 1")
```js
import React, { useState } from 'react';
export function Counter () {
    
    const [counterState, setCounterState] = useState([0, 1]);
  
    // ... some code here
  
    return (
        <div>
            { counterState.map(counter => <div>{counter}</div>) }
            <button onClick={increment}>Increment</button>
        </div>
    );  
}
```
