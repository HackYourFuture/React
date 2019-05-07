# Lesson Plan - Thinking in react

- [Thinking the react way](https://reactjs.org/docs/thinking-in-react.html)
  - What was initial problem react solves?
  
## Components
- Understanding the component model
- Reusable blocks of JavaScript & HTML
- Each component instance can be given different data
- Can display JavaScript values in the HTML, using the { } symbols
- Class component vs. functional component
- Always returns HTML (in the form of JSX)
- Render an array in `.map`

## JSX
- A way to write dynamic HTML code with JavaScript
- It is a more intuitive version of the function createElement()
  - show https://babeljs.io/repl write <div></div> converted to `"use strict"; React.createElement("div", null);`
- A component should always return JSX
- These are the parts that will build the DOM structure
- `ReactDOM.render`

## Props
- Props is short for property (like a regular HTML attribute)
- It is (dynamic) data that can be given to child components
- Passed down using an identifier, a self-defined attribute name
- Can be given to multiple instances of components

## State
- State holds all the dynamic data of the app
- State can only be defined in class-based components
- Initialization of state in constructor
- Easy example is changing state with `setTimeout`


Both props and state are plain JavaScript objects

Teacher suggestion: 
- Make a jquery app first and then change it into dom	
- "Why react comes" - video - all students should watch this. 
