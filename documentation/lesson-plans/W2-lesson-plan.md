# Lesson Plan Week 2

The purpose of this class is to teach the student about `state` and

## Agenda

## Core concepts

1. State vs. Props

   - Both props and state are plain JS objects
   - Both props and state trigger a render update when they change
   - How to determine if data should be props or state?
   - Props are “configuration options” for components
   - State is completely optional
   - State increases complexity and reduces predictability
   - Use props unless you definitely need to use state
   - State is single-level only. Components can read and set their own state, but cannot read or set the state of their children
   - Later, we are going to remove state from our React applications completely, and use a state-management tool (mobx)

2. Using state correctly
   - Do not modify state directly, always use setState
   - Give an example of how mutating state directly doesn’t work
   - State updates are merged (note that merging is shallow)
   - setState is an asynchronously-executed _request_ to change state

## Build with students

To illustrate the core concepts of state, props and components build the following 2 small apps with the students

1. [Counter](../../examples/counter)

-

## Learning examples

### Counter []

Demonstrates:

1. Most basic implementation of component state
2. Handler functions bound to `onClick`

![Clocks Example Screenshot](/documentation/example-screenshots/counter.png)

### Clocks [[source](../../examples/clocks)]

Follows the React docs clock example [here](https://reactjs.org/docs/state-and-lifecycle.html). Uses [momentjs](https://github.com/moment/moment) and [moment-timezone](https://github.com/moment/moment-timezone) for datetime functionality.

Demonstrates:

1. Using both state and props in a component tree
2. Passing event handlers as props
3. Rendering components in a loop
4. Conditional JSX rendering (header count)
5. State-bound lifecycle and lifecycle events (clock interval)

![Clocks Example Screenshot](/documentation/example-screenshots/clocks.png)
