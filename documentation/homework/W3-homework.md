# Homework Week 3

## Learning goals

By doing this homework you will learn:

- How to use `create-react-app` to create new React applications easily
- Better project folder organisation
- Make `API calls` using `componentDidMount()`
- Connect a React frontend with a Node.js backend

## Outline

> **NOTE: If you already use `create-react-app` you can skip step 1!**

1. Create a new React application using `create-react-app` (CRA)

In order to make use of CRA, you need to install it to your machine through the CLI using NPM.

- Inside your CLI, type in `npm install -g create-react-app`. Verify that it's installed by typing `create-react-app` in the CLI.
- Create a new project folder called `react-hyf` inside the forked React project folder
- Create a new React application using CRA and call it `react-hyf-client`
  Inside `react-hyf-client`:
- Manually move the code from your old homeworks into a new `<PreviousHomeworks />` component. Divide it up into smaller components if needed.
- Add the `<PreviousHomeworks />` component inside the `<App />` component

2. Make an API call to the following URL: https://uinames.com/api/?amount=10 and present the users in the same way as [shown](https://uinames.com/) in the API.

- Make use of `componentDidMount()`
- Put the returned JSON in state
- Create reusable components, at least 3
- Present the complete week 3 homework inside a container component called `<HomeworkWeek3 />` below the `<PreviousHomeworks />` component (or find another clever way to show both homework assignments on one page :-))
- Write as little (repeated) code as possible (tip: make use of the `map()` function)

3. Connect your CRA with a Express-based Node.js backend (Development server)

- Inside the root folder, `react-hyf`, create a new folder called `server`
- Initialize NPM and create a `package.json` file with the following packages: `express`, `nodemon` and `concurrently`
- Inside the `server` folder, create a `server.js`. This file will hold the code that creates your Express server
- Write your basic Express server code, which should include: (1) loading in of Express and initializing it, (2) code that let's Express know where you hold your static files, (3) a GET route that sends the `index.html` file from your `public` folder in the client as a response to the browser (take the `/` route), (4) a listener to a random PORT number (for example, `1234`), (5) inside the `package.json` of write a rule for a proxy that refers the React development server to the Express server port

## Extra materials to practice:

- Project: [Meme Generator App](https://scrimba.com/p/p7P5Hd/c6K77um)
- Project: [Simple Weather App](https://medium.com/@maison.moa/create-a-simple-weather-app-using-node-js-express-and-react-54105094647a)

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code

## Submit homework

When you are done issue a PR with your homework as explained in [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan.
