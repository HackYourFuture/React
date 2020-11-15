# Reading Material React Week 2

## Agenda

These are the topics for week 2:

1. Hooks
   - Class vs functional components
   - What are hooks?
   - useState & useEffect
2. API calls in React
   - When to load data
3. Forms

   - Controlled vs. uncontrolled
   - EventListeners & preventing default behavior

## 0. Video Lectures

Your teacher Shriyans has made video lectures for this week's material. You can find them here: [Videos 4 - 8](https://www.youtube.com/playlist?list=PLVYDhqbgYpYVavMRA5iOfBpSPA39ecm-V)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYVavMRA5iOfBpSPA39ecm-V" target="_blank"><img src="../assets/playlist-thumbnail.png" width="600" height="350" alt="HYF Video" /></a>

## 1. Hooks

### Class vs functional components

Like any other system, React is always evolving. Before we had Hooks (like `useState` and `useEffect`), we used to write our components in `classes`. Here's how it looks:

```js
class Example extends React.Component {
  state = {
    exampleMessage: "This message is for the example",
  };

  render() {
    return <div>{this.state.exampleMessage}</div>;
  }
}
```

This is a valid way of writing a React component.

However, the people behind React want to take the library into a different direction. Instead of using classes, they want to go to a world where React components are written using only functions, no classes. There a different reasons for why this the case, but the bottom line is that future React application **should be written with functions alone**. This is also what HackYourFuture (mostly) will teach.

If you're really curious what the reasons are, look at the following resources:

- [Refactor to React Hooks, Not Classes](https://rangle.io/blog/refactor-to-react-hooks-not-classes/)
- [React Class Components are dead? (Hint: maybe)](https://itnext.io/react-class-components-are-dead-hint-not-yet-1d0a151173b8)

### What are hooks?

Hooks are predefined functions that the React library gives us. They are used only in **functional** components. They try to solve a couple of things:

- [Hooks Intro: Motivation]https://reactjs.org/docs/hooks-intro.html#motivation

Learn more about the essence of hooks here:

- [Why React Hooks?](https://www.youtube.com/watch?v=eX_L39UvZes)
- [React.js Hooks Crash Course](https://www.youtube.com/watch?v=-MlNBTSg_Ww)

### useState & useEffect

**useState**

Sometimes we just want to have our dynamic data (state) live locally inside of a single component. With functional components we can do that, by using the `useState` hook.

Lear more about it here:

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [React Hooks - useState](https://www.youtube.com/watch?v=-G43PbpmGrA)

**useEffect**

A side effect modifies the outside world. Everything in your app that deals with making HTTP requests, writing to localStorage, or even manipulating the DOM, is considered a side effect.

This hook, `useEffect`, gives us a way of structuring our app to be able to handle these operations.

Learn more about it here:

- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [React Hooks - useEffect](https://www.youtube.com/watch?v=sjCe4iHyxxs)

## 2. API calls in React

Like mentioned before, React is "just JavaScript". The only things that make it React are the addition of `JSX`, `componentization` and `component lifecycle`. The rest, like making API calls, happens as usual: at any moment you want to do some `data fetching` you can use a `fetch`, `axios` or a good old `XMLHtppRequest` instance to do the call. Look at the following example:

```js
import React from 'react';

const getUsers = fetch('').then(response => response.json());

const Example () => {

}
```

This is valid JavaScript. But it is outside of the scope of the React component! If you want to make sure the whole component hierarchy knows about the data fetching (and the state changes because of it), you have to make the call in a specific location: in a lifecycle hook. More specifically, you have to call in in the `componentDidMount()` method for classes and `useEffect()` for functional components.

### When to load data

In class components, you'd use the `componentDidMount()` hook. Look at the following to learn more about how to do that:

- [ComponentWillMount() and ComponentDidMount() LifeCycle Event](https://www.youtube.com/watch?v=PEPgugfzDLk)

In functional components, you'd use the `useEffect` hook. Study the following resources to learn how to do this:

- [How to Fetch Data (feat. React Hooks, Render Props)](https://www.youtube.com/watch?v=Ur6MNStwXlQ)

## 3. Forms

Forms have always been slightly different than any other element in HTML. So it also goes for React.

- [Forms](https://reactjs.org/docs/forms.html)

### Controlled vs. uncontrolled

These terms refer to whether or not a component has its own state or not. We're talking about a `controlled` component when it doesn't have its own state: it's being controlled by another component.

A component is `uncontrolled` when it does have state, meaning state values are defined within it.

Learn more about this here:

- [Controlled and uncontrolled elements](https://www.youtube.com/watch?v=nSGZEQa5C_c)
- [How React Hooks change the way we build forms](https://www.youtube.com/watch?v=8yo44xN7-nQ)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
