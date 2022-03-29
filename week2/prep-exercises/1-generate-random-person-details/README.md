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

## Things to think about

In this prep exercise we have gone through some of the steps in a day in the life of a software developer. Important things to note:

- `Start with research!` Do you have all the information you need to build what you were tasked to build? Does the API give the right information? When you are a frontend developer you will need to check with the backend developers. This is important because if you do not have everything available for you and only think of that after putting in days of work you have just screwed over the planning.
- `Break up the problem.` Notice how we started with just getting the data and putting it on the screen without thinking too much? We also ignored the loading and error states at the start to isolate one problem to solve. You will need to do this all the time as you cannot solve everything at once.
- `Break up the code into smaller pieces.` Note the Controller pattern, it is a nice way of splitting up responsibilities, but it is just one way of doing this. Always ask yourself what your component is responsible for, if it is multiple things then try to split it up. This makes your code easier to follow for others!
- `Refactor OFTEN.` Junior developers tend to try to first fix everything and then go into refactoring, which is when they suddenly get daunted by a mountain of work not knowing where to start. If you keep refactoring while building each small feature (`handling loading state` and `handling error message` are both small features here) you will have a much easier time!

Before the session on Sunday, have a think about the following:

- What would you need to do to add a new field to the list of details? Let's say we want to add the phone number! How did the structure of your code help you make this easier?
- What would you need to do to add a button that will fetch a new fake person rather than having one each time? How would you split up the code then?
- How would you do it if we want 10 random people on the screen? How does our splitting of the code help with implementing this feature?
- We made a choice to store the person information in our state as an object. An alternative could be to have each field have their own state, so a `[firstName, setFirstName]`, a `[lastName, setLastName]`, etc. What would the advantages and disadvantages be of doing it that way?
