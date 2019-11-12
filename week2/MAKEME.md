# Homework React Week 2

## **Todo list**

1. Practice the concepts
2. React exercises
3. Code along
4. PROJECT: Hack Your Weather II

## **1. Practice the concepts**

We'll start the week off with some online exercises again. Complete the exercises from the following:

- [Codecademy: Learn ReactJS II](https://www.codecademy.com/learn/react-102)

## **2. React exercises**

> Inside of your `React` fork, go to the `week1` folder and create a React application called `react-exercises` (use `create-react-app`). Inside of the `src` folder create a JavaScript file with an appropriate name.

**Exercise 1: New friend on demand**

What if there was an app that could generate a new friend, instantly? How about we make one!

In this exercise we'll be using the following API endpoint: `https://www.randomuser.me/api?results=1`

1. Create 2 functional components called `<Friend>` and `<Button>`
2. Inside create a state variable called `friend` (with initial state of `{}`) and state handler `setFriend`
3. Inside (before the return statement) also create a function called `getFriend`. The purpose of this function is to make an API call to `https://www.randomuser.me/api?results=1`. You can either use `fetch` or `axios`. At the end of the function reassign the `friend` state value using `setFriend`
4. Inside the `<Button>` component, create a `<button>` that has the text "Get a friend!" and `onClick` attribute
5. Pass down the function `getFriend` to `<Button>`
6. NOT FINISHED
7. Test if everything works by importing it into the top level component, which is `<App>`

**Exercise 2: Dog photo gallery**

Let's make a randomized dog photo gallery!

In this exercise we'll be using the following API endpoint: `https://dog.ceo/api/breeds/image/random`

1. Create 3 functional components: `<DogGallery>`, `<DogPhoto>` and `<Button>`
2. Inside `<DogGallery>` create a state variable called `dogPhotos` (initialize with value `[]`) and state handler `setDogPhotos`
3. Inside (before the return statement) also create a function called `getDogPhoto`. The purpose of this function is to make an API call to `https://dog.ceo/api/breeds/image/random`. You can either use `fetch` or `axios`. At the end of the function push the new `dog image URL` into the `dogPhotos` array state value using `setDogPhotos`
4. Inside the `<Button>` component, create a `<button>` that has the text "Get a dog!" and `onClick` attribute
5. Pass down the function `getDogPhoto` to `<Button>`
6. Inside `<DogGallery>` return all the dogs stored in the `dogPhotos` array using the `map()` function. However, when there are no dogs yet make sure to display the message "Get your first dog by clicking the button!"
7. Test your components by importing it into the top level

**Exercise 3**

## **3. Code along**

In the following tutorial you'll learn how to

- [Build a Calculator with React and Flexbox](https://www.youtube.com/watch?v=KzYUuTiHdiY)

## **4. PROJECT: Hack Your Weather II**

> Make sure you're building on last week's codebase.

Let's continue building on our application! This week you'll replace the application's data source: instead of using a JSON file you'll be using an external API, called [OpenWeatherMap](https://openweathermap.org/). In addition to that, you'll add a `search functionality` that allows a user to type in a city name and retrieve weather data on it!

### 1. Setup

1. Sign up for an API key at [OpenWeatherMap App ID](https://openweathermap.org/appid)
2. Create a `.env` file in the root of your project folder
3. Paste the API key inside the `.env` file with the name `OPENWEATHERMAP_API_KEY`

### 2. Requirements

By the end of this week's assignment your application should look similar to this:

![Week 2 Wireframe](../assets/project/week2.png)

Here are the requirements your project needs to fulfill:

- Your form should have `controlled inputs`
- Make an API call when the button is clicked
- Display the city + weather information similar to week 1
- Make a component for the search

Hints:

- For the form, use the `onChange` and `value` attributes
- Take the name of the city to use in the API call

## **SUBMIT YOUR HOMEWORK!**

After you've finished your list it's time to show us what you got! Upload all your files to a forked repository (a copy from the original, which in this case is the [React](https://www.github.com/HackYourFuture/React) repository) using GIT. Then make a pull request to your teacher's forked repository.

If you need a refresher, take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. React exercises
2. Project: Hack Your Weather II

_Deadline Saturday 23.59 CET_
