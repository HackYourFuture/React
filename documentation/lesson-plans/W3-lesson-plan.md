# Lesson Plan Week 3

## Agenda

The purpose of this class is to teach the student about more advantage React usage and how to connect a React client to a Express-based Node.js server. To make this more realistic (and efficient) the student will be using `create-react-app`, which will make the workflow easier.

The student will learn about `component lifecycle` and and how to use `componentDidMount()`. The student will make an `API call` using this lifecycle method.

Lastly, the student will learn how to connect a React frontend to a Node.js backend.

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

3. Connecting React with an Express-based Node.js server

- React can be connected to any type of backend (writting in Node.js, Java, Ruby,etc.)
- A (web) server only serves files to a client. A React frontend, ultimately, is just an HTML file with injected JavaScript Thi HTML is what Express will serve.
- Connection takes place by calling upon `endpoints`

_Show how to build a simple Express server and React client from scratch, connect them using a single endpoint, and explain every step in the process_
