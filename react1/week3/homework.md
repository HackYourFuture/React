# Homework

### Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) out before you get into some git confusion!

This week the homework will result in 2 PRs: 1 in your homework repository and 1 in the Meal Sharing repository.

## TODO app

Now instead of using an array to load the default items, use the api found here: `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw` using `fetch`

Extend your todo list app with the ability to add new todo items with user inputted data and remove existing ones and a deadline for the todo item.

Create an add button, a text input and a deadline input. When the add button is clicked a new todo item is created with the given
description and deadline. Create also a remove button, which when clicked it should remove the todo item from the list.

> Challenge: figure out a way for users to enter the deadline date. This is a great opportunity to think like a community in a wider development community. Perhaps there are some React libraries out there that provide some kind of **date picker**? Also, look at [Luxon](https://moment.github.io/luxon/index.html) to see if it could be useful.

Create a component that wraps another component in a black border using [react children](https://medium.com/javascript-in-plain-english/how-to-use-props-children-in-react-7d6ab5836c9d)

Demo of how the homework should look

![todolist](assets/todolist.gif)

Here are the requirements for this weeks homework:

- Add a deadline to the todo item
- Create new item using description and deadline that the user inputs
- Possibility to update a todoitem
- Create proptypes for at least one of the components
- Create a border component that wraps a component in a black border

Worth considering:

- What if the description input is empty?
- What if the deadline input is empty?
- What if the deadline is before the current day?
- What if you edit an item with an empty description?

## Meal Sharing

For this, you will work in your `Meal Sharing` repository - the same that you worked on in the **Node** module.

You have just learned **fetching** and renderng the fetched data, and you have built the basis of the backend of your Meal Sharing app during the Node module, so it is time to work on the frontend!

Create a `MealList` component that fetches and renders the meals.
Your component will have a `meals` state. Render the meal title, description and price at least as simple paragraphs. Add your MealList component to App.js.

<br/>

## Extra assignment

Make the exercises in [chat-app](https://github.com/HackYourFuture-CPH/React/tree/main/examples/chat-app)!

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
