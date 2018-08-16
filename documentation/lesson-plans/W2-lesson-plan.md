# Lesson Plan Week 2

## Agenda

### Lifecycle Methods

- Full list [here](https://reactjs.org/docs/react-component.html)

- Lifecycle methods are used when render is not enough on its own

- Cover each, giving examples of when they might be useful
  - componentWillMount: SSR
  - componentDidMount: data fetching in client-side-only apps
  - shouldComponentUpdate: performance debugging
  - componentWillUnmount: teardown (payment SDKs, intervals, etc)

- Question: in which of these lifecycle methods is it OK to call setState? (watch out for stack overflows)

### Component State

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

### Notes

- If you don’t want to use class properties for state and “public class fields syntax” for arrow-function handlers, you must bind use a constructor and bind `this`. See [this link](https://reactjs.org/docs/handling-events.html) for more info.

## Examples

### Counter

- Show basic state (as a class property, not in a constructor)

- Show basic event on button click (handleIncreaseCount)

- Show how state change causes lifecycle methods to fire 

### Clock

- Follow React docs clock example [here](https://reactjs.org/docs/state-and-lifecycle.html)

- Add timezone support (if time allows)

## In-Class Blog App

### TODOs

- Add comments list

- Add ability to create new comments

- Move our application data into a JSON file, and load it as props from there

- Add the ability to “favourite” each comment (store this as local state)

- Add the ability to sort comments by creation date
