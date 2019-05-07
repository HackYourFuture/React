# Homework

Base your week 2 homework on the result of week 1.

When you are done update your PR from week 1.

## Outline

Extend your todo list app with the ability to add new todo items. Also your todo list should start rendering todo items using the following JSON format:

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
This also means that new todo items should be added to this JSON array.

Create a checkbox in each todo item. When you click the checkbox, the done state of the item should change. When an item is marked as done, it should be rendered with a `line-through` decoration. A mockup of the end result is the following:

### Todo List

Enter description: [____________]   [Add]

* [x] ~~Get-out-of-bed~~
* [ ] Brush teeth
* [ ] Eat breakfast

When there are no items, the todo app should render the text "No items...":

### Todo List

Enter description: [____________]   [Add]

No items...

## Extra assignment
Add a delete feature to your todo list so you can delete todo items.

## Reading exercises 

Read about `this` binding in Javascript:
- https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
- https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
- https://codeburst.io/binding-functions-in-react-b168d2d006cb

Follow the The Beginner's Guide to React by Egghead https://egghead.io/courses/the-beginner-s-guide-to-react