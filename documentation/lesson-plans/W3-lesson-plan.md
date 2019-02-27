# Lesson Plan Week 3

## Agenda

The purpose of this class is to teach the student about more advanced React concepts. To make this more realistic (and efficient) they'll be using `create-react-app`, which will make the workflow easier.

They will learn about `component lifecycle` and and how to use `componentDidMount()`. The student will make an `API call` using this lifecycle method.

They will also learn about client-side routing, using `React-Router`. This class will be a refresher on the concept of routing, and teach the student about the value of frontend routing when making SPAs.

## Core Concepts

1. create-react-app

- Generates an fully functional out-of-the-box React environment
- Solves problem of manually configuring file bundler (like Webpack) or transpiler (Babel)

_Explain to the student the problems Webpack (ex. React necessitates file bundling to work) and Babel (ex. React makes use of ES2017+ features that need to be converted into syntax that older browsers can understand) solves_

- Improves workflow through `hot reloading`
- Gives a more realistic folder structure

_Show the student how to setup a basic CRA application_

2. Component lifecycle

- Lifecycle methods are part of the `Component` class (React.Component)
- The purpose of lifecycle methods is to **solve rendering issues** that sometimes can't easily be controlled via state and props
- 4 groups of lifecycle methods: **mounting**, **updating**, **unmounting** and **errors**
- Ideally, a React application should work completely only using state and props. Use lifecycle methods as a **last resort**

_Show the following [image](https://cdn-images-1.medium.com/max/2000/1*cEWErpe-oY-_S1dOaT1NtA.jpeg) to illustrate the place and purpose of each lifecycle method. Then show how to access the methods in a class-based component_

- API calls are done in `componentDidMount()`

_Show example of how to make an API call in `componentDidMount()` and put the data in state. Make use of the following API: `https://reqres.in/api/users`. Then present the data through newly created components_

3. Frontend routing

- Routing refresher: the mechanism by which **requests (as specified by a URL or HTTP method) are routed to the code that handles them**.
- Server-side routing is the norm, but with rise of modern JavaScript and SPAs came **client-side routing**
- On URL change **no request to server** (and thus no page refresh), **only changed state of app and URL adjustment**
- For React, third-party library **React-Router** is most popular
- Most important concepts: `<BrowserRouter />`, `<Route />`, `<Link />`, `<Switch />`, the `location` prop and `history` object

_Explain the following example: [Basic Example](https://reacttraining.com/react-router/web/example/basic)_

_Exercise: help students recreate the Basic Example (without looking at the code)_

## Build with students

TBD
