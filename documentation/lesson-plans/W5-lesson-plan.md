# Lesson Plan Week 5

## Agenda

### MobX Actions

- Actions, generally speaking, are things that modify state

- In the case of MobX, actions (and only actions) are what mutate our store(s)

- Using actions is mandatory in strict mode (this is a good thing)

- _The action wrapper / decorator only affects the currently running function, not functions that are scheduled (but not invoked) by the current function_
  - This is very important in the context of async actions
  - If you have a setTimeout, Promise.then or async construction, and want to change the state in those callbacks, they should be wrapped in action as well
  - [More info](https://mobx.js.org/best/actions.html#writing-asynchronous-actions)

### Asynchronous JavaScript (Promises)

- For a long time, developers had to live in [callback hell](http://callbackhell.com/)

- Now, Promises are native to JavaScript

- The Promise constructor takes one argument, a callback with two arguments, resolve and reject. Do something within the callback, typically async, then call resolve if everything worked, otherwise call reject

- [In-depth explanation here](https://developers.google.com/web/fundamentals/primers/promises)

- Discuss async/await, decide whether or not class wants to use it

### Fetch API

- This is a _browser_ API only, will not work in Node environments

- The new version of XMLHttpRequest

- Fetch uses Promises

- In-depth explanation [here](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

- Examples of fetch usage [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Alternatives (isomorphic):
  - [superagent](https://www.npmjs.com/package/superagent)
  - [axios](https://www.npmjs.com/package/axios)
  - [request](https://www.npmjs.com/package/request)

- We will use fetch for our purposes, because it is standard to all modern browsers and does not require any third-party code

- Fetch requires a little more boilerplate than some alternatives, but overall the API is basically the same

### Data-Fetching MobX Actions

- Remember, fetch returns a Promise, which in turn does its work inside a callback function, so a single `@action` decorator at the top will not work

- Two options:
  - Use action() or runInAction() inside nested MobX actions
  - Perform network requests outside MobX actions, and only use MobX actions to actually mutate with the new data once it’s received

## In-Class Blog App

### TODOs

- Convert application to read/write data from API instead of local state or localStorage
