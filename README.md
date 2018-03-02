# React
Specifications React Module

## Planning
| Week | Topic | Read | Homework |
| ---- | ----- | ---- | -------- |
| 1. | React Components | [JSX](https://reactjs.org/docs/introducing-jsx.html), [Elements](https://reactjs.org/docs/rendering-elements.html), [Components and Props](https://reactjs.org/docs/components-and-props.html) | [Week 1 Homework](https://github.com/HackYourFuture/React/blob/master/documentation/homework/Week%201.md) |
| 2. | State and Lifecycle | [Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html), [Events](https://reactjs.org/docs/handling-events.html), [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html), [List and Keys](https://reactjs.org/docs/lists-and-keys.html) | [Week 2 Homework](https://github.com/HackYourFuture/React/blob/master/documentation/homework/Week%202.md) |
| 3. | Forms and Managing State | [Forms](https://reactjs.org/docs/forms.html), [Manage State](https://reactjs.org/docs/lifting-state-up.html), [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) | [Week 3 Homework](https://github.com/HackYourFuture/React/blob/master/documentation/homework/Week%203.md) |
| 4. | Application State | [Flux Concepts](https://github.com/facebook/flux/tree/master/examples/flux-concepts) | [Week 4 Homework](https://github.com/HackYourFuture/React/blob/master/documentation/homework/Week%204.md) |
| 5. | MobX + APIs | [MobX Async Actions](https://mobx.js.org/best/actions.html) | [Week 5 Homework](https://github.com/HackYourFuture/React/blob/master/documentation/homework/Week%205.md) |

## Read up before we get started

Watch this video from Facebook about why they started React:

https://youtu.be/nYkdrAPrdcw

Also be sure you're familiar with ES6-syntax. See this video about ES6 (the video is in Node, but the syntax for React is the same):

https://www.lynda.com/Node-js-tutorials/Switching-ES6-Node-js/546100-2.html

This is a handy reference of all features of ES6:

http://es6-features.org

Please *do not worry about understanding all*. However, do make sure you understand the following, as we'll be using them a lot:

- http://es6-features.org/#Constants
- http://es6-features.org/#ObjectMatchingShorthandNotation
- http://es6-features.org/#RestParameter
- http://es6-features.org/#SpreadOperator

Read about React here:

https://facebook.github.io/react/

## Handing in homework
Take a look at [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan, he explains how your homework needs to be handed in.

Also review the Git [workflow material](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md) from the JavaScript3 module, use this as a reference.

## Slides

Find the slides used in class here:

https://slides.com/joostlubach/react-class/live

## Learning examples

### Counter [[source](/examples/counter)]

Demonstrates:

1. Most basic implementation of component state
2. Handler functions bound to `onClick`

![Clocks Example Screenshot](/documentation/example-screenshots/counter.png)

### Clocks [[source](/examples/clocks)]

Follows the React docs clock example [here](https://reactjs.org/docs/state-and-lifecycle.html). Uses [momentjs](https://github.com/moment/moment) and [moment-timezone](https://github.com/moment/moment-timezone) for datetime functionality.

Demonstrates:

1. Using both state and props in a component tree
2. Passing event handlers as props
3. Rendering components in a loop
4. Conditional JSX rendering (header count)
5. State-bound lifecycle and lifecycle events (clock interval)

![Clocks Example Screenshot](/documentation/example-screenshots/clocks.png)

## Real world example

Have a look at Mattijn's real world React project:

https://github.com/mattijnlahuis/beertools
