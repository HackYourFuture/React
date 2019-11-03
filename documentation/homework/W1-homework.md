# Homework Week 1

## Learning goals

By doing this homework you will learn:

- How to create your own custom components
- How to nest components
- Better understand the role of `props` and how to pass them to components
- Reuse components and give them different data

## Getting started

Fork this repository and create a basic folder structure that includes:

- A simple HTML file, with one `<div>` that has an id of `thisIsWhereReactIsInjected` and the following scripts included in the `<body>`:

`<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>`

`<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>`

`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`

- A simple JavaScript file that will contain all your React code. When including it into the HTML file, add `type=text/babel` (this will allow you to write JSX code).

For an example look [here](https://reactjs.org/docs/add-react-to-a-website.html).

Put the project folder with a custom name inside the `homework-submission` directory.

## Outline

In this assignment you will create a **Todo List**, the React way. This means you'll be _thinking in reusable components_ and _pass dynamic data through_ to each of them.

1. Create a todo list called `Static List` with three list items:

```
Static List

* Get out of bed, Wed Sep 13 2017
* Brush teeth, Thu Sep 14 2017
* Eat breakfast, Fri Sep 15 2017
```

- `Divide the list` into reusable components (create at least 2)
- Make sure the `container component is class-based`
- `Reuse one component` at least 3 times
- Each list item should have a prop of `description` and `deadline`
- Write for each component `a short summary` of what it does and the role of the prop (in case there is one) in a JavaScript comment

```
const RandomHello = () => { return <h1>Hello there!</h1> }
// The goal of this component is to insert a random greeting in page
```

2. Create a second todo list underneath the first (reuse the same components) called `Dynamic List`, but this time pass the props dynamically using the following array of objects:

```js
[
  {
    id: 1,
    description: "Get out of bed",
    deadline: "2017-09-11",
    done: true
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "2017-09-10",
    done: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "2017-09-09",
    done: false
  }
];
```

- Use the `map()` function to dynamically render components
- Using CSS (a conditional className), cross out the item if `done` is true

## Extra materials to practice

Use the following links to practice some more:

- [Codecademy](https://www.codecademy.com/learn/react-101)
- [BuildWithReact](http://buildwithreact.com/tutorial)

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code

## Submit homework

When you are done issue a PR with your homework as explained in [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan.
