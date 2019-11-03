# Lesson Plan Week 2

The purpose of this class is to teach the student about `state`, how to `pass it down as props` and extracting data from forms (the React way).

## Agenda

## Core concepts

1. State vs. Props

- Both props and state are plain JavaScript objects
- State holds all the dynamic data of the app
- Whenever data from the state object gets passed down it becomes a prop
- State can only be defined in class-based components
- While props can be widespread, state should only be defined in the top parent component

_Show example of (1) state initialization, (2) passing state down (and showing how it becomes props). Then let students do the same_

2. Changing state

- Do not modify state directly, always use the React function setState()
- State gets changed through self-defined functions (within the class component) that include setState()
- setState() is an asynchronously-executed request to change state
- Changing state will re-render the component

_Show example of directly modifying state (and how it doesn't work). Then show an example of a self-defined function that uses setState. Finally, ask students to do the same_

3. Forms

- The natural behavior of forms is that they keep their own state and send it to a backend
- React takes control of this behavior, by preventing the default and moving state to the class component
- Form state can be updated in real-time, using the onChange attribute combined with the value attribute
- The easiest way form data can be extracted is by using the `name` attribute: event.target._inputName_.value

_Show example of a form with a text input, that after submission shows the value in a <p> tag. After, ask the students to do the same_

## Build with students

To illustrate the core concepts of state, props and components build the following small app with the students.

- [Counter](../../examples/simpleCounter)

Create a number counter, that the user can increase or decrease by one.

- Create a Counter class-based component
- Initialize state
- Create reusable components for the increase/decrease buttons
- Create 2 functions that change the counter state: 1 for increasing and 1 for decreasing the counter
- Add onClick to Button instances with clickhandlers

_After showing the example, hide your code and ask students to recreate the same thing_
