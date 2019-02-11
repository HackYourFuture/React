# Lesson Plan Week 3

The purpose of this class is to

## Agenda

### Controlled Inputs

- Docs [here](https://reactjs.org/docs/forms.html#controlled-components)

- Uncontrolled inputs are almost never useful to us

- For controlled inputs, we must provide _both_:

  - The value
  - The onChange event handler

- React controls the state of the input, not the browser

### Lifting State

- Docs [here](https://reactjs.org/docs/lifting-state-up.html)

- Often, several components need to reflect the same data. In these cases, we lift the shared state up to their closest common ancestor

- The process involves:

  - Lifting state to the highest ancestor
  - Passing state back down the tree as props
  - Passing onChange functions back down the tree as props

- This method works fine for smaller, less complex apps, but can get annoying very fast - this is why we will start looking at state management libraries soon (MobX)

- In typical use cases, it’s okay for forms to have their own local state as they represent “unadded” data

- Every time you have state in your app:

  - Identify every component that renders something based on that state
  - Find a common owner component (a single component above all the components that need the state in the hierarchy
  - Either the common owner or another component higher up in the hierarchy should own the state

- There should be a single “source of truth” for any data that changes in a React application

## Build with students

1. Temperature Conversion

- Follow guide [here](https://reactjs.org/docs/lifting-state-up.html)

- Show example where state needs to be lifted

- Show controlled components with event handlers as props
