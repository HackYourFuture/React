# Homework Week 2

## Learning goals

By doing this homework you will learn:

- What the role and use of `state` is
- How to `change the presented data in the user interface` depending on the state (that's changed through the user input)
- How to `make forms and extract data` from it in React
- How to `add and remove items from an array in state`

## Outline

This week's homework will extend your Todo List app from week 1. You can remove the `Static List` and continue on with the `Dynamic List`.

1. Integrate state into your app

Move your todo items array to the state of your application. This creates a copy of it that we can change.

- Create a `state` object with the todo array as initial value
- Pass the todos array from the `state` to the components using props

2. Change the state

We can change the state by using a function called `setState()`. We'll start learning this by adding/removing new data to our state: by `adding` and `removing` a todo list item.

- Create a form that takes an `Input field component`
- Create a `Button component` to be used for adding new elements
- Define a `function inside the class component` that changes the todo array in the state to add a new entry
- Define a `function inside the class component` that changes the todo array in the state to remove the clicked entry

Tip: when adding or removing an item, think in terms of manipulating data types. In this case, think about how to add or remove an item from an array.

## Extra materials to practice

- [Codecademy](https://www.codecademy.com/learn/react-102)
- Project: [Recipe Box](https://www.youtube.com/watch?v=v6Q5NryHN5s)

## Submit homework

When you are done issue a PR with your homework as explained in [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan.
