# Homework Week 2

Base your week 2 homework on the result of week 1.

When you are done update your PR from week 1.

## Outline

Extend your todo list app with dynamic rendering of items based on the following JSON list:

```json
[
  {
    "description": "Get out of bed"
  },
  {
    "description": "Brush teeth"
  },
  {
    "description": "Eat breakfast"
  }
]
```

The JSON list should be the state of the `App` component.
Create a checkbox in each todo item. When you click the checkbox, the done state of the item should change.
A mockup of the end result is the following:

```
Todo List

* [x] Get out of bed
* [ ] Brush teeth
* [ ] Eat breakfast
```

When there are no items, the todo app should render the text "No items...":

```
Todo List

No items...
```

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Cleanliness of code
