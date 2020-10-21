# Homework

## Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes
- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch
Using the `hyf-homework` repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b react/week2`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## Outline

Extend your todo list app with the ability to add new random todo items. Also your todo list should start rendering todo items using the following array:

```js
const todos = [
  {
    "id": 1,
    "description": "Get out of bed"
  },
  {
    "id": 2,
    "description": "Brush teeth"
  },
  {
    "id": 3,
    "description": "Eat breakfast"
  }
];

```
This also means that new todo items should be added to this array.

Create a checkbox in each todo item. When you click the checkbox, the done state of the item should change. When an item is marked as done, it should be rendered with a `line-through` decoration. A mockup of the end result is the following:

When there are no items, the todo app should render the text "No items...":

## Life cycle
Using life cycles, set up a timer that counts how long time a users has spent on the website. 

![todolist](assets/todolist.gif)

Requirements:
- Add random item
- Mark todo item as done
- If no items render "No items"
- *Extra* add a possibility to delete an item

## Reading exercises 

Read about `this` binding in Javascript:
- https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
- https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
- https://codeburst.io/binding-functions-in-react-b168d2d006cb

Follow the The Beginner's Guide to React by Egghead https://egghead.io/courses/the-beginner-s-guide-to-react

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Use the branch called `react/week2` 
- Add all your changes to this branch in the `react/week2` folder. 
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `react/week2` branch
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `master`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist
Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/. The feedback should be given after the homework has been handed in, preferably two days after. 

Give the review on the PR exactly how the mentors do it! To find the link for the PR ask the person you are reviewing :) You can see how to give feedback on a PR using github [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)

To help you get started with reviewing we have created [some ressources](https://github.com/HackYourFuture-CPH/curriculum/tree/master/review) about giving feedback. Find them 

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)