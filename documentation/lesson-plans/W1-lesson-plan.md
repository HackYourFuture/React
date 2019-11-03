# Lesson Plan Week 1

## Agenda

The purpose of this class is to introduce the student to the most basic React concepts:

- How to look at a webpage from the React point of view
- How to write reusable components and why
- The purpose of JSX
- What are props and how to pass them down components
- Most important: React is just a simple library/script that allows you to make dynamic, modern user interfaces

In order to keep it as simple as possible, please use the `React CDN` instead of create-react-app. For more info check the following [link](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute).

_Explain to students what each library does: React, ReactDOM and Babel. Then ask the to download the same files and follow along._

## Core concepts

1. Looking at webpages from the React point of view

- Any given page can be broken up into reusable components
- Component hierarchy

_Show [example](https://htmlstream.com/preview/unify-v2.6.2/unify-main/home/home-default.html) and dissect a part of the site into components. After, ask 2 students to do the same._

2. Components

- Reusable blocks of JavaScript & HTML
- Each component instance can be given different data
- Can display JavaScript values in the HTML, using the { } symbols
- Class component vs. functional component
- Always returns HTML (in the form of JSX)

_Show example of making a class-based and functional component. After, ask students to do the same._

3. JSX

- A way to write dynamic HTML code with JavaScript
- It is a more intuitive version of the function `createElement()`
- A component should always return JSX
- These are the parts that will build the DOM structure

_Show example of both JSX and createElement component and ask students to do the same._

4. Props

- Props is short for property (like a regular HTML attribute)
- It is (dynamic) data that can be given to child components
- Passed down using an identifier, a self-defined attribute name
- Can be given to multiple instances of components

_Show example of a prop and ask the students to make their own props (and pass to their components)_

## Build with students

Ask each student to follow along. You'll be showing them how it's done and explaining your thought process along the way. In the second exercise the student needs to remake the app.

1. [Navigation Bar](../../examples/navigationbar)

Make a navigation bar with 3 items. Each item should have a text prop.

- Show how to divide an element into components
- Reuse components
- Pass down props (just a string is fine)

_After showing the example, hide your code and ask students to recreate the same thing._
