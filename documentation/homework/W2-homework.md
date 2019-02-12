# Homework Week 2

## Learning goals

By doing this homework you will learn:

- What the role and use of `state` is
- How to `change the presented data in the user interface` depending on the state (that's changed through the user input)
- How to `make forms and extract data` from it in React


## Outline

This week's homework will extend your Todo List app from week 1. You can remove the `Static List` and continue on with the `Dynamic List`.

1. Integrate state into your app

Instead of loading in a JSON file we want to put it into the application state. This creates a copy of it that we can change.

- Create a `state object`
- Import and `move your JSON content to state`
- `Pass JSON from state` to the components as props

2. Change the state

We can change the state by using a function called `setState()`. We'll start learning this by adding/removing new data to our state: by `adding` and `removing` a todo list item.

- Create a form that takes an `Input field component`
- Create a `Button component` to be used for adding new elements
- Define a `function inside the class component` that changes the JSON content to add a new entry
- Define a `function inside the class component` that changes the JSON content to remove the clicked entry

Tip: when adding or removing an item, think in terms of manipulating data types. In this case, think about how to add or remove an item from an array.

## Extra materials to practice

- [Codecademy](https://www.codecademy.com/learn/react-102)
- Project: [Recipe Box](https://www.youtube.com/watch?v=v6Q5NryHN5s)

