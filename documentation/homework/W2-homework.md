# Homework Week 2

## Review

Watch my video on how to make a [todo app from scratch using React](https://youtu.be/vLTtAT-DXzQ). Follow along at your own pace to reinforce the concepts we learned in class.

## Contacts App

We're going to build an application where we can list our contacts, and search/edit/create them. 

* [Contacts App Demo](https://hyf-contacts.netlify.com/).
* [Design (Figma)](https://www.figma.com/file/DXmJSIXabwZh7NWfXq4DDH33/React-Contacts-App)

We'll build up this app throughout the course. This week we're only concerned with the sidebar that lists all the contacts. 

Fork the [HackYourFutureBelgium/React](https://github.com/HackYourFutureBelgium/React) repository, then create a new React app under the `homework-submission` folder:

```
cd react-course/homework-submission
npx create-react-app hyf-contacts
cd hyf-contacts
npm install
npm start
```

## Mock Data

We'll use some mock (test) data first. You can find a JavaScript file with test data [here](https://gist.github.com/fdb/1744a18bf01fb73d9c1add54988c2bbd). Save it as `MockData.js` under the `src` directory. MockData exports a list of contacts. Here's the first example contact item in this list:

```
{
  id: 1,
  firstName: "Ron",
  lastName: "Brookes",
  mobile: "(530) 4689217",
  telephone: "(301) 8210933",
  email: "rbrookes0@timesonline.co.uk",
  homeAddress: "38816 Weeping Birch Park",
  profileImage: "male-1.jpg"
}
```

## Styling

You can use the styling code provided [here](https://gist.github.com/fdb/9e3b38776de694a724f87302e1208961). Replace the existing contents of `index.css` under the `src` directory with this new file. To apply the styling, make sure you use the same markup and class names as the [demo contacts application](https://hyf-contacts.netlify.com/) (use the web inspector to find out).

## Listing Contacts

Change `App.js` to import the `MockData`. Create a constructor like you did in the todo example. In the constructor, create `this.state` and set the property `contacts` equal to `MockData`.

Change the `render()` method to render this list. Read the [React documentation on list and keys](https://reactjs.org/docs/lists-and-keys.html) if you're unsure on how to do this (hint: use a `map` function). Try to render at least the `firstName` and `lastName` fields. Bonus points if you can render the `profileImage` as well!

## Bonus: Filtering / Searching Contacts

You can use the search field to quickly filter the contacts you want. To do that, you need to create an input field with an `onChange` handler that sets `searchText` in the state. Then, in render, instead of rendering the full list of contacts, first you need to **filter** the list based on the searchText.

Check if either the `firstName` field or `lastName` field [include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) the text you searched for. Also, you should probably convert the searchText and firstName and lastName fields [to lowercase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) first.

Then, map over the *filtered* list instead of the original list.


## Create a Pull Request

To submit your homework, create a pull request. We'll check it and provide feedback.



