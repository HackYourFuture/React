# Reading Material React Week 3

## Agenda

These are the topics for week 3:

1. [Context API](https://study.hackyourfuture.net/#/react/context-api.md)
   - Global state management
   - Connecting state to component
2. [Custom Hooks](https://study.hackyourfuture.net/#/react/custom-hooks.md)
   - Building custom hooks
   - Using other people's custom hooks
3. Testing
   - [e2e testing](https://study.hackyourfuture.net/#/testing/e2e-testing.md)
   - [react-testing-library](https://study.hackyourfuture.net/#/react/testing.md)

## Important note on React

> In the React world there is a huge shift happening since the introduction of 'hooks' in 2018. Before hooks React was built using both class and function components. Currently it is recommended to use only function components in combination with hooks for all of the code you build from now on. When you are going to do research on your own or when you get into your internship you are going to run into class components however. This will be less and less as time goes on and hopefully we can remove this at some point in the future.

> We at HackYourFuture will only be teaching you the recommended way of building applications and have provided a section in the study book to share the most basic details on how to read class components [here](https://study.hackyourfuture.net/#/react/class-vs-function-components.md). If you encounter class components in your research, try to look for a more up to date tutorial, question, or video. If you encounter class components during your internship, then convert it to a function component. The developers will love you :).

## Week goals

This week we are going to look at some more advanced topics.

Firstly, let's have a look at the context API, which sounds like something external but is actually something that React provides us. Have a look [here](https://study.hackyourfuture.net/#/react/context-api.md). A common mistake students make is thinking that you only make one context for every app, but you should think of the context API as way to consolidate state and the functions surrounding it in one place for all subcomponents to use. So when thinking about using the context API, think of it as a way to keep code that belongs together in one place!

As you probably noticed in the router library last week, they have built their own hooks to provide some of the . We can do that too and it is extremely powerful. Have a look at the custom hook section [here](https://study.hackyourfuture.net/#/react/custom-hooks.md) to see how to do it.

Finally, it is time to revisit the topic of testing again. We want to introduce you to two ways of testing: [end-to-end (e2e) testing](https://study.hackyourfuture.net/#/testing/e2e-testing.md) and the [react-testing-library](https://study.hackyourfuture.net/#/react/testing.md). This week we will focus most on end-to-end testing as testing is moving away from heavy unit-testing coverage and moving towards more user-centric focused testing of which e2e testing is the most user-centric you can get. We will have some testing exercises with the react-testing-library that you can do, but they are optional for when you have extra time.

Now the first question that we always get is 'What is the best way of testing?' and to avoid getting this question in the Q&A session: there is no best way of testing. Testing is always a balance of the amount of coverage needed with the amount of time to spend on it. Certain critical applications will need more tests and other less critical applications very little. Certain companies will have automated testing ranked as extremely important, others will have their focus on manual testing. As such there is no answer to the question, you will want to have a basic understanding of both to be prepared, but it will be a company/team decision on how to approach the topic of testing for your specific application. Note that we say `basic understanding` as trying to learn this type of testing in 1 week is impossible.

These are complex topics, so play around with this new knowledge in your own applications!

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
