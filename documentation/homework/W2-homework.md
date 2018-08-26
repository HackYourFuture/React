# Homework Week 2

Base your week 2 homework on the result of week 1.

When you are done update your PR from week 1.

## Outline

Extend your todo list app with the ability to  add new todo items and remove existing ones, also you list should start rendering those 3 items in the following json:

```json
[
  {
    "id": 1,
    "description": "Get out of bed",
    "done": true
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "done": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "done": false
  }
]
```

Create a checkbox in each todo item. When you click the checkbox, the done state of the item should change. When an item is marked as done, it should be rendered with a `line-through` decoration. A mockup of the end result is the following:

```
Todo List

Enter description: [           ]   [Add]

* [x] Get-out-of-bed
* [ ] Brush teeth
* [ ] Eat breakfast
```

When there are no items, the todo app should render the text "No items...":

```
Todo List

No items...
```

## Extra assignment
add delete feature to your todo list so you can delete a todo item by simply clicking on it

## Reading exercises 

read about `this` binding in Javascript:
- https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
- https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
- https://codeburst.io/binding-functions-in-react-b168d2d006cb

fellow the The Beginner's Guide to React by egghead https://egghead.io/courses/the-beginner-s-guide-to-react
