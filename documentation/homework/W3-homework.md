# Homework Week 3

## Learning goals

By doing this homework you will learn:

- 


## Outline

Extend your todo list app with the ability to add new todo items and remove existing ones.

Create an add button and a text input. When the add button is clicked a new todo item is created with the given
description and deadline. Create also a remove button, which when clicked it should remove the todo item from the list.

> Challenge: figure out a way for users to enter the deadline date. This is a great opportunity to think like a community in a wider development community. Perhaps there are some **react** libraries out there that provide some kind of **date picker**? Also, look at **momentjs** to see if it could be useful.

A mockup of the end result is the following:

```
Todo List

Enter description: [           ] Deadline: [            ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```

Before you start draw a mockup and identify the components with colours.

As a bonus, have the option to edit the description of a todo item. A mockup of the end result, in this case, should be the following:

```
Todo List

Enter description: [           ] Deadline: [            ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [edit] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [edit] [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [edit] [remove]
```

And when edit is clicked in one of the components:

```
Todo List

Enter description: [           ] Deadline: [           ] [Add]

* [x] [Get out of bed    ] [update] [cancel] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```

## Extra materials to practice:

- Project: [Chat App](https://www.youtube.com/watch?v=jFNHerJqvFw)
-

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code
