# Homework Week 3

## Learning goals

By doing this homework you will learn:

- How to use `create-react-app` to create new React applications easily
- How to make `API calls` using `componentDidMount()`
- How to do `client-side routing` with React-Router
- Better project folder organisation

## Outline

> **NOTE: If you already use `create-react-app` you can skip step 1!**

1. Create a new React application using `create-react-app` (CRA)

In order to make use of CRA, you need to install it to your machine through the CLI using NPM.

- Inside your CLI, type in `npm install -g create-react-app`. Verify that it's installed by typing `create-react-app` in the CLI.
- Create a new project called `react-hyf` inside the forked React project folder
- Manually move the code from your old homeworks into a new `<PreviousHomeworks />` component. Divide it up into smaller components if needed.
- Add the `<PreviousHomeworks />` component inside the `<App />` component

2. Make an API call to the following URL: https://uinames.com/api/?amount=10

- Make use of `componentDidMount()`
- Put the returned JSON in state
- Create reusable components, at least 3
- Present the returned data inside a container component called `<HomeworkWeek3 />`
- Write as little (repeated) code as possible (tip: make use of the `map()` function)

3. Incorporate React-Router into your application.

- Make a separate frontend route for each week of your homework
- `/week1` should display your Static Todolist
- `/week2` should display your improved Dynamic Todolist
- `/week3` should display your components that present the data from the API call above
- Put links to each route in the component that's displayed in the `/` route

## Extra materials to practice:

- Project: [Meme Generator App](https://scrimba.com/p/p7P5Hd/c6K77um)
- Play around with the code from [Modal Gallery](https://reacttraining.com/react-router/web/example/modal-gallery)

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code

## Submit homework

When you are done issue a PR with your homework as explained in [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan.
