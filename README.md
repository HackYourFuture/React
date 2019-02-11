> Please help us improve and share your feedback! If you find better tutorials
> or links, please share them by [opening a pull request](https://github.com/HackYourFuture/React/pulls).

# HackYourFuture - React.js

Welcome to the React.js (from this point on: React) module. In these 5 weeks we will go back to the frontend and learn how to make faster, more modern user interfaces.

## Learning goals

In order to successfully complete this module you will need to master the following:

- Understand the React way of thinking about user interfaces
- Know the importance and place of state and how to pass it down
- Be able to work with different lifecycle hooks
- Recognize the utility of modularization
- Putting emphasis on writing reusable code (components)
- Knowing how to connect a Node backend with a React frontend

## Must-reads before starting

Before learning React, you need to understand a couple of things first.

1. React makes use of the latest [JavaScript features](https://www.youtube.com/watch?v=NCwa_xi0Uuc), like [classes](https://medium.com/beginners-guide-to-mobile-web-development/javascript-introduction-to-es6-classes-ecb2db9fe985), [destructuring](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f) and [higher order functions](https://www.sitepoint.com/higher-order-functions-javascript/).

It's important to become familiar with these concepts, as they will drastically help to differentiate what is React-specific and what is regular JavaScript code. In this way you'll much quicker be able to see what exactly the role of React is.

2. You need to become familiar with the idea of SPA: [Single Page Application](https://www.youtube.com/watch?v=wlVmmsMD28w). As opposed to MPA ([Multi Page Application](https://medium.com/@goldybenedict/single-page-applications-vs-multiple-page-applications-do-you-really-need-an-spa-cf60825232a3)), a SPA works with a single HTML file that switches in the content it shows the user. This is all for the sake of performance, speed and better user experience.

React makes use of this SPA structure, bundling all your JavaScript code and injecting that into your singular HTML file. When the browser loads this file React then takes care of what content to show when in an efficient way.

3. You should know the difference between [static](https://www.webnots.com/basics-of-a-static-website/) and [dynamic](https://www.webnots.com/basics-of-dynamic-websites/) websites. While the former deals with content that doesn't change, the latter customizes content depending on the user (and their actions).

There is nothing inherently bad about having static frontends. However, as websites increasingly became more interactive there arose a need to display customized content. Content that is dependent upon the user and user input. This is what React aims to do.

4. Learn about the how and why of [JavaScript frameworks](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445). Whenever building software you can build on top of what others have already done; this is why we use a framework. It not only allows us to structure our application, but also gives us tools on how to achieve certain requirements (like faster loading, and showing customized information to the user)

With that out of the way, let's get started with React!

## Planning

| Week                                                                                                                                                                                                                                                                                                      | Topic                                                          | Reading Materials                                                                                                                                                                                                                                                                                                                                                                                                     | In Class                                                       | Homework                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------- |
| 1.                                                                                                                                                                                                                                                                                                        | Thinking in React                                              |
| [React Philosophy](https://reallifeprogramming.com/react-philosophy-e8cdea991599), [Components](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb), [JSX](https://reactgo.com/learn-react-jsx-detailed/), [Props](https://www.robinwieruch.de/react-pass-props-to-component/) | [W1 Lesson Plan](documentation/lesson-plans/W1-lesson-plan.md) | [W1 Homework](documentation/homework/W1-homework.md)                                                                                                                                                                                                                                                                                                                                                                  |
| 2.                                                                                                                                                                                                                                                                                                        | Data flow in React                                             | [State](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f), [State vs. props](https://codeburst.io/react-state-vs-props-explained-51beebd73b21), [Unidirectional data flow](https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e), [Forms](https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825) | [W2 Lesson Plan](documentation/lesson-plans/W2-lesson-plan.md) | [W2 Homework](documentation/homework/W2-homework.md) |
| 3.                                                                                                                                                                                                                                                                                                        | Advanced React                                                 | [Lifecycle hooks](https://blog.pusher.com/beginners-guide-react-component-lifecycle/), [API calls](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2)                                                                                                                                                                                                                                             | [W3 Lesson Plan](documentation/lesson-plans/W3-lesson-plan.md) | [W3 Homework](documentation/homework/W3-homework.md) |
| 4.                                                                                                                                                                                                                                                                                                        | Bringing it together                                           | [Connecting Node with React](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0) [Connecting Node with React II](https://hackernoon.com/how-to-combine-a-nodejs-back-end-with-a-reactjs-front-end-app-ea9b24715032)                                                                                                                                               | [W4 Lesson Plan](documentation/lesson-plans/W4-lesson-plan.md) | [W4 Homework](documentation/homework/W4-homework.md) |
| 5.                                                                                                                                                                                                                                                                                                        | Test                                                           | [Summary of core concepts](https://medium.com/@madhupathy/learn-basics-of-react-js-in-3-minutes-a94cbc6f02c8)                                                                                                                                                                                                                                                                                                         |                                                                |                                                      |

## Handing in homework

Take a look at [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan, he explains how your homework needs to be handed in.

Also review the Git [workflow material](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md) from the JavaScript3 module, use this as a reference.

Please read [this doc](homework-submission/HOMEWORK.md) for information on how to where to put your homework for this particular module.

_The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)_
