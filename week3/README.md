# Reading Material React Week 3

## Agenda

These are the topics for week 3:

1. [Client-side routing](https://study.hackyourfuture.net/#/react/routing.md)
   - React-router
   - Protected routes
2. [Context API](https://study.hackyourfuture.net/#/react/context-api.md)
   - Global state management
   - Connecting state to component
3. [Custom Hooks](https://study.hackyourfuture.net/#/react/custom-hooks.md)
   - Building custom hooks
   - Using other people's custom hooks
4. [Testing custom hooks](https://study.hackyourfuture.net/#/react/testing.md) _(Just the sections on timing and custom hooks, you did the rest last week!)_)

## Important note on React

> In the React world there is a huge shift happening since the introduction of 'hooks' in 2018. Before hooks React was built using both class and function components. Currently it is recommended to use only function components in combination with hooks for all of the code you build from now on. When you are going to do research on your own or when you get into your internship you are going to run into class components however. This will be less and less as time goes on and hopefully we can remove this at some point in the future.

> We at HackYourFuture will only be teaching you the recommended way of building applications and have provided a section in the study book to share the most basic details on how to read class components [here](https://study.hackyourfuture.net/#/react/class-vs-function-components.md). If you encounter class components in your research, try to look for a more up to date tutorial, question, or video. If you encounter class components during your internship, then convert it to a function component. The developers will love you :).

## Week goals

This week we are going to look at some more advanced topics. Let's start with looking at routing. Because we build single page applications in React, the location in the address bar has no effect on what we should show. When building more advanced applications that becomes a problem, as we want to be able to define different pages. To solve this we use what is called client-side routing, have a look [here](https://study.hackyourfuture.net/#/react/routing.md).

As you can see in the router library, they have built their own hooks. We can do that too and it is extremely powerful. Have a look at the custom hook section [here](https://study.hackyourfuture.net/#/react/custom-hooks.md) to see how to do it.

Secondly, let's have a look at the context API, which sounds like something external but is actually something that React provides us. Have a look [here](https://study.hackyourfuture.net/#/react/context-api.md). A common mistake students make is thinking that you only make one context for every app, but you should think of the context API as way to consolidate state and the functions surrounding it in one place for all subcomponents to use. So when thinking about using the context API, think of it as a way to keep code that belongs together in one place!

These are complex topics, so play around with this new knowledge in your own applications!

You will want to test your custom hooks, so that means it is time to finish off the [testing section](https://study.hackyourfuture.net/#/react/testing.md) that explains how to do just that.

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
