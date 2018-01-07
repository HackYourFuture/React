# Homework Week 3

Base your week 3 homework on the result of week 2.

When you are done, update your PR from week 2.

## Outline

Extend your todo list app with the ability to add new todo items and remove existing ones.

Create an add button and a text input. When the add button is clicked a new todo item is created with the given
description. Create also a remove button, which when clicked it should remove the todo item from the list.

A mockup of the end result is the following:

```
Todo List

Enter description: [           ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```

All the **state** should be in the `App` component. No state should be in the other components. Before you start draw a mockup and identify the components with colours.

As a bonus, have the option to edit the description of a todo item. A mockup of the end result, in this case, should be the following:

```
Todo List

Enter description: [           ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [edit] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [edit] [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [edit] [remove]
```

And when edit is clicked in one of the components:

```
Todo List

Enter description: [           ] [Add]

* [x] [Get out of bed    ] [update] [cancel] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```

## Extra assignment

Look at the application in `/chat-app`. We want to add some functionality. Answer the four questions below for each functionality we want to add.

A. Which component(s) are affected by the change?
B. Do you need to add new components? Which?
C. Where will you place the state for the new functionality?
D. Which components will receive which props?

These are the functionalities we want to add:

1. Users should be able to choose or upload an avatar
2. Users can turn notifications on or off


## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code
