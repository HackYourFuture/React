# Lesson Plan Week 1

## Agenda

The purpose of this class is to introduce the student to the most basic React concepts:

- How to look at a `webpage` from the React point of view
- What `create-react-app` is
- How to write `reusable components` and why
- The purpose of `JSX`
- What are `props` and how to `pass them down components`

When illustrating these concepts, make use of [create-react-app](https://github.com/facebook/create-react-app). Make sure that students have installed it as well.

_Explain to students what each library does: React, ReactDOM and Babel._

## Core concepts

## 1. Looking at webpages from the React point of view

### Explanation
- Any given page can be broken up into reusable components
- Component hierarchy
### Example
### Excercise 
Show [example](https://htmlstream.com/preview/unify-v2.6.2/unify-main/home/home-default.html) and dissect a part of the site into components. After, ask 2 students to do the same.
### Essence
- Any given page can be broken up into reusable components
- Component hierarchy



## 2. create-react-app

### Explanation
Explain to the student the problems Webpack (ex. React necessitates file bundling to work) and Babel (ex. React makes use of ES2017+ features that need to be converted into syntax that older browsers can understand) solves
### Example

### Excercise 

### Essence
- Generates an fully functional out-of-the-box React environment
- Solves problem of manually configuring file bundler (like Webpack) or transpiler (Babel)
- Improves workflow through `hot reloading`
- Gives a more realistic folder structure
- Building a production version of react app and deploying on static site hosting service (netlify/now)


## 3. Components

### Explanation
### Example
Show example of making a class-based and functional component. After, ask students to do the same.
### Excercise 
### Essence
- Reusable blocks of JavaScript & HTML
- Each component instance can be given different data
- Can display JavaScript values in the HTML, using the { } symbols
- Class component vs. functional component
- Always returns HTML (in the form of JSX)

## 4. JSX

### Explanation
### Example
### Excercise 
### Essence
- A way to write dynamic HTML code with JavaScript
- It is a more intuitive version of the function `createElement()` (that takes its name from the DOM function `createElement()`)
- A component should always return JSX
- These are the parts that will build the DOM structure

_Show example of both JSX and createElement component and ask students to do the same._

## 5. Props

### Explanation
- Props is short for property (like a regular HTML attribute)
- It is (dynamic) data that can be given to child components
- Passed down using an identifier, a self-defined attribute name
- Can be given to multiple instances of components
### Example
### Excercise 
Ask each student to follow along. You'll be showing them how it's done and explaining your thought process along the way. In the second exercise the student needs to remake the app.

1. [Navigation Bar](../../examples/navigationbar)

Make a navigation bar with 3 items. Each item should have a text prop.

- Show how to divide an element into components
- Reuse components
- Pass down props (just a string is fine)

_After showing the example, hide your code and ask students to recreate the same thing._

### Essence


