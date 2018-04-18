# Lesson Plan Week 4

## Agenda

### Flux Concepts

- Docs [here](https://facebook.github.io/flux/docs/in-depth-overview.html#content), but they are pretty long and overly complicated

- _Flux is just an idea, not a framework or library_

- Why do we need state management outside React?
  - Joost’s slideshow [here](http://slides.com/joostlubach/react-3#/)

- Unidirectional data flow, just like React component trees
  - This is sometimes called “one-way data binding”
  - Other frameworks, like Angular, use two-way binding
  - Facebook decided that two-way binding leads to increased complexity and therefore more bugs

- But, any component anywhere in the React tree can listen directly to the store for changes

- Actions, and _only_ actions, change our application state, so it’s very clear where changes happen
  - Easier to isolate logic
  - Easier to track down bugs

![flux](img/flux.png "Flux")

- Store, or stores?
  - Flux doesn’t care, this is an implementation decision
  - Redux: one, big store
  - MobX: many, smaller stores

- The “View” is simply our React tree - any component can listen for store changes or get store changes as props from another listener

- In Redux, we have separated concerns into actions, reducers, etc, with their own files (it gets complicated)

- In MobX, Action/Dispatcher/Store all live in one class for us

## MobX

- Docs [here](https://mobx.js.org/)

- MobX is a flux implementation

- In the most simple example, we have “observables” and “observers”
  - “Observables” are state data that can be “listened to”
  - “Observers” are React components that “listen to” observables

- Actions update observable values, which then update components

- Components trigger actions (eg on a button click)

![mobx](img/mobx.png "MobX")

- We need two libraries: `mobx` and `mobx-react`
  - `mobx` is the core library that just handles reactive classes, and is not opinionated about React
  - `mobx-react` is the helper utility that provides bindings for React… which means it lets our React components connect to MobX stores

- Decorators
  - A little bit controversial, as the spec is not formalised yet
  - Not officially part of JavaScript… yet
  - Syntatic sugar to wrap classes (and only classes) in functions
  - Read more [here](https://survivejs.com/react/appendices/understanding-decorators/)
  - Will make our MobX code shorter and easier to read

- Ejecting from `create-react-app`
  - So, `create-react-app` is really simple, and hides a lot of complexity behind the scenes
  - We need more control over our projects to enable decorators, so we need to eject
  - To eject and enable decorators, follow [this easy guide](https://swizec.com/blog/mobx-with-create-react-app/swizec/7158)

## Examples

### Counter

- Refactor our previous super simple counter example to use MobX for state management

## In-Class Blog App

### TODOs

- Install mobx and mobx-react

- Eject from CRA and enable decorators

- Move all state into MobX store(s)
