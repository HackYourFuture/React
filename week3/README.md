# Reading Material React Week 3

## Agenda

These are the topics for week 3:

1. Hooks II
   - Building custom hooks
   - Using other people's custom hooks
2. Third party React tools
   - UI toolkits
   - Utilities

## 1. Hooks II

### Building custom hooks

One of the main benefits of using the React hooks (like `useState`, `useEffect`, etc.), is that they can be used in any functional component.

However, that's not the only big benefit. Another one is that it allows us to isolate `stateful logic` into a reusable function that can be used in other functional components.

This `stateful logic` is just a complicated way for saying state variables and the instructions that manipulate it.

In a custom hook we can create state everytime we use it, and modify it according to the instructions that are included in the hook. This is the strength of using custom hooks: by defining custom hooks we can replicate a certain functionality for us to use in multiple different functional components.

In terms of implementation, a custom Hook is simply a JavaScript function whose name starts with ”use” (for example, `useSomeAction`). It incorporates existing hooks (like `useState`) and adds logic to it.

Study the following to learn more about it:

- [Building your own hooks](https://reactjs.org/docs/hooks-custom.html)
- [Building Custom React Hooks](https://medium.com/prototyped/building-custom-react-hooks-f6aad8567825)

### Using other people's custom hooks

Like anything in development, once someone has found a solution to a common problem it (hopefully) gets published for everyone to use. This is also the case with `hooks`.

Check the following resources out to learn more about these custom hooks others have made for you to use:

- [usehooks.com](https://usehooks.com/)

## 2. Third party React tools

Third party React tools can roughly be divided into 2 categories:

1. UI toolkits
2. Utilities

### UI toolkits

These kind of component libraries serve to **structure your user interface**. If you've ever worked with a CSS framework, this is what it means.

Popular presentational component libraries are the following:

- [Semantic UI](https://react.semantic-ui.com/)
- [Material UI](https://material-ui.com/)
- [Shards](https://designrevision.com/docs/shards-react/getting-started)

All of these are called `UI toolkits` and provide components that structure a particular part of your page.

For example, Let's say you want to add a `button` component in your form. You could make it yourself. Or you could take it from the toolkit!

```js
import React from "react";
import { Button } from "semantic-ui-react";

const ButtonExampleButton = () => <Button>Click Here</Button>;

export default ButtonExampleButton;
```

### Utilities

There are also tools that solve certain problems within the React ecosystem.

- [Enzyme](https://github.com/airbnb/enzyme) is a React-specific component testing tool, that makes it easier to test your React Components' output
- [Redux](https://redux.js.org/introduction/getting-started) is a state management tool, used to make it possible to connect every component directly to the entire state and thus eliminates the need to use props or callbacks.
- [React Intl](https://github.com/formatjs/react-intl) is a tool that provides an application the ability to have multiple languages (English, Dutch, etc.) within the application

All of these tools are not necessarily React-specific, but allow us to use React in order to create more engaging, feature-rich applications.

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
