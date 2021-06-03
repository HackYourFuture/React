# Homework

## Get git ready to work on homework

Using the 🚨 `meal-sharing` 🚨 repo. Not the `hyf-homework` repo! In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch

Using the 🚨`meal-sharing`🚨 repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b react/week5`

This will create and checkout the branch so you are ready make commits to it

On slack use the #git-support channel to ask questions about git

## Meal sharing app continued

Using your `meal-sharing` repo lets create the frontend for the site!

Hopefully the backend is pretty built out from the `nodejs/week3` homework

### Adding frontend routes

| Route         | Description                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`           | Add a page title and a sub title. Under that render all the meals found in the database. Please add more to this page like footer, menu, logo, etc. |
| `/meals/{id}` | Render the meal with the specific `id`. Add a form to create reservations for the meal                                                              |
| `/meals`      | Render all the meals found in the database with a link to their respective pages (`meals/3`). Add a form to create a meal.                          |

When it says `render the meal` What is rendered is up to you! You could render the `title`, `id`, `description` but you decide what makes sense and what looks good! You are in charge 💪

Rendering the html will all be done client side. 

1. Using `fetch` get the meals from `/api/meals`
2. Then updating some state that will then render the meals

### /meals/{id}

The `/meals/{id}` route should have a form for making a reservation for that meal. The form should have `phonenumber`, `name` and `email`. When creating a new reservation with a form, use the `POST /api/reservations` route

This form should only be shown if the meal does have available reservations!

That means that we in js need to:

- When the "book seat" button is clicked get the `phonenumber`, `name` and `email` from either the form or the individual inputs
- Now create a [post request using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) with the `phonenumber`, `name` and `email`. Posting the request [here](../week3/homework.md#meal)
- If the request is successful indicate to the user that the request went well. If it was unsuccessful show an error message. This we could do using `alert`

### Styling

Add some styling to the website so it is not so basic looking!

### Now what?

That is up to you! There are two optional features below. But if you have other things you would prefer to add to the site please do! 

Now is your time to really show off 

### Autocomplete for meals _optional_

Create an autocomplete for searching for a meal. The autocomplete should be added to the `home` route and the `meals` route. The autocomplete should use the query parameter `title` in the `api/meals` api. like this: `/api/meals?title=lasagn`

### Reviews _optional_

Create the possibility for a person to leave a review for a meal.

### Deploying

We will finish and deploy the meal sharing site next week: https://github.com/HackYourFuture-CPH/node.js/blob/master/deployment.md

## Hand in Homework:

- Use the branch called `react/week5`
- Add all your changes to this branch in the `react/week5` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `react/week5` branch
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

Finally, feel free to give feedback to the mentors and staff [here](https://forms.gle/t3FgysinXddDRJdM8).
