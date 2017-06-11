# Homework Week 1

## Outline

Create a basic to-do-list app, based on an internal state.

## Details

Given an application state like this:

```
{
  "todos": [
    {
      "description": "<Description>",
      "done":        true / false
    },
    ...
  ]
}
```

Create a React-based app that will list all todos.

## Features

1. The app should list all todos.
2. The app should feature an "Add" button to add a new todo. For now, use the JavaScript `prompt` function to ask the user for a description.
3. Each todo item should be removable.
4. If you get around to it: create a checkbox in each to do to mark the item as done.

## Scoring

You will be scored on:

- Correct functionality
- Code organisation
- Proper metadata (React prop types)
- Cleanliness of code

## Persistence

To add persistence to your application (so you don't have to restart every time you reload), follow these steps:

1. Copy the file `clocks/src/PersistentComponent.js` into your own `src`-directory.
2. In `App.js`, use `import PersistentComponent from './PersistedComponent'` and use `extends PersistedComponent` instead of `extends React.Component`, e.g.

```es6
import React from 'react'
import PersistedComponent from './PersistedComponent'

export default class App extends PersistedComponent {
  ...
}
```

3. Now, when you reload, your data is saved.
4. If ever you want to clear your data, open up the console in your browser, and type: `delete localStorage.appState`.
