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


## Coding inspiration

### UserList (Components, jsx and props)

https://codesandbox.io/s/name-age-simple-react-dz32o

```js
import React from "react";
import ReactDOM from "react-dom";

class UserItem extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <li>
        <h3>
          {name}: {age}
        </h3>
      </li>
    );
  }
}

class UserList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.users.map(user => {
          return <UserItem name={user.name} age={user.age} />;
        })}
      </ul>
    );
  }
}

const users = [
  {
    name: "Benjamin",
    age: 32
  },
  {
    name: "Peter",
    age: 43
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<UserList users={users} />, rootElement);

```

### Counter example

https://codesandbox.io/s/simple-counter-wvgxr

```js
import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return <button onClick={this.increment}>{this.state.counter}</button>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

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

