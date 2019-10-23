# Reading Material React Week 2

## Agenda

These are the topics for week 2:

1. State
   - Dynamic data
   - The purpose
2. Hooks
   - Class vs functional
   - useState
   - useEffect
3. API calls in React
   - When to load data
4. Forms
   - Controlled vs. uncontrolled
   - EventListeners & preventing default behavior

## 1. State

### Dynamic data

### The purpose

## 2. Hooks

### Class vs functional

Like any other system, React is always evolving. Before we had Hooks, we used to write our components in `classes`. Here's how it looks:

```js
class Example extends React.Component {
  state = {
    exampleMessage: 'This message is for the example'
  };

  render() {
    return <div>{this.state.exampleMessage}</div>;
  }
}
```

### useState

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)

### useEffect

A side effect modifies the outside world. Everything in your app that deals with making HTTP requests, writing to localStorage, or even manipulating the DOM, is considered a side effect.

This hook, `useEffect`, gives us a way of structuring our app to be able to handle these operations.

- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

## 3. API calls in React

### When to load data

## 4. Forms

### Controlled vs. uncontrolled

### EventListeners & preventing default behavior

[State](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f), [State vs. props](https://codeburst.io/react-state-vs-props-explained-51beebd73b21), [Unidirectional data flow](https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e), [Forms](https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825)
