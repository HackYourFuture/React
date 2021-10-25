# Lesson Plan Week 3

## Agenda

The purpose of this class is to teach the student about:

- Client-side routing
- What is the Context API

## Core Concepts

1. Client-side routing

- Server-side routing is the norm, but with rise of modern JavaScript and SPAs came **client-side routing**
- On URL change **no request to server** (and thus no page refresh), **only changed state of app and URL adjustment**
- For React, third-party library **React-Router** is most popular
- Most important concepts: `<BrowserRouter />`, `<Route />`, `<Link />`, `<Switch />`, the `location` prop and `history` object

_Explain the following example: [Basic Example](https://reacttraining.com/react-router/web/example/basic)_

_Exercise: help students recreate the Basic Example (without looking at the code)_

## Build with students

To illustrate the workings of React-Router build the following small app with the students.

- [Basic Router](../../examples/router-example)

Make a basic navigation menu that uses React-Router.

- Use `react-router-dom`
- Render a different component for each route

_After showing the example, hide your code and ask students to recreate the same thing_

2. Server-side routing

- Routing refresher: the mechanism by which `requests` (as specified by a URL change or HTTP method) are `send to an endpoint on the server`, that then executes code that handles the request.
- Server-side routing happens `when the client sends a request to the server`, usually **triggered by a URL change**

## 2. Global state with `context API`

- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

_Show instance of how to create `context`, pass down the `Provider` and `Consumer` and show the value. After, have the students do the same_
