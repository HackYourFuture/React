# Lesson Plan Week 3

## Agenda

### Controlled Inputs

- [Documentation: Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)

- Uncontrolled inputs are almost never useful to us

- For controlled inputs, we must provide _both_:
  - The value
  - The onChange event handler

- React controls the state of the input, not the browser

### Simple Form example

- [CodePen: Simple form](https://codepen.io/fdb/pen/ZwrqRQ?editors=0010)

*Note*: to set up CodePen, click the gear icon in the "JS" tab, then in the "external scripts" add these two external scripts:

- `https://unpkg.com/react/umd/react.development.js`
- `https://unpkg.com/react-dom/umd/react-dom.development.js`

### Multiple Form Inputs

- [Documentation: Handling Multiple Inputs](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
- [CodePen: Multiple form inputs](https://codepen.io/fdb/pen/pGprPq?editors=0010)

To avoid duplicating input handling we'll use [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```
this.setState({
  [name]: value
});
```

### Lifting State

- [Documentation: Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

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

### Form Frameworks

- [Formik](https://jaredpalmer.com/formik/)

## Examples

### Currency Calculator [Source](https://github.com/HackYourFutureBelgium/React/tree/master/examples/currency-calculator)

### Temperature Conversion

- Follow guide [here](https://reactjs.org/docs/lifting-state-up.html)

- Show example where state needs to be lifted

- Show controlled components with event handlers as props

## In-Class Todo App

### TODOs

- Add liking functionality

- Persist data to localStorage

- Add comment creation functionality

- Lift state to highest-level component
