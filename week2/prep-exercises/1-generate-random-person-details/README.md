# Generate random person details

Let's make a simple app by following a step by step approach to get a hang of API calls and testing.

The idea of the app is to make a web application where we can click a button to generate some random, fake data of a person. We can use this app to generate data that we can use if we are creating a demo of an app. The data looks way better than creating 'John 1', 'John 2', etc! We know of an API that provides the data: [https://www.randomuser.me/](https://www.randomuser.me/).

A common problem is to know where to start!

## 1. Setup

1. First, let's make sure we have some place to code. Run `create-react-app` in this folder to create your environment

## 2. Research

Always start with a little research:

- is it clear what needs to be done?
- do I have all the data available to be able to do what needs to be done?

1. Check out the API and what it returns by going to the URL `https://www.randomuser.me/api?results=1`. We can see that the resulting JSON has a `results` property which is an array and that contains an object describing a person. We are interested in the `first name`, `last name` and `email` fields so locate where those are in the object.

## 3. Create the request

Let's focus on getting the data into our app first, we'll worry about the UI later.

1. In the `App` component, create a state variable called `person` that is initialized with null.
2. Now create a function called `getPerson`. The purpose of this function is to make an API call to `https://www.randomuser.me/api?results=1` and put the resulting JSON in the `person` state.
3. Create a `useEffect` hook that will call the `getPerson` function just once! (remember the dependency array).
4. At this point you can add a `console.log` of the `person` object in your `App` component and see if you did the above steps correctly. Adjust where needed!
5. Finally, create a simple `<ul>` element with `<li>` children that show the `first name`, `last name` and `email` fields on the page. Remember that initially the `person` state variable is null, so add a check that if the person is null you do not render anything.
6. Run your app and check that some information is shown on the screen!

## 4. Refactor intermezzo

As always, once you have something new done it is time to think about refactoring. If you don't clean up your code often you will actually start slowing down more and more. As you keep on adding code that is only focused on fixing the problem you are creating a tangled mess we like to call `spaghetti code`. And in the end adding new things will become more and more difficult as you will lose the overview.

So never skip this step! Let's see:

### 4.1 Cleaning up the App component

The most obvious problem here is that we wrote everything in our `App` component. The `App` component is the entry point of your application and should generally not contain any logic. So lets fix that:

1. Create a `PersonController` component and move the `getPerson` function, the `useEffect` and the `person` state to that component.
2. Let's create a `Person` component and move the `<ul>` rendering inside of that component. You will need to create a prop in the `Person` component for the `person` object. Also move your `null` check to that component.
3. Now in the `PersonController` component, return the `Person` component sending in the `person` state as the prop you just created.
4. In the `App` component you can just render a `PersonController` component.
5. Check that everything works again!

This is called the `Controller` pattern in `React` and is commonly used to separate our logic from our rendering. By doing this you make it easier to know what component does what and isolate the responsibilities. By isolating you make it easier to debug, to test and to read. A win/win/win!

### 4.2 Separating state from UI

Although we have nicely separated the fetch statement from the rendering of the details we still have a dependency. If you followed the same steps the return statement of your `Person` component will probably look like:

```js
if (person == null) {
  return null;
}

return (
  <ul>
    <li>First name: {person.name.first}</li>
    <li>Last name: {person.name.last}</li>
    <li>Email: {person.email}</li>
  </ul>
);
```

This is not great, we just sent the person object along to the render component without formatting it. This has created a dependency between the API and our rendering component, so that if the API changes, the bug is actually in the rendering component rather than the controller component. We are also sending _all_ of the information to our rendering component, which is not efficient.

That is not great, so let's make it that our `person` object that we send to the `Person` component actually only contains the information that component needs in an easy way.

1. In the `Person` component, change the return statement so that you get the `first_name`, `last_name` and `email` from the object. Then adjust your `PersonController` component to create that object rather than putting all of the information in the state.

Now we have it nicely that anyone can use this `Person` component by providing the data without it being dependent on the API structure!

## 5. Add tests

After refactoring the code it is time to write our tests.

### 5.1 Person component

Let's start with the easier of our two components, the `Person` component!

Create a `Person.test.js` and create the test scaffold structure (have a look at the default `App.test.js` file for a hint on how to do that). And then you can delete the `App.test.js` file.

Looking at the component from someone who uses this component, we want to test the following:

- If the `person` prop you give is `null` or `undefined` then it should not render anything.
- If we give a `person` object with the fields `first_name`, `last_name` and `email` then those fields should be in the DOM.

Isn't it nice that the component is nice and small and is only responsible for one thing? Makes thinking of tests so much easier.

Remember when writing tests, that you do them one by one and continue checking that your tests are producing the right results. If you write a lot at once you will only make things more complicated for yourself. So:

1. Write a test that gives `null` as the `person` prop to the component and check that the component does not render. Check the `react-testing-library` for a function that checks if something is an empty DOM element. Check that it is green.
2. Write a test that does not give a `person` prop to the `Person` component and check again that is an empty DOM element. Check that it is green.
3. Write a test that gives an object with a `first_name`, `last_name` and `email` property and check that those variables are in the DOM. Check that it is green.

All good! I think we are done...

#### 5.1.1 WAIT A MINUTE

While writing the tests, something came up. How will our component react if we only give a first name and last name? Let's write a test to see what happens!

1. Copy over your test with the `first_name`, `last_name` and `email` property and see what is the result. Apparently, our application just writes `E-mail: ` without anything after it.
2. That is not great, let's make it say `E-mail: --`. That way it is clear that that field was not filled in.
3. Edit your test to expect the text to be `E-mail: --`. Your test will now be red, time to fix the application so that your test turns green!
4. Add another test and fix the application to write `--` if there is no `first_name` aswell as if there is no `last_name` field

This will happen all the time, while testing you usually see things that you didn't think of before because we are usually very focused on the happy path and are working with complete data. By writing tests we think of the code differently and we may think of things that we hadn't thought of before. Allowing us to create more robust code.

### 5.2 PersonController component

The `PersonController` component is a lot more difficult to test as now we are dependent on an external piece of code: the API.

Let's first think about the component and what we want to test. The responsibility of the component is to get the data from the API and then render a `Person` component. So if we think about the tests we should probably:

- Test that whatever is given back by the API is shown on the screen as that is what the User of the component expects.
- Test that a loader is shown if the API is responding slowly so the user knows it is still busy
- Test that an error message is shown if the API gives back an error.

If you programmed like me, you probably did not create the loader/error functionality, luckily we thought about it when testing. Let's get started!

From the reading materials we have learned that to test something with an external API we can use the [Mock Service Worker library](https://mswjs.io/). So let's do that:

#### 5.2.1 The happy path

The first thing we will do is the happy path, when the API works as expected and everything is shown on the screen. This is a little tricky, as we need to fake the API call! So let's do it together:

1. Install `msw` by running `npm install msw --save-dev`. Remember to do `--save-dev` as we want it to be a developer dependency!
2. Now let's create a test file for the `PersonController` component and set up the scaffold as we did before.
3. msw allows us to set up a fake server, to do that we need the following code. Put it in the right places! We've added some comments here to help you figure out what each line dus!

```js
import { rest } from "msw";
import { setupServer } from "msw/node";

// Configures our server for this file
const server = setupServer(
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
    // This part generates the response whenever our code calls the url

    // response is a function, ctx is our context that is provided. We call json to tell it to convert it to json
    return res(
      ctx
        .json
        // the object it should return. Look at what you get back from the API so you know what structure to follow. Remember that we only use 3 fields, so you don't need to copy in the rest
        ()
    );
  })
);

// beforeAll takes a function and it will call that function before running the test. The server.listen() means that it will start the server up
beforeAll(() => server.listen());

// afterEach takes a function and it will call that function after every single test. The resetHandlers will make sure that after running a test any changes that were made are reset
afterEach(() => server.resetHandlers());

// afterAll takes a function and it will call that function after all the tests have run. This will stop the server so that it doesn't keep running after the tests are done
afterAll(() => server.close());
```

4. We can now write our test by rendering a `PersonController` component and then checking if the first name, last name and email is in the DOM (just like with our `Person` component).

You may probably notice first that the test does not find anything in the DOM if you use the `getBy` version of the grab function. This is because our fetching happens in the `useEffect` which means it will only grab data AFTER rendering, but our tests do not wait for this to happen. Luckily `react-testing-library` has an easy way to work with this and that is to use the `findBy` version of the function. By writing `await findByText(...)` you tell the test to wait until it is actually found. Nice!

#### 5.2.2 Loader

So initially you may not have built a loader state, but adding one should not be too difficult. Usually it would be a spinner or something similar, but for the purposes of this exercise we can just add a text that says `Loading...`. Now we can add a test that checks that initially this `Loading...` text is in the DOM. After that we can wait for our person information to come on the screen as we did in the first test. Then we should check that once the information is on the screen, the `Loading...` text is gone!

That was easier than expected.

### 5.2.3 Error

We should also check what happens when the API returns an error. Probably you just have a `console.error` statement that shows it to the console. That is fine for learning purposes, but not for production ready code! Let's fix it:

1. Add some code that shows the text `Error while fetching data` on the screen if an error is returned from the API!
2. In that specific test we now want to override the return statement we defined in the `setupServer` command so that we can return an error. To do that, we can use the `server.use()` function! Have a look at the video in your reading materials if you forgot how to do this.
3. Now we can just wait for the error message to show up in our test and we are assured that if something goes wrong, the user will know!

## Things to think about

In this prep exercise we have gone through some of the steps in a day in the life of a software developer. Important things to note:

- `Start with research!` Do you have all the information you need to build what you were tasked to build? Does the API give the right information? When you are a frontend developer you will need to check with the backend developers. This is important because if you do not have everything available for you and only think of that after putting in days of work you have just screwed over the planning.
- `Break up the problem.` Notice how we started with just getting the data and putting it on the screen without thinking too much? We also ignored the loading and error states at the start. You will need to do this all the time as you cannot solve everything at once.
- `Break up the code into smaller pieces.` Note the Controller pattern, it is a nice way of splitting up responsibilities, but it is just one way of doing this. Always ask yourself what your component is responsible for, if it is multiple things then try to split it up. It makes testing so much easier if there are clear responsibilities.
- `Refactor and write tests OFTEN.` Junior developers tend to try to first fix everything and then go into refactoring and testing, which is when they suddenly get daunted by a mountain of work not knowing where to start. If you keep refactoring and writing tests while building each small feature (`handling loading state` and `handling error message` are both small features here) you will have a much easier time!

Before the session on Sunday, have a think about the following:

- What would you need to do to add a new field to the list of details? Let's say we want to add the phone number!
- What would you need to do to add a button that will fetch a new fake person rather than having one each time? How would you split up the code then?
- How would you do it if we want 10 random people on the screen? How does our splitting of the code help with implementing this feature?
- We made a choice to store the person information in our state as an object. An alternative could be to have each field have their own state, so a `[firstName, setFirstName]`, a `[lastName, setLastName]`, etc. What would the advantages and disadvantages be of doing it that way?
