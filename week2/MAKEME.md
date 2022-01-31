# Homework React Week 2

## **Todo list**

1. Prep exercises
2. Optional: Practice exercises
3. PROJECT: Hack Your Weather II
4. Test Exercises
5. Optional: Practice projects
6. Optional: Challenges

## **1. Prep exercises**

> Prep exercises are exercises that you should work on _before_ the session on Sunday. These are a little more difficult or show an important concept and as such are a great exercise to talk about with your mentor. Have a solution ready by Sunday as you may be asked to show what you did.

Inside your `React` fork, go to the folder `week2`. Inside of that folder, navigate to `/prep-exercises`. For each exercise, you will find a separate folder. The `README` explains what needs to be done. There will also be some questions at the bottom to think about. Go through them _before_ the session on Sunday as it will be covered then.

## **2. Optional: Practice exercises**

Practice, practice, practice! Watching videos is a good way to get new ideas, but to cement them into your mind you need to program a lot. What you build is up to you as long as you keep challenging yourself. We have provided some practice exercises to help you if you don't know what to build.

Inside of your `React` fork, go to the folder `week2`. Inside of that folder, navigate to `/practice-exercises`. For each exercise, you will find a separate folder. The `README` explains what needs to be done. Go through them to practice concepts that you have learned about!

## **3. PROJECT: Hack Your Weather II**

> Make sure you're building on last week's codebase.

Let's continue building on our application! This week you'll replace the application's data source: instead of using a JSON file you'll be using an external API, called [OpenWeatherMap](https://openweathermap.org/). In addition to that, you'll add a `search functionality` that allows a user to type in a city name and retrieve weather data on it!

### 1. Setup

1. Sign up for an API key at [OpenWeatherMap App ID](https://openweathermap.org/appid)
2. Create a `.env` file in the root of your project folder
3. Paste the API key inside the `.env` file with the name `REACT_APP_OPENWEATHERMAP_API_KEY`

### 2. Requirements

By the end of this week's assignment your application should look similar to this:

![Week 2 Wireframe](../assets/project/week2.png)

Here are the requirements your project needs to fulfill:

- Your form should have `controlled inputs`
- Make an API call when the button is clicked
- Display the city + weather information similar to week 1
- Make a component for the search
- Incorporate error handling for the API call
- Show user feedback when there are no cities searched for yet
- All your components should be tested
- Redeploy your static site

Hints:

- For the form, use the `onChange` and `value` attributes
- Take the name of the city to use in the API call
- Remember to keep writing tests and refactoring while adding features! So probably start with testing week 1's code

## **4. Test exercises**

This week we have some extra small exercises to practice testing and receive feedback from your homework mentor! In the `test-exercises` folder you will find a react application with some test files. The `README.md` that explains what the idea is.

> If you are feeling up for an extra challenge you can try adding tests to your project! If you are struggling with the complexity of the tests you may need to split your components a bit. Note: this is an optional extra challenge and is not required.

## **5. Optional: Practice projects**

The following exercises give you a prompt of what to build and then provide a solution when stuck. Try to do it yourself as much as possible and then compare to what they give as a solution:

- First let's create a project without an API and [implement a tic-tac-toe game](https://epic-react-exercises.vercel.app/react/hooks/1)
- Now let's use the pokemon API and [build a pokemon finder](https://epic-react-exercises.vercel.app/react/hooks/3)

> The solutions they give is not necessarily the only solution, compare it to yours and see if you can get some good ideas from theirs. Because they want to show just one file, you will notice they put a lot of different functionality in one component. It is generally better to do it in separate components so good job if you thought of that!

## **6. Optional: Challenges**

Remember that our friends over at CodeYourFuture have provided a repository with different ideas for [challenges to build](https://github.com/CodeYourFuture/cyf-react-challenges). Have a look at the `README.md` in each folder to see what the challenge is and now you can also do ones that require you to connect to an API!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your list it's time to show us what you got! Upload all your files to a forked repository (a copy from the original, which in this case is the [React](https://www.github.com/HackYourFuture/React) repository) using GIT. Then make a pull request to your teacher's forked repository.

If you need a refresher, take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. Project: Hack Your Weather II
2. Test exercises

_Deadline Tuesday 23.59 CET_
