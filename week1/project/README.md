# Ecommerce Project I

## 1. Setup

The first step to any project is to setup your development environment. Follow the steps:

1. Inside this folder (`week1/project`), use `create-react-app` to create a React application. Give it the name `ecommerce`
   > You are going to be copying and refactoring your code every week but will simultaneously be getting feedback for previous weeks. As such, at the beginning of every week you copy over the project files from the previous week into a new folder and a new branch. To help you identify if all is well, we suggest keeping it in the week folder that it is a part of.
2. Copy and paste the folder `fake-data` inside the `src` folder of your new project

## 2. Requirements

This week you'll build the foundation of your application. It should eventually look like this:

[![Week 1 Wireframe](../../assets/project/week1.png)](https://hyf-react-w1-example.netlify.app)

There is a live version [here](https://hyf-react-w1-example.netlify.app)

We will be using the information in the `fake-data` folder as an example of what we get back from the API. The actual connection to the API will be done next week.

What you need to have done at the end of the week:

- A product list that displays all of the products in the `all-products` file. _Note: the site is responsive, so have a look at the breakpoints in the deployed example project._
- A category list that displays all of the categories in the `all-categories` file at the top of the page
- If the user clicks on a category only the products that have that category in their `category` property should be displayed on the screen.
- There should only be 1 category active at a time and the user should see which category is selected.
- You need to deploy your app somewhere (using something like [netlify](https://www.netlify.com)) and put the link in your PR!
