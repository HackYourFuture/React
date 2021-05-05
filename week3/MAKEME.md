# Homework React Week 3

## **Todo list**

1. Practice projects
2. Code along
3. PROJECT: Hack Your Weather III
4. Extra: Challenges (Optional)

## **1. Practice projects**
The following exercises give you a prompt of what to build and then provide a solution when stuck. Try to do it yourself as much as possible and then compare to what they give as a solution:

- Create a hook that checks the [screen size](https://epic-react-exercises.vercel.app/react/advanced-hooks/4)

> The solution given is not necessarily the only solution, compare it to yours and see if you can get some good ideas from theirs. Because they want to show just one file, you will notice they put a lot of different functionality in one component. It is generally better to do it in separate components so good job if you thought of that!

## **2. Code along**

> Create a new GitHub repository for this project. It's a portfolio piece!

It's time for another code along! This week you'll learn how to make a cool Video Player! You'll do so using various packages, among those are [styled-components](https://www.npmjs.com/package/styled-components) and [react-router-dom](https://www.npmjs.com/package/react-router-dom).

The first is a third party library that'll make writing CSS rules easier in React applications. And it's also starting to be used in more and more real life applications!

The latter you'll be learning about next week, but the more preparation you have the better.

Enjoy!

- [Build a Video Player](https://www.youtube.com/watch?v=iVRO0toVdYM)

## **3. PROJECT: Hack Your Weather III**

> Make sure you're building on last week's codebase.

The main additions you'll add this week is to (1) keep adding to the list of already searched cities and (2) allow users to remove a city from previous search result.

### Step 1. Add list of searched cities

By the end of this week's assignment your application should look similar to this:

![Week 3 Wireframe](../assets/project/week3.png)

Here are the requirements for this step:

- Any time a user searches for a new city, add it to a list of already searched cities
- Allow a user to delete a search entry, by clicking the "X"
- Only allow a user to use the "Search City" button when the input field has at least 1 character

Hints:

- Think about what data structure makes most sense to use
- Make use of `filter()` when removing cities

### Step 2. Add a forecast page

After that it is time to add another page to `chart` our data (in either hourly or five day forecasts):

![Week 4 Wireframe](../assets/project/week4.png)

These are the requirements:

- Install the following packages: [React Router Dom](https://www.npmjs.com/package/react-router-dom) and [Recharts](https://www.npmjs.com/package/recharts)
-   Divide your page into 2 different routes (`/` and `/:cityId`), using `react-router-dom`
-   Allow users to click on the searched city to open the city page
-   The city page will be on a different route identified by the city id (make use of the `<Link>` component given by `react-router-dom`)
-   On the city page there will be a chart (made with `recharts`) that displays the correct data for 5-day forecast
-   Add a "Back" button to go back to `/`, on the city page
-   Redeploy your site

Hints:

-   Read the documentation to get a basic sense of what problems both `react-router-dom` and `recharts` are trying to solve, and to learn how to use them
-   Make sure to have a clear overview of your application so far, before you add this week's features to it

## **4. Extra: Challenges (Optional)**
Remember that our friends over at CodeYourFuture have provided a repository with different ideas for [challenges to build](https://github.com/CodeYourFuture/cyf-react-challenges). Have a look at the `README.md` in each folder to see what the challenge is and now you can also do ones that require you to connect to an API!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your list it's time to show us what you got! Upload all your files to a forked repository (a copy from the original, which in this case is the [React](https://www.github.com/HackYourHomework/React) repository) using GIT.

If you need a refresher, take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. Project: Hack Your Weather III

_Deadline Saturday 23.59 CET_
