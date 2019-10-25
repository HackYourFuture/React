# Reading Material React Week 4

## Agenda

These are the topics for week 4:

1. Context API
   - Global state management
   - Connecting state to component
2. Client-side routing
   - Client-side routing vs. server-side routing
   - React-router
   - Protected routes with React-router

## 1. Context API

### Global state management

So far you've learned about `state` and the way to communicate that to other components. This is called `passing down props`. IT's easy enough to do this if we have only a few components. But what happens if we have a 100 components, and we need to pass a piece of state from the top level to the most bottom component?

This would be very time-consuming and unpractical. That's where the idea of a global state management system comes from.

Instead of having state passed down to each component separately, we put state in one central place called a `context`. Then we connect the `context` directly to any component that needs access to state.

- [Context](https://reactjs.org/docs/context.html)
- [React Context](https://www.robinwieruch.de/react-context)

### Connecting state to component

The React library gives us 2 hooks that allow us to use `context`: `useContext` and `useReducer`.

Learn more about these hooks here:

- [useReducer with useContext](https://www.youtube.com/watch?v=BCD2irXaVoE)
- [React Hooks - useContext & useReducer](https://www.youtube.com/watch?v=cjBm0HnYcqw)

## 2. Client-side routing

Routing traditionally happens on the server-side. Whenever a user goes to a certain endpoint, let's say it's `/about` a GET request will be send to the server. The server then responds with an HTML page.

In React, however, we're dealing with a Single Page Application. This means that we're never really sending a request to fetch another page from the server; all pages are already included in the initial render of the whole application.

React doesn't offer this. So we'll have to use a third party library, which is [React-Router](https://github.com/ReactTraining/react-router).

But before we go on, let's first look at the differences between client-side and server-side routing.

### Client-side routing vs. server-side routing



- [Server-side vs. client-side routing](https://www.youtube.com/watch?v=ofCoqejWohA)

### React-router

React itself doesn't offer a way to create client-side routing. That's because it's not necessary

- [React Router Tutorial](https://www.youtube.com/watch?v=Law7wfdg_ls)
- [React Router with Hooks](https://www.youtube.com/watch?v=CZeulkp1ClA)

### Protected routes with React-router

When building React applications, you'll definitely deal with `authentication`. Every login system of some kind applies this concept. In terms of routing, this means that some parts of the app will be accessible only to logged in users. We call those areas `protected routes`.

Go through the following to learn more about them:

- [Protected routes and authentication with React Router](https://www.youtube.com/watch?v=ojYbcon588A)
- [Protected Routes in React using React Router](https://www.youtube.com/watch?v=Y0-qdp-XBJg)
