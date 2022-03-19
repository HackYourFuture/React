# Homework

## Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `main`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch

Using the `hyf-homework` repo write this command

`git checkout main` - You are now on the `main` branch

`git checkout -b react-react2-week1`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## Github users search

your homework will be searching github users based on the what you type in the input. Use this api: `https://api.github.com/search/users?q=${query}`

Requirements:

- When the search is loading, you should show "loading..."
- When the search is failed, you should show "error fetching (reason why it failed)..."
- When the search result is empty (no users), you should show "No results..."
- All state should be managed using the context api!

![Homework preview](assets/homework-preview.gif)

Try the website here: https://ro6ne.csb.app/

## Working with github api

- Continue using the github API through this url - https://api.github.com (Hint: use postman to query the github API)
- By querying the above url you will view all the api urls that the github API has. You can try to explore them, we recommend that you read the github API documentation. (https://developer.github.com/v3/#current-version)
  - You can try to retrieve the repos data from the HackYourFuture-CPH organisation - (Hint: https://api.github.com/users/.../repos)
  - You can try to display the name of all the repos in your React app
  - If this is to easy for you... surprise us with your creativity... build up on your project and we will have a look!! ;)

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=XYlgh9hSWtw) for a more detailed go-through of how to hand in homework!

- Use the branch called `react-react2-week1`
- Add all your changes to this branch in the `react/react2/week1` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `react-react2-week1` branch and give your PR the same name `react-react2-week1`.
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `main`
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

To help you get started with reviewing we have created [some resources](https://github.com/HackYourFuture-CPH/curriculum/tree/main/review) about giving feedback. Find them

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)
