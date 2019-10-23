> If you are following the HackYourFuture curriculum we recommend you to start with module 1: [HTML/CSS/GIT](https://github.com/HackYourFuture/HTML-CSS). To get a complete overview of the HackYourFuture curriculum first, click [here](https://github.com/HackYourFuture/curriculum).

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by [opening a pull request](https://github.com/HackYourFuture/React/pulls).

# Module #7 - React.js: Building dynamic UIs with modern JavaScript (Frontend)

![React Module](./assets/react.png)

Welcome to the React module! Congratulations on making it this far!

In these 5 weeks we will go back to the frontend and learn how to make faster, more modern user interfaces. In the HTML and JavaScript modules you've learned all about creating webpages that that hold unchanging data. No matter who is using the website, the data will always be the same. We call this a `static website`. At the same time you've build various HTML pages so the user is able to access various parts of the website. We call this a `multi-page application (MPA)`

In the Node.js module you've learned about how to change the content of the page, based on the user's input, using a `templating engine`. Type in a keyword and the server sends back a `template` with customized data. We call this a `dynamic website`. However, we did it in such a way were we still had to send different pages to the client depending on the URL (for example, `/` or `/users`). This is also an MPA.

In this module, however, you'll learn how to make more complex websites. Though, we won't be calling them websites anymore: they'll be `web applications`. They're not just informational, but allow the user to interact with it. This similar to any application on your desktop. These React applications will also deal with `dynamic data`: its `state` changes depending on who's using it.

Besides being dynamic, React applications also are `single page applications (SPA)`. Essentially, this means that on loading the whole application (every page and its contents) is accessible to the user, without the need to send requests to the server to get another page.

## Learning goals

In order to successfully complete this module you will need to master the following:

- Understand the React way of thinking about user interfaces
- Know the importance and place of state and how to pass it down
- Be able to work with different lifecycle hooks
- Distinguish between class-based versus function-based components
- Recognize the utility of modularization
- Putting emphasis on writing reusable code (components)
- How to handle client-side routing

## How to use this repository

This repository consists of 3 essential parts:

1. `Reading materials`: this document contains all the required theory you need to know _**while**_ you're coding. It's meant as both study material and as a reference to understand what you're doing.
2. `Homework`: this document contains the instructions for each week's homework.
3. `Lesson Plans`: this part is meant for teachers as a reference. However, as a student don't be shy to take a look at it as well!

After your first class you should start off with checking the `reading materials` for that week. At the beginning that would be the [Week 1 Reading](/Week1/README.md). Study all the concepts and try to get the gist of everything. After, you can get started with the `homework` for that week.

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!

## Before you start

In order to properly work through this module smoothly we're going to use software that will allow us to write React applications with ease. It's called `create-react-app`.

Go to your command line and execute the following:

```
npm install -g create-react-app
```

Now verify that you have it by executing the following:

```
create-react-app --version
```

It should be at least version `2.1.x`.

## Planning

| Week | Topics                                          | Reading Materials                | Homework                         | Lesson Plans                            |
| ---- | ----------------------------------------------- | -------------------------------- | -------------------------------- | --------------------------------------- |
| 1.   | What is React, JSX, Props, Deploy a static site | [Readings W1](./week1/README.md) | [Homework W1](./week1/MAKEME.md) | [Lesson Plan W1](./week1/LESSONPLAN.md) |
| 2.   | State I, Hooks I, API calls, Forms              | [Readings W2](./week2/README.md) | [Homework W2](./week2/MAKEME.md) | [Lesson Plan W2](./week2/LESSONPLAN.md) |
| 3.   | State II, Hooks II, Third party components      | [Readings W3](./week3/README.md) | [Homework W3](./week3/MAKEME.md) | [Lesson Plan W3](./week3/LESSONPLAN.md) |
| 4.   | Context, Client-side routing                    | [Readings W4](./week4/README.md) | [Homework W4](./week4/MAKEME.md) | [Lesson Plan W4](./week4/LESSONPLAN.md) |
| 5.   | Test                                            | [Details](./week5/test.md)       | -                                | -                                       |

## Finished?

Did you finish the module? Impressive!

If you feel ready for the **final** challenge, click [here](https://www.github.com/HackYourFuture/Project) to go to Project!

_The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)_

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
