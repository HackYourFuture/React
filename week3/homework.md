# Homework

## Outline

Now instead of using an array to load the default items, use the api found here: `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw` using `fetch`

Extend your todo list app with the ability to add new todo items with user inputted data and remove existing ones and a deadline for the todo item.

Create an add button, a text input and a deadline input. When the add button is clicked a new todo item is created with the given
description and deadline. Create also a remove button, which when clicked it should remove the todo item from the list.

> Challenge: figure out a way for users to enter the deadline date. This is a great opportunity to think like a community in a wider development community. Perhaps there are some **react** libraries out there that provide some kind of **date picker**? Also, look at **momentjs** to see if it could be useful.

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

## Extra assignment

Make the exercises in [chat-app](/documentation/chat-app/Exercises.md)! 

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Create a new branch called `react/week3` 
- Add all your changes to this branch in the `react/week3` folder. 
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `react/week3` branch
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `master`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist
Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?
